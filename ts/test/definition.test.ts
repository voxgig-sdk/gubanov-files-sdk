import { describe, test } from 'node:test'
import { SDK } from '..'
import { runDefinitionPoint } from './definition-runner'
import { isControlSkipped } from './utility'


// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN: any[] = [
  {
    "entity": "avatar",
    "accessor": "Avatar",
    "op": "load",
    "method": "GET",
    "path": "/tg-avatars",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {},
    "idField": "id"
  },
  {
    "entity": "mention",
    "accessor": "Mention",
    "op": "list",
    "method": "GET",
    "path": "/mentions",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": [
      {
        "id": "x",
        "sourceUrl": "x",
        "sourceName": "x",
        "title": "x",
        "content": "x",
        "date": "2026-01-01T00:00:00Z",
        "dateFormatted": "x",
        "title_en": "x",
        "title_ua": "x",
        "title_ru": "x",
        "content_en": "x",
        "content_ua": "x",
        "content_ru": "x"
      }
    ],
    "idField": "id"
  },
  {
    "entity": "status",
    "accessor": "Status",
    "op": "load",
    "method": "GET",
    "path": "/statuses",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {},
    "idField": "id"
  }
]


describe('definition', () => {
  for (const point of PLAN) {
    test(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
      const control = isControlSkipped('entityOp', point.entity + '.' + point.op, 'definition')
      if (control.skip) {
        t.skip(control.reason || 'skipped via sdk-test-control.json')
        return
      }
      await runDefinitionPoint(SDK, point)
    })
  }
})
