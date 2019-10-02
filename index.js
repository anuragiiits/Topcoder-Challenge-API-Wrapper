/*
 * Index file
 */

const _ = require('lodash')
const joi = require('@hapi/joi')

module.exports = (allConfig) => {
  /**
   * The configuration object schema.
   * AUTH0_URL: the auth0 url
   * AUTH0_AUDIENCE: the auth0 audience
   * TOKEN_CACHE_TIME: the token cache time, it is optional field.
   * AUTH0_CLIENT_ID: the auth0 client id, used as credential
   * AUTH0_CLIENT_SECRET: the auth0 client secret, used as credential
   * CHALLENGE_API_URL: the Topcoder v5 submission api base url.
   * AUTH0_PROXY_SERVER_URL: the auth0 proxy server url, it is optional field.
   */
  const m2mSchema = joi.object().keys({
    AUTH0_URL: joi.string().uri().trim().required(),
    AUTH0_AUDIENCE: joi.string().uri().trim().required(),
    TOKEN_CACHE_TIME: joi.number().integer().min(0),
    AUTH0_CLIENT_ID: joi.string().required(),
    AUTH0_CLIENT_SECRET: joi.string().required(),
    CHALLENGE_API_URL: joi.string().uri().trim().required(),
    AUTH0_PROXY_SERVER_URL: joi.string()
  })

  /**
   * The user credentials schema.
   * USERNAME: the username
   * PASSWORD: the user password
   * TC_AUTHN_URL: the tc authn url
   * TC_AUTHZ_URL: the tc authz url
   * TC_CLIENT_ID: the tc client id
   * TC_CLIENT_V2CONNECTION: the tc client v2connection
   */
  const credentialsSchema = joi.object().keys({
    USERNAME: joi.string().trim().required(),
    PASSWORD: joi.string().trim().required(),
    TC_AUTHN_URL: joi.string().trim().uri().required(),
    TC_AUTHZ_URL: joi.string().trim().uri().required(),
    TC_CLIENT_ID: joi.string().trim().required(),
    TC_CLIENT_V2CONNECTION: joi.string().trim().required(),
    CHALLENGE_API_URL: joi.string().uri().trim().required()
  })

  /**
   * The JWT method argument config schema
   */
  const jwtMethodArgSchema = joi.object().keys({
    CHALLENGE_API_URL: joi.string().uri().trim().required()
  }).unknown(false)

  let schema = jwtMethodArgSchema
  let schemaType = 'JWT Method Argument'

  // Pick auth config
  const config = _.pick(allConfig, [
    'AUTH0_URL',
    'AUTH0_AUDIENCE',
    'TOKEN_CACHE_TIME',
    'AUTH0_CLIENT_ID',
    'AUTH0_CLIENT_SECRET',
    'CHALLENGE_API_URL',
    'AUTH0_PROXY_SERVER_URL',
    'USERNAME',
    'PASSWORD',
    'TC_AUTHN_URL',
    'TC_AUTHZ_URL',
    'TC_CLIENT_ID',
    'TC_CLIENT_V2CONNECTION'
  ])
  if (_.has(config, 'AUTH0_URL')) {
    schema = m2mSchema
    schemaType = 'M2M Configuration'
  } else if (_.has(config, 'USERNAME')) {
    schema = credentialsSchema
    schemaType = 'User Credentials Configuration'
  }

  // Validate the arguments
  const result = joi.validate(config, schema)
  if (result.error) {
    throw new Error(`[${schemaType}] ${result.error.details[0].message}`)
  }

  // Export functions
  return {
    // -- Technology APIs --

    // Get technologies
    getTechnologies: (jwt) => {
      return require('./src/TechnologiesApi').getTechnologies(config, jwt)
    },
    // Create technology
    createTechnology: (reqBody, jwt) => {
      return require('./src/TechnologiesApi').createTechnology(config, reqBody, jwt)
    },
    // Partially update technology
    patchTechnology: (id, reqBody, jwt) => {
      return require('./src/TechnologiesApi').patchTechnology(config, id, reqBody, jwt)
    },
    // Delete technology
    deleteTechnology: (id, jwt) => {
      return require('./src/TechnologiesApi').deleteTechnology(config, id, jwt)
    },

    // -- Platform APIs --

    // Get platforms
    getPlatforms: (jwt) => {
      return require('./src/PlatformsApi').getPlatforms(config, jwt)
    },
    // Create technology
    createPlatform: (reqBody, jwt) => {
      return require('./src/PlatformsApi').createPlatform(config, reqBody, jwt)
    },
    // Partially update technology
    patchPlatform: (id, reqBody, jwt) => {
      return require('./src/PlatformsApi').patchPlatform(config, id, reqBody, jwt)
    },
    // Delete technology
    deletePlatform: (id, jwt) => {
      return require('./src/PlatformsApi').deletePlatform(config, id, jwt)
    },

    // -- Challenge Related APIs --

    // Get challenge metadata
    getChallengeMetadata: (jwt) => {
      return require('./src/ChallengeRelatedApi').getChallengeMetadata(config, jwt)
    },
    // Get challenge types
    getChallengeTypes: (jwt) => {
      return require('./src/ChallengeRelatedApi').getChallengeTypes(config, jwt)
    }
  }
}
