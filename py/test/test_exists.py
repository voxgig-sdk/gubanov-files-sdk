# GubanovFiles SDK exists test

import pytest
from gubanovfiles_sdk import GubanovFilesSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = GubanovFilesSDK.test(None, None)
        assert testsdk is not None
