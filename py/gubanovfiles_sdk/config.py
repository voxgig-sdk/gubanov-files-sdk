# GubanovFiles SDK configuration


# The sekreto plugin DEFINITIONS the model selected per feature, imported
# above by name from the modules the catalogue's active `plugin.def`
# entries declare. Handed to each feature (secrets builds its Sekreto
# with them): a provider kind not listed here is unknown to that SDK.
FEATURE_PLUGINS = {
}


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "GubanovFiles",
            "slug": "gubanov-files",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "ratelimit": {
        "options": {
          "active": False,
          "burst": 5,
          "rate": 5,
        },
        "optspec": {
          "now": "`$FUNCTION`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "retry": {
        "options": {
          "active": False,
          "factor": 2,
          "maxDelay": 2000,
          "minDelay": 50,
          "retries": 2,
          "statuses": [
            408,
            425,
            429,
            500,
            502,
            503,
            504,
          ],
        },
        "optspec": {
          "jitter": "`$BOOLEAN`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "test": {
        "options": {
          "active": False,
        },
        "optspec": {
          "entity": "`$MAP`",
          "net": "`$MAP`",
        },
        "strict": False,
        "transport": "base",
      },
            "timeout": {
        "options": {
          "active": False,
          "ms": 30000,
        },
        "optspec": {
          "clearTimer": "`$FUNCTION`",
          "now": "`$FUNCTION`",
          "setTimer": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
        },
        "options": {
            "base": "https://gubanovfiles.com/api",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "avatar": {},
                "mention": {},
                "status": {},
            },
        },
        "entity": {
      "avatar": {
        "fields": [],
        "name": "avatar",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/tg-avatars",
                "segments": [
                  {
                    "lit": "tg-avatars",
                  },
                ],
                "parts": [
                  "tg-avatars",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {},
                "select": {},
                "response": {
                  "kind": "json",
                  "media": "application/json",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "mention": {
        "fields": [
          {
            "name": "content",
            "title": "Content",
            "type": "`$STRING`",
            "req": True,
            "short": "Summary text in the original language.",
          },
          {
            "name": "content_en",
            "title": "Content En",
            "type": "`$STRING`",
            "req": True,
            "short": "English summary.",
          },
          {
            "name": "content_ru",
            "title": "Content Ru",
            "type": "`$STRING`",
            "short": "Russian summary.",
          },
          {
            "name": "content_ua",
            "title": "Content Ua",
            "type": "`$STRING`",
            "req": True,
            "short": "Ukrainian summary.",
          },
          {
            "name": "date",
            "title": "Date",
            "type": "`$STRING`",
            "req": True,
            "short": "Publication date, ISO 8601 at midnight UTC, e.g.",
            "format": "date-time",
          },
          {
            "name": "dateFormatted",
            "title": "Date Formatted",
            "type": "`$STRING`",
            "req": True,
            "short": "The same date as `DD.MM.YYYY`.",
          },
          {
            "name": "id",
            "title": "Id",
            "type": "`$STRING`",
            "req": True,
            "short": "Mention id, e.g.",
          },
          {
            "name": "sourceName",
            "title": "Source Name",
            "type": "`$STRING`",
            "req": True,
            "short": "Name of the blogger or outlet (Russian).",
          },
          {
            "name": "sourceUrl",
            "title": "Source Url",
            "type": "`$STRING`",
            "req": True,
            "short": "Link to the original material (YouTube video, Telegram post, article).",
          },
          {
            "name": "title",
            "title": "Title",
            "type": "`$STRING`",
            "req": True,
            "short": "Title in the original language (usually Russian).",
          },
          {
            "name": "title_en",
            "title": "Title En",
            "type": "`$STRING`",
            "req": True,
            "short": "English title.",
          },
          {
            "name": "title_ru",
            "title": "Title Ru",
            "type": "`$STRING`",
            "short": "Russian title.",
          },
          {
            "name": "title_ua",
            "title": "Title Ua",
            "type": "`$STRING`",
            "req": True,
            "short": "Ukrainian title.",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "mention",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/mentions",
                "segments": [
                  {
                    "lit": "mentions",
                  },
                ],
                "parts": [
                  "mentions",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {},
                "select": {},
                "response": {
                  "kind": "json",
                  "media": "application/json",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "status": {
        "fields": [],
        "name": "status",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/statuses",
                "segments": [
                  {
                    "lit": "statuses",
                  },
                ],
                "parts": [
                  "statuses",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {},
                "select": {},
                "response": {
                  "kind": "json",
                  "media": "application/json",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
