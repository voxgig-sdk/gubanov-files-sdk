# GubanovFiles SDK feature factory

from gubanovfiles_sdk.feature.base_feature import GubanovFilesBaseFeature
from gubanovfiles_sdk.feature.ratelimit_feature import GubanovFilesRatelimitFeature
from gubanovfiles_sdk.feature.retry_feature import GubanovFilesRetryFeature
from gubanovfiles_sdk.feature.test_feature import GubanovFilesTestFeature
from gubanovfiles_sdk.feature.timeout_feature import GubanovFilesTimeoutFeature


_FEATURES = {
    "base": lambda: GubanovFilesBaseFeature(),
    "ratelimit": lambda: GubanovFilesRatelimitFeature(),
    "retry": lambda: GubanovFilesRetryFeature(),
    "test": lambda: GubanovFilesTestFeature(),
    "timeout": lambda: GubanovFilesTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
