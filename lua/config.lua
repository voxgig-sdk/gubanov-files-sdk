-- GubanovFiles SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "GubanovFiles",
      slug = "gubanov-files",
      version = "0.0.1",
      target = "lua",
    },
    feature = {
      ["ratelimit"] = {
        ["options"] = {
          ["active"] = false,
          ["burst"] = 5,
          ["rate"] = 5,
        },
        ["optspec"] = {
          ["now"] = "`$FUNCTION`",
          ["sleep"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "wrap",
      },
      ["retry"] = {
        ["options"] = {
          ["active"] = false,
          ["factor"] = 2,
          ["maxDelay"] = 2000,
          ["minDelay"] = 50,
          ["retries"] = 2,
          ["statuses"] = {
            408,
            425,
            429,
            500,
            502,
            503,
            504,
          },
        },
        ["optspec"] = {
          ["jitter"] = "`$BOOLEAN`",
          ["sleep"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "wrap",
      },
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
        ["optspec"] = {
          ["entity"] = "`$MAP`",
          ["net"] = "`$MAP`",
        },
        ["strict"] = false,
        ["transport"] = "base",
      },
      ["timeout"] = {
        ["options"] = {
          ["active"] = false,
          ["ms"] = 30000,
        },
        ["optspec"] = {
          ["clearTimer"] = "`$FUNCTION`",
          ["now"] = "`$FUNCTION`",
          ["setTimer"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "wrap",
      },
    },
    options = {
      base = "https://gubanovfiles.com/api",
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["avatar"] = {},
        ["mention"] = {},
        ["status"] = {},
      },
    },
    entity = {
      ["avatar"] = {
        ["fields"] = {},
        ["name"] = "avatar",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/tg-avatars",
                ["segments"] = {
                  {
                    ["lit"] = "tg-avatars",
                  },
                },
                ["parts"] = {
                  "tg-avatars",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {},
                ["select"] = {},
                ["response"] = {
                  ["kind"] = "json",
                  ["media"] = "application/json",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["mention"] = {
        ["fields"] = {
          {
            ["name"] = "content",
            ["title"] = "Content",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "Summary text in the original language.",
          },
          {
            ["name"] = "content_en",
            ["title"] = "Content En",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "English summary.",
          },
          {
            ["name"] = "content_ru",
            ["title"] = "Content Ru",
            ["type"] = "`$STRING`",
            ["short"] = "Russian summary.",
          },
          {
            ["name"] = "content_ua",
            ["title"] = "Content Ua",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "Ukrainian summary.",
          },
          {
            ["name"] = "date",
            ["title"] = "Date",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "Publication date, ISO 8601 at midnight UTC, e.g.",
            ["format"] = "date-time",
          },
          {
            ["name"] = "dateFormatted",
            ["title"] = "Date Formatted",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "The same date as `DD.MM.YYYY`.",
          },
          {
            ["name"] = "id",
            ["title"] = "Id",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "Mention id, e.g.",
          },
          {
            ["name"] = "sourceName",
            ["title"] = "Source Name",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "Name of the blogger or outlet (Russian).",
          },
          {
            ["name"] = "sourceUrl",
            ["title"] = "Source Url",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "Link to the original material (YouTube video, Telegram post, article).",
          },
          {
            ["name"] = "title",
            ["title"] = "Title",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "Title in the original language (usually Russian).",
          },
          {
            ["name"] = "title_en",
            ["title"] = "Title En",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "English title.",
          },
          {
            ["name"] = "title_ru",
            ["title"] = "Title Ru",
            ["type"] = "`$STRING`",
            ["short"] = "Russian title.",
          },
          {
            ["name"] = "title_ua",
            ["title"] = "Title Ua",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "Ukrainian title.",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "mention",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/mentions",
                ["segments"] = {
                  {
                    ["lit"] = "mentions",
                  },
                },
                ["parts"] = {
                  "mentions",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {},
                ["select"] = {},
                ["response"] = {
                  ["kind"] = "json",
                  ["media"] = "application/json",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["status"] = {
        ["fields"] = {},
        ["name"] = "status",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/statuses",
                ["segments"] = {
                  {
                    ["lit"] = "statuses",
                  },
                },
                ["parts"] = {
                  "statuses",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {},
                ["select"] = {},
                ["response"] = {
                  ["kind"] = "json",
                  ["media"] = "application/json",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config
