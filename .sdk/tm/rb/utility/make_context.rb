# GubanovFiles SDK utility: make_context
require_relative '../core/context'
module GubanovFilesUtilities
  MakeContext = ->(ctxmap, basectx) {
    GubanovFilesContext.new(ctxmap, basectx)
  }
end
