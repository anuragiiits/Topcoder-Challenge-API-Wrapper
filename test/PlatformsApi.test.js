/*
 * Tests for Platform APIs
 */

const _ = require('lodash')
const should = require('chai').should()
const config = require('./testConfig')
const userConfig = require('./userTestConfig')
const api = require('../index')
const { makeJwtClient } = require('./common/testHelper.js')

const m2mClient = api(config)
const m2mFailClient = api(_.assign(_.cloneDeep(config), { AUTH0_CLIENT_ID: 'invalid' }))
const userClient = api(userConfig)
const userFailClient = api(_.assign(_.cloneDeep(userConfig), { PASSWORD: 'invalid' }))
const jwtClient = makeJwtClient(api(_.pick(userConfig, 'CHALLENGE_API_URL')), userConfig.JWT)
const jwtFailClient = makeJwtClient(api(_.pick(userConfig, 'CHALLENGE_API_URL')), null)

for (const c of [[m2mClient, m2mFailClient, 'M2M'],
  [userClient, userFailClient, 'User Credentials'],
  [jwtClient, jwtFailClient, 'JWT argument']]) {
  const [client, failClient, clientName] = c

  // platform id created in test
  let createdPlatformId

  describe(`Platform API Tests (${clientName})`, () => {
    describe('Test get platforms', () => {
      it('get platforms success', async () => {
        const res = await client.getPlatforms()
        should.equal(res.status, 200)
        for (const item of res.body.result.content) {
          should.exist(item.id)
          should.exist(item.name)
        }
      })

      it('failure - get platforms with invalid credential', async () => {
        try {
          await failClient.getPlatforms()
          throw new Error('should not throw error here')
        } catch (err) {
          should.not.equal(err.message, 'should not throw error here')
        }
      })
    })

    describe('Test create platform', () => {
      it('create platform success', async () => {
        const res = await client.createPlatform({
          param: {
            id: 0,
            name: 'Heroku'
          }
        })
        createdPlatformId = res.body.id
        should.equal(res.status, 200)
        should.equal(res.body.param.name, 'Heroku')
      })

      it('failure - create platform with invalid credential', async () => {
        try {
          await failClient.createPlatform({
            param: {
              id: 0,
              name: 'Heroku'
            }
          })
          throw new Error('should not throw error here')
        } catch (err) {
          should.not.equal(err.message, 'should not throw error here')
        }
      })

      it('failure - Create platform with invalid request body', async () => {
        try {
          await client.createPlatform({
            param: {
              id: 0
            }
          })
          throw new Error('should not throw error here')
        } catch (err) {
          should.equal(err.status, 400)
          should.not.equal(err.message, 'should not throw error here')
        }
      })
    })

    describe('Test patch platform by id', () => {
      it('patch platform by id success', async () => {
        const res = await client.patchPlatform(createdPlatformId, {
          param: {
            id: createdPlatformId,
            name: 'Salesforce'
          }
        })
        should.equal(res.status, 200)
        should.equal(res.body.id, createdPlatformId)
        should.equal(res.body.param.name, 'Salesforce')
      })

      it('failure - patch platform with invalid credential', async () => {
        try {
          await failClient.patchPlatform(createdPlatformId, {
            param: {
              id: createdPlatformId,
              name: 'Salesforce'
            }
          })
          throw new Error('should not throw error here')
        } catch (err) {
          should.not.equal(err.message, 'should not throw error here')
        }
      })

      it('failure - patch platform by invalid id', async () => {
        try {
          await client.patchPlatform(-4, {
            param: {
              id: createdPlatformId,
              name: 'Salesforce'
            }
          })
          throw new Error('should not throw error here')
        } catch (err) {
          should.equal(err.status, 400)
          should.not.equal(err.message, 'should not throw error here')
        }
      })
    })

    describe('Test delete platform by id', () => {
      it('delete platform by id success', async () => {
        const res = await client.deletePlatform(createdPlatformId)
        should.equal(res.status, 200)
      })

      it('failure - delete platform with invalid credential', async () => {
        try {
          await failClient.deletePlatform(createdPlatformId)
          throw new Error('should not throw error here')
        } catch (err) {
          should.not.equal(err.message, 'should not throw error here')
        }
      })

      it('failure - delete platform by invalid id', async () => {
        try {
          await client.deletePlatform(-4)
          throw new Error('should not throw error here')
        } catch (err) {
          should.equal(err.status, 400)
          should.not.equal(err.message, 'should not throw error here')
        }
      })
    })
  })
}
