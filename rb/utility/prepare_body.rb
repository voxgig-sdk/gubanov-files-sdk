# GubanovFiles SDK utility: prepare_body
require_relative 'media'
module GubanovFilesUtilities
  PrepareBody = ->(ctx) {
    return nil unless ctx.op.input == "data"
    return GubanovFilesUtilities.raw_body(ctx.reqdata) if GubanovFilesUtilities.raw_request?(ctx.point)
    ctx.utility.transform_request.call(ctx)
  }
end
