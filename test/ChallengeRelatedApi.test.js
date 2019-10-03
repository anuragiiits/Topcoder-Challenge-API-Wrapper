/*
 * Tests for Challenge Related APIs
 */

const _ = require('lodash')
const should = require('chai').should()
const config = require('./testConfig')
const userConfig = require('./userTestConfig')
const api = require('../index')
const { makeJwtClient } = require('./common/testHelper.js')

const m2mClient = api(config)
const m2mFailClient = api(_.assign(_.cloneDeep(config), { 'AUTH0_CLIENT_ID': 'invalid' }))
const userClient = api(userConfig)
const userFailClient = api(_.assign(_.cloneDeep(userConfig), { 'PASSWORD': 'invalid' }))
const jwtClient = makeJwtClient(api(_.pick(userConfig, 'SUBMISSION_API_URL')), userConfig.JWT)
const jwtFailClient = makeJwtClient(api(_.pick(userConfig, 'SUBMISSION_API_URL')), null)

for (const c of [ [ m2mClient, m2mFailClient, 'M2M' ],
  [ userClient, userFailClient, 'User Credentials' ],
  [ jwtClient, jwtFailClient, 'JWT argument' ]]) {
  const [client, failClient, clientName] = c

  describe(`Challenge Related API Tests (${clientName})`, () => {
    describe('Test get challenge metadata', () => {
      it(`get challenge metadata success`, async () => {
        const res = await client.getChallengeMetadata()
        should.equal(res.status, 200)
        for (const item of res.body.result.content) {
          should.exist(item.allChallengesCount)
          should.exist(item.myChallengesCount)
          should.exist(item.openChallengesCount)
          should.exist(item.ongoingChallengesCount)
        }
      })

      it(`failure - get challenge metadata with invalid credential`, async () => {
        try {
          await failClient.getChallengeMetadata()
          throw new Error('should not throw error here')
        } catch (err) {
          should.not.equal(err.message, 'should not throw error here')
        }
      })
    })

    describe('Test get challenge types', () => {
        it(`get challenge types success`, async () => {
          const res = await client.getChallengeMetadata()
          should.equal(res.status, 200)
          for (const item of res.body.result.content) {
            should.exist(item.id)
            should.exist(item.type)
            should.exist(item.name)
            should.exist(item.description)
            should.exist(item.subTrack)
          }
        })
  
        it(`failure - get challenge metadata with invalid credential`, async () => {
          try {
            await failClient.getChallengeMetadata()
            throw new Error('should not throw error here')
          } catch (err) {
            should.not.equal(err.message, 'should not throw error here')
          }
        })
      })
  })
}
