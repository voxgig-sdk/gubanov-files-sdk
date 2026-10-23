# GubanovFiles SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'graphql'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

GubanovFilesUtility.registrar = ->(u) {
  u.clean = GubanovFilesUtilities::Clean
  u.clean_add = GubanovFilesUtilities::CleanAdd
  u.clean_explain = GubanovFilesUtilities::CleanExplain
  u.done = GubanovFilesUtilities::Done
  u.make_error = GubanovFilesUtilities::MakeError
  u.feature_add = GubanovFilesUtilities::FeatureAdd
  u.feature_hook = GubanovFilesUtilities::FeatureHook
  u.feature_init = GubanovFilesUtilities::FeatureInit
  u.fetcher = GubanovFilesUtilities::Fetcher
  u.make_fetch_def = GubanovFilesUtilities::MakeFetchDef
  u.make_context = GubanovFilesUtilities::MakeContext
  u.make_options = GubanovFilesUtilities::MakeOptions
  u.make_request = GubanovFilesUtilities::MakeRequest
  u.make_response = GubanovFilesUtilities::MakeResponse
  u.make_result = GubanovFilesUtilities::MakeResult
  u.make_point = GubanovFilesUtilities::MakePoint
  u.make_spec = GubanovFilesUtilities::MakeSpec
  u.make_url = GubanovFilesUtilities::MakeUrl
  u.param = GubanovFilesUtilities::Param
  u.prepare_auth = GubanovFilesUtilities::PrepareAuth
  u.prepare_body = GubanovFilesUtilities::PrepareBody
  u.prepare_headers = GubanovFilesUtilities::PrepareHeaders
  u.prepare_method = GubanovFilesUtilities::PrepareMethod
  u.prepare_params = GubanovFilesUtilities::PrepareParams
  u.prepare_path = GubanovFilesUtilities::PreparePath
  u.prepare_query = GubanovFilesUtilities::PrepareQuery
  u.graphql_body = GubanovFilesUtilities::GraphqlBody
  u.graphql_errors = GubanovFilesUtilities::GraphqlErrors
  u.result_basic = GubanovFilesUtilities::ResultBasic
  u.result_body = GubanovFilesUtilities::ResultBody
  u.result_headers = GubanovFilesUtilities::ResultHeaders
  u.transform_request = GubanovFilesUtilities::TransformRequest
  u.transform_response = GubanovFilesUtilities::TransformResponse
}
