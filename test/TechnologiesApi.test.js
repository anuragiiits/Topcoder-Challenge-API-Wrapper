/*
 * Tests for Technology APIs
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

  // technology id created in test
  let createdTechnologyId

  describe(`Technology API Tests (${clientName})`, () => {
    describe('Test get technologies', () => {
      it('get technologies success', async () => {
        const res = await client.getTechnologies()
        should.equal(res.status, 200)
        for (const item of res.body.result.content) {
          should.exist(item.id)
          should.exist(item.name)
          should.exist(item.description)
          should.exist(item.status)
          should.exist(item.status.id)
          should.exist(item.status.description)
        }
      })

      it('failure - get technologies with invalid credential', async () => {
        try {
          await failClient.getTechnologies()
          throw new Error('should not throw error here')
        } catch (err) {
          should.not.equal(err.message, 'should not throw error here')
        }
      })
    })

    describe('Test create technology', () => {
      it('create technology success', async () => {
        const res = await client.createTechnology({
          param: {
            id: 0,
            name: 'J2EE',
            description: 'Java 2 Enterprise Edition',
            status: {
              id: 1,
              description: 'Active'
            }
          }
        })
        createdTechnologyId = res.body.id
        should.equal(res.status, 200)
        should.equal(res.body.param.name, 'J2EE')
        should.equal(res.body.param.description, 'Java 2 Enterprise Edition')
        should.equal(res.body.param.status.id, 1)
        should.equal(res.body.param.status.description, 'Active')
      })

      it('failure - create technology with invalid credential', async () => {
        try {
          await failClient.createTechnology({
            param: {
              id: 0,
              name: 'J2EE',
              description: 'Java 2 Enterprise Edition',
              status: {
                id: 1,
                description: 'Active'
              }
            }
          })
          throw new Error('should not throw error here')
        } catch (err) {
          should.not.equal(err.message, 'should not throw error here')
        }
      })

      it('failure - Create technology with invalid request body', async () => {
        try {
          await client.createTechnology({
            param: {
              description: 'Java 2 Enterprise Edition',
              status: {
                id: 1,
                description: 'Active'
              }
            }
          })
          throw new Error('should not throw error here')
        } catch (err) {
          should.equal(err.status, 400)
          should.not.equal(err.message, 'should not throw error here')
        }
      })
    })

    describe('Test patch technology by id', () => {
      it('patch technology by id success', async () => {
        const res = await client.patchTechnology(createdTechnologyId, {
          param: {
            id: createdTechnologyId,
            name: 'Python',
            description: 'Python OOPS',
            status: {
              id: 1,
              description: 'Active'
            }
          }
        })
        should.equal(res.status, 200)
        should.equal(res.body.id, createdTechnologyId)
        should.equal(res.body.param.name, 'Python')
        should.equal(res.body.param.description, 'Python OOPS')
        should.equal(res.body.param.status.id, 1)
        should.equal(res.body.param.status.description, 'Active')
      })

      it('failure - patch technology with invalid credential', async () => {
        try {
          await failClient.patchTechnology(createdTechnologyId, {
            param: {
              id: createdTechnologyId,
              name: 'Python',
              description: 'Python OOPS',
              status: {
                id: 1,
                description: 'Active'
              }
            }
          })
          throw new Error('should not throw error here')
        } catch (err) {
          should.not.equal(err.message, 'should not throw error here')
        }
      })

      it('failure - patch technology by invalid id', async () => {
        try {
          await client.patchTechnology(-4, {
            param: {
              id: createdTechnologyId,
              name: 'Python',
              description: 'Python OOPS',
              status: {
                id: 1,
                description: 'Active'
              }
            }
          })
          throw new Error('should not throw error here')
        } catch (err) {
          should.equal(err.status, 400)
          should.not.equal(err.message, 'should not throw error here')
        }
      })
    })

    describe('Test delete technology by id', () => {
      it('delete technology by id success', async () => {
        const res = await client.deleteTechnology(createdTechnologyId)
        should.equal(res.status, 200)
      })

      it('failure - delete technology with invalid credential', async () => {
        try {
          await failClient.deleteTechnology(createdTechnologyId)
          throw new Error('should not throw error here')
        } catch (err) {
          should.not.equal(err.message, 'should not throw error here')
        }
      })

      it('failure - delete technology by invalid id', async () => {
        try {
          await client.deleteTechnology(-4)
          throw new Error('should not throw error here')
        } catch (err) {
          should.equal(err.status, 400)
          should.not.equal(err.message, 'should not throw error here')
        }
      })
    })
  })
}
