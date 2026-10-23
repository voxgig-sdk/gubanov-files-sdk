# GubanovFiles SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module GubanovFilesFeatures
  def self.make_feature(name)
    case name
    when "base"
      GubanovFilesBaseFeature.new
    when "ratelimit"
      GubanovFilesRatelimitFeature.new
    when "retry"
      GubanovFilesRetryFeature.new
    when "test"
      GubanovFilesTestFeature.new
    when "timeout"
      GubanovFilesTimeoutFeature.new
    else
      GubanovFilesBaseFeature.new
    end
  end
end
