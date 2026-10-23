package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewRatelimitFeatureFunc func() Feature

var NewRetryFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewTimeoutFeatureFunc func() Feature

var NewAvatarEntityFunc func(client *GubanovFilesSDK, entopts map[string]any) GubanovFilesEntity

var NewMentionEntityFunc func(client *GubanovFilesSDK, entopts map[string]any) GubanovFilesEntity

var NewStatusEntityFunc func(client *GubanovFilesSDK, entopts map[string]any) GubanovFilesEntity

