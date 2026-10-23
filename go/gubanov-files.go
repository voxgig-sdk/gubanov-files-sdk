package voxgiggubanovfilessdk

import (
	"github.com/voxgig-sdk/gubanov-files-sdk/go/core"
	"github.com/voxgig-sdk/gubanov-files-sdk/go/entity"
	"github.com/voxgig-sdk/gubanov-files-sdk/go/feature"
	_ "github.com/voxgig-sdk/gubanov-files-sdk/go/utility"
)

// Type aliases preserve external API.
type GubanovFilesSDK = core.GubanovFilesSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type GubanovFilesEntity = core.GubanovFilesEntity
type StreamItem = core.StreamItem
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type GubanovFilesError = core.GubanovFilesError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewRatelimitFeatureFunc = func() core.Feature {
		return feature.NewRatelimitFeature()
	}
	core.NewRetryFeatureFunc = func() core.Feature {
		return feature.NewRetryFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewTimeoutFeatureFunc = func() core.Feature {
		return feature.NewTimeoutFeature()
	}
	core.NewAvatarEntityFunc = func(client *core.GubanovFilesSDK, entopts map[string]any) core.GubanovFilesEntity {
		return entity.NewAvatarEntity(client, entopts)
	}
	core.NewMentionEntityFunc = func(client *core.GubanovFilesSDK, entopts map[string]any) core.GubanovFilesEntity {
		return entity.NewMentionEntity(client, entopts)
	}
	core.NewStatusEntityFunc = func(client *core.GubanovFilesSDK, entopts map[string]any) core.GubanovFilesEntity {
		return entity.NewStatusEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewGubanovFilesSDK = core.NewGubanovFilesSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var SharedConfig = core.SharedConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewGubanovFilesSDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *GubanovFilesSDK  { return NewGubanovFilesSDK(nil) }
func Test() *GubanovFilesSDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewRatelimitFeature = feature.NewRatelimitFeature
var NewRetryFeature = feature.NewRetryFeature
var NewTestFeature = feature.NewTestFeature
var NewTimeoutFeature = feature.NewTimeoutFeature
