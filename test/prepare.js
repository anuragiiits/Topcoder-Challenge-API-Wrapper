/*
 * Setting up Mock for unit tests
 */

require('./common/bootstrap')

const _ = require('lodash')
const fs = require('fs')
const path = require('path')
const nock = require('nock')
const joi = require('@hapi/joi')
const prepare = require('mocha-prepare')
const th = require('./common/testHelper')
const td = require('./common/testData')
const Reviews = require('./data/Reviews.json')
const ReviewSummations = require('./data/ReviewSummations.json')
const store = require('./common/store')

const AUTH_PATH = td.AUTH_PATH
const AUTHN_PATH = td.AUTHN_PATH
const AUTHN_REFRESH_TOKEN = td.AUTHN_REFRESH_TOKEN
const AUTHN_ID_TOKEN = td.AUTHN_ID_TOKEN
const AUTHN_ACCESS_TOKEN = td.AUTHN_ACCESS_TOKEN
const AUTHN_TOKEN_TYPE = td.AUTHN_TOKEN_TYPE
const AUTHZ_PATH = td.AUTHZ_PATH
const AUTHZ_TOKEN = td.AUTHZ_TOKEN

const API_VERSION = td.API_VERSION

store.submissionData = {}

prepare(function (done) {
  // called before loading of test cases
  nock(/.com|localhost/)
    .persist()
    .filteringPath((path) => {
      if (path.startsWith(API_VERSION)) {
        return path.substring(API_VERSION.length)
      }
      return path
    })
    .post(AUTH_PATH)
    .reply((_uri, requestBody) => {
      if (requestBody['client_id'] === 'invalid') {
        return [404, {
          message: 'Unknown Error'
        }]
      } else {
        return [200, {
          'access_token': td.M2M_TOKEN,
          'scope': 'all:challenges read:challenges write:challenges read:groups read:project read:bus_topics write:bus_api read:user_profiles read:project-user read:project-permission',
          'expires_in': 864000,
          'token_type': 'Bearer'
        }]
      }
    })
    .post(AUTHN_PATH)
    .reply((_uri, requestBody) => {
      if (requestBody.password === 'invalid') {
        return [401, {
          message: 'Unknown Error'
        }]
      }
      return [200, {
        'id_token': AUTHN_ID_TOKEN,
        'refresh_token': AUTHN_REFRESH_TOKEN,
        'access_token': AUTHN_ACCESS_TOKEN,
        'token_type': AUTHN_TOKEN_TYPE
      }]
    })
    .post(AUTHZ_PATH)
    .reply(() => [ 200, { result: { content: { token: AUTHZ_TOKEN } } } ])
    .post(`/technologies`)
    .reply(function (uri, body) {
      const result = th.create({
        uri,
        method: this.method.toLowerCase(),
        body
      })
      if (result[0] === td.CREATE_SUCCESS_STATUS) {
        store.technologyData = result[1]
      }
      return result
    })
    .get(`/technologies`)
    // .query(true)
    .reply(function (uri) {
      return th.get({
        uri,
        method: this.method.toLowerCase()
      })
    })
    .patch(/\/technologies\/.*/)
    .query(true)
    .reply(function (uri, body) {
      const result = th.put({
        uri,
        method: this.method.toLowerCase(),
        obj: store.technologyData,
        body,
        notFound: td.NotFoundError.Technology
      })
      if (result[0] === td.SUCCESS_STATUS) {
        store.technologyData = result[1]
      }
      return result
    })
    .delete(/\/technologies\/.*/)
    .query(true)
    .reply(function (uri, body) {
      const result = th.remove({
        uri,
        method: this.method.toLowerCase(),
        obj: store.technologyData,
        notFound: td.NotFoundError.Technology
      })
      if (result[0] === td.DELETE_SUCCESS_STATUS) {
        store.technologyData = null
      }
      return result
    })
    .post(`/platforms`)
    .reply(function (uri, body) {
      const result = th.create({
        uri,
        method: this.method.toLowerCase(),
        body,
        needUser: true
      })
      if (result[0] === td.CREATE_SUCCESS_STATUS) {
        store.platformData = result[1]
      }
      return result
    })
    .get(`/platforms`)
    .reply(function (uri) {
      return th.get({
        uri,
        method: this.method.toLowerCase()
      })
    })
    .patch(/\/platforms\/.*/)
    .query(true)
    .reply(function (uri, body) {
      const result = th.put({
        uri,
        method: this.method.toLowerCase(),
        obj: store.platformData,
        body,
        needUser: true,
        notFound: td.NotFoundError.Platform
      })
      if (result[0] === td.SUCCESS_STATUS) {
        store.platformData = result[1]
      }
      return result
    })
    .delete(/\/platforms\/.*/)
    .query(true)
    .reply(function (uri, body) {
      const result = th.remove({
        uri,
        method: this.method.toLowerCase(),
        obj: store.platformData,
        notFound: td.NotFoundError.Platform
      })
      if (result[0] === td.DELETE_SUCCESS_STATUS) {
        store.platformData = null
      }
      return result
    })
    .get(`/challenges/metadata`)
    .reply(function (uri) {
      return th.get({
        uri,
        method: this.method.toLowerCase()
      })
    })
    .get(`/challenge-types`)
    .reply(function (uri) {
      return th.get({
        uri,
        method: this.method.toLowerCase()
      })
    })
    .get(() => true)
    .query(true)
    .reply(404)
    .post(() => true)
    .query(true)
    .reply(404)
    .delete(() => true)
    .query(true)
    .reply(404)
    .put(() => true)
    .query(true)
    .reply(404)
    .patch(() => true)
    .query(true)
    .reply(404)
  done()
}, function (done) {
  // called after all test completes (regardless of errors)
  nock.cleanAll()
  done()
})
