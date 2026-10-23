"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('MentionEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when GUBANOV_FILES_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('GUBANOV_FILES_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.GubanovFilesSDK.test();
        const ent = testsdk.Mention();
        (0, node_assert_1.default)(null != ent);
    });
    class FailHook extends __1.BaseFeature {
        name = 'failhook';
        version = '0.0.1';
        active = true;
        unexpected = 0;
        init() { }
        PreSpec() { throw new Error('mention hook failed'); }
        PreUnexpected() { this.unexpected++; }
    }
    (0, node_test_1.test)('stream-error', async () => {
        const offline = { net: { offline: true } };
        await node_assert_1.default.rejects(async () => {
            for await (const _item of __1.GubanovFilesSDK.test(offline).Mention().stream('list')) { }
        }, /offline/);
        for await (const _item of __1.GubanovFilesSDK.test(offline).Mention()
            .stream('list', undefined, { ctrl: { throw: false } })) { }
        if (null != __1.config.feature?.rbac) {
            const denied = __1.GubanovFilesSDK.test(undefined, { feature: { rbac: { active: true, deny: true } } });
            await node_assert_1.default.rejects(async () => {
                for await (const _item of denied.Mention().stream('list')) { }
            }, (err) => 'rbac_denied' === err.code);
        }
    });
    (0, node_test_1.test)('stream-ctrl', async () => {
        const explain = {};
        const ctrl = { explain };
        for await (const _item of __1.GubanovFilesSDK.test().Mention().stream('list', undefined, { ctrl })) { }
        node_assert_1.default.deepStrictEqual(Object.keys(ctrl), ['explain']);
        (0, node_assert_1.default)(explain === ctrl.explain && 0 < Object.keys(explain).length);
    });
    (0, node_test_1.test)('unexpected', async () => {
        const hook = new FailHook();
        const client = new __1.GubanovFilesSDK({ feature: { test: { active: true } }, extend: [hook] });
        await node_assert_1.default.rejects(client.Mention().list(), /hook failed/);
        (0, node_assert_1.default)(0 < hook.unexpected);
        const fired = hook.unexpected;
        node_assert_1.default.strictEqual(await client.Mention().list(undefined, { throw: false }), undefined);
        (0, node_assert_1.default)(fired < hook.unexpected);
    });
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.GubanovFilesSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.Mention().list({ "content": 1 }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.GUBANOV_FILES_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'mention.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "content": { "a": true, "h": "Content", "n": "content", "r": true, "sh": "Summary text in the original language.", "t": "`$STRING`", "key$": "content", "index$": 0 }, "content_en": { "a": true, "h": "Content En", "n": "content_en", "r": true, "sh": "English summary.", "t": "`$STRING`", "key$": "content_en", "index$": 1 }, "content_ru": { "a": true, "h": "Content Ru", "n": "content_ru", "r": false, "sh": "Russian summary.", "t": "`$STRING`", "key$": "content_ru", "index$": 2 }, "content_ua": { "a": true, "h": "Content Ua", "n": "content_ua", "r": true, "sh": "Ukrainian summary.", "t": "`$STRING`", "key$": "content_ua", "index$": 3 }, "date": { "a": true, "fo": "date-time", "h": "Date", "n": "date", "r": true, "sh": "Publication date, ISO 8601 at midnight UTC, e.g.", "t": "`$STRING`", "key$": "date", "index$": 4 }, "dateFormatted": { "a": true, "h": "Date Formatted", "n": "dateFormatted", "r": true, "sh": "The same date as `DD.MM.YYYY`.", "t": "`$STRING`", "key$": "dateFormatted", "index$": 5 }, "id": { "a": true, "h": "Id", "n": "id", "r": true, "sh": "Mention id, e.g.", "t": "`$STRING`", "key$": "id", "index$": 6 }, "sourceName": { "a": true, "h": "Source Name", "n": "sourceName", "r": true, "sh": "Name of the blogger or outlet (Russian).", "t": "`$STRING`", "key$": "sourceName", "index$": 7 }, "sourceUrl": { "a": true, "h": "Source Url", "n": "sourceUrl", "r": true, "sh": "Link to the original material (YouTube video, Telegram post, article).", "t": "`$STRING`", "key$": "sourceUrl", "index$": 8 }, "title": { "a": true, "h": "Title", "n": "title", "r": true, "sh": "Title in the original language (usually Russian).", "t": "`$STRING`", "key$": "title", "index$": 9 }, "title_en": { "a": true, "h": "Title En", "n": "title_en", "r": true, "sh": "English title.", "t": "`$STRING`", "key$": "title_en", "index$": 10 }, "title_ru": { "a": true, "h": "Title Ru", "n": "title_ru", "r": false, "sh": "Russian title.", "t": "`$STRING`", "key$": "title_ru", "index$": 11 }, "title_ua": { "a": true, "h": "Title Ua", "n": "title_ua", "r": true, "sh": "Ukrainian title.", "t": "`$STRING`", "key$": "title_ua", "index$": 12 } }, "id": { "field": "id", "name": "id" }, "name": "mention", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /mentions", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "GET", "o": "/mentions", "q": {}, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "mentions" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "mention", "name__orig": "mention", "Name": "Mention", "name_": "mention", "name-": "mention", "NAME": "MENTION", "index$": 1 }, { "active": true, "entity": "mention", "key$": "BasicMentionFlow", "kind": "basic", "name": "BasicMentionFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "mention_ref01" } }], "index$": 0 }] }, 'Mention', { "GET /mentions": { "protocol": "http", "parameters": [] } }, { strict: LIVE_STRICT, t });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let mention_ref01_data = Object.values(setup.data.existing.mention)[0];
        // LIST
        const mention_ref01_ent = client.Mention();
        const mention_ref01_match = {};
        const mention_ref01_list = (await mention_ref01_ent.list(mention_ref01_match)).map((e) => e.data());
    });
});
// main.kit.test.live.strict is true (the default is true): a live
// request that fails, or a live test missing an input it needs,
// fails the test.
// An account with no record for a test to read skips it either way.
const LIVE_STRICT = true;
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/mention/MentionTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.GubanovFilesSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['mention01', 'mention02', 'mention03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'GUBANOV_FILES_TEST_MENTION_ENTID': idmap,
        'GUBANOV_FILES_TEST_LIVE': 'FALSE',
        'GUBANOV_FILES_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['GUBANOV_FILES_TEST_MENTION_ENTID'];
    const live = 'TRUE' === env.GUBANOV_FILES_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['GUBANOV_FILES_TEST_MENTION_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.GubanovFilesSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {},
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
    }
    const setup = {
        idmap,
        env,
        options,
        client,
        struct,
        data: entityData,
        explain: 'TRUE' === env.GUBANOV_FILES_TEST_EXPLAIN,
        live,
        transport,
        now: Date.now(),
    };
    return setup;
}
//# sourceMappingURL=MentionEntity.test.js.map