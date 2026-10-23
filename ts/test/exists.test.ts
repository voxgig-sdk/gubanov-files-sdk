
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { GubanovFilesSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = GubanovFilesSDK.test()
    equal(testsdk instanceof GubanovFilesSDK, true,
      'GubanovFilesSDK.test() must return a client synchronously')
  })

})
