package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "GubanovFiles",
			"slug": "gubanov-files",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"ratelimit": map[string]any{
				"options": map[string]any{
					"active": false,
					"burst": 5,
					"rate": 5,
				},
				"optspec": map[string]any{
					"now": "`$FUNCTION`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"retry": map[string]any{
				"options": map[string]any{
					"active": false,
					"factor": 2,
					"maxDelay": 2000,
					"minDelay": 50,
					"retries": 2,
					"statuses": []any{
						408,
						425,
						429,
						500,
						502,
						503,
						504,
					},
				},
				"optspec": map[string]any{
					"jitter": "`$BOOLEAN`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"optspec": map[string]any{
					"entity": "`$MAP`",
					"net": "`$MAP`",
				},
				"strict": false,
				"transport": "base",
			},
			"timeout": map[string]any{
				"options": map[string]any{
					"active": false,
					"ms": 30000,
				},
				"optspec": map[string]any{
					"clearTimer": "`$FUNCTION`",
					"now": "`$FUNCTION`",
					"setTimer": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
		},
		"options": map[string]any{
			"base": "https://gubanovfiles.com/api",
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"avatar": map[string]any{},
				"mention": map[string]any{},
				"status": map[string]any{},
			},
		},
		"entity": map[string]any{
			"avatar": map[string]any{
				"fields": []any{},
				"name": "avatar",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/tg-avatars",
								"segments": []any{
									map[string]any{
										"lit": "tg-avatars",
									},
								},
								"parts": []any{
									"tg-avatars",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"mention": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "content",
						"title": "Content",
						"type": "`$STRING`",
						"req": true,
						"short": "Summary text in the original language.",
					},
					map[string]any{
						"name": "content_en",
						"title": "Content En",
						"type": "`$STRING`",
						"req": true,
						"short": "English summary.",
					},
					map[string]any{
						"name": "content_ru",
						"title": "Content Ru",
						"type": "`$STRING`",
						"short": "Russian summary.",
					},
					map[string]any{
						"name": "content_ua",
						"title": "Content Ua",
						"type": "`$STRING`",
						"req": true,
						"short": "Ukrainian summary.",
					},
					map[string]any{
						"name": "date",
						"title": "Date",
						"type": "`$STRING`",
						"req": true,
						"short": "Publication date, ISO 8601 at midnight UTC, e.g.",
						"format": "date-time",
					},
					map[string]any{
						"name": "dateFormatted",
						"title": "Date Formatted",
						"type": "`$STRING`",
						"req": true,
						"short": "The same date as `DD.MM.YYYY`.",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Mention id, e.g.",
					},
					map[string]any{
						"name": "sourceName",
						"title": "Source Name",
						"type": "`$STRING`",
						"req": true,
						"short": "Name of the blogger or outlet (Russian).",
					},
					map[string]any{
						"name": "sourceUrl",
						"title": "Source Url",
						"type": "`$STRING`",
						"req": true,
						"short": "Link to the original material (YouTube video, Telegram post, article).",
					},
					map[string]any{
						"name": "title",
						"title": "Title",
						"type": "`$STRING`",
						"req": true,
						"short": "Title in the original language (usually Russian).",
					},
					map[string]any{
						"name": "title_en",
						"title": "Title En",
						"type": "`$STRING`",
						"req": true,
						"short": "English title.",
					},
					map[string]any{
						"name": "title_ru",
						"title": "Title Ru",
						"type": "`$STRING`",
						"short": "Russian title.",
					},
					map[string]any{
						"name": "title_ua",
						"title": "Title Ua",
						"type": "`$STRING`",
						"req": true,
						"short": "Ukrainian title.",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "mention",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/mentions",
								"segments": []any{
									map[string]any{
										"lit": "mentions",
									},
								},
								"parts": []any{
									"mentions",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"status": map[string]any{
				"fields": []any{},
				"name": "status",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/statuses",
								"segments": []any{
									map[string]any{
										"lit": "statuses",
									},
								},
								"parts": []any{
									"statuses",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

// The plugin definitions the model selected per feature, as []any so a
// feature package can consume them without core naming its types. Empty
// when no active feature declares active plugin groups for this target.
var featurePlugins = map[string][]any{
}

// FeaturePlugins is the definitions list for one feature's chain.
func FeaturePlugins(name string) []any {
	return featurePlugins[name]
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "ratelimit":
		if NewRatelimitFeatureFunc != nil {
			return NewRatelimitFeatureFunc()
		}
	case "retry":
		if NewRetryFeatureFunc != nil {
			return NewRetryFeatureFunc()
		}
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	case "timeout":
		if NewTimeoutFeatureFunc != nil {
			return NewTimeoutFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
