import { AvatarEntity } from './entity/AvatarEntity';
import { MentionEntity } from './entity/MentionEntity';
import { StatusEntity } from './entity/StatusEntity';
export type * from './GubanovFilesTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { GubanovFilesEntityBase } from './GubanovFilesEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
type DirectResult = {
    ok: false;
    err: any;
    status?: undefined;
    headers?: undefined;
    data?: undefined;
} | {
    ok: boolean;
    status: number;
    headers: any;
    data: any;
    err?: any;
};
declare class GubanovFilesSDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<DirectResult>;
    _rawRequest(fetchargs?: any): Promise<DirectResult>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    Avatar(entopts?: Record<string, any>): AvatarEntity;
    Mention(entopts?: Record<string, any>): MentionEntity;
    Status(entopts?: Record<string, any>): StatusEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): GubanovFilesSDK;
    tester(testopts?: any, sdkopts?: any): GubanovFilesSDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof GubanovFilesSDK;
export { stdutil, config, BaseFeature, GubanovFilesEntityBase, GubanovFilesSDK, SDK, };
export type { DirectResult };
