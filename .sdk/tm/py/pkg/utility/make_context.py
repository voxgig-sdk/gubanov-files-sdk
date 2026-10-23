# GubanovFiles SDK utility: make_context

from projectname_sdk.core.context import GubanovFilesContext


def make_context_util(ctxmap, basectx):
    return GubanovFilesContext(ctxmap, basectx)
