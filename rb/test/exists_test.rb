# GubanovFiles SDK exists test

require "minitest/autorun"
require_relative "../GubanovFiles_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = GubanovFilesSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
