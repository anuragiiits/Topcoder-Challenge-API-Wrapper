/*
 * Wrapper function for Challenge related endpoints
 */

const helper = require('./common/helper')

/**
 * Function to get all the Platforms.
 * @param {Object} config Configuration object
 * @returns {Promise} all the technologies
 */
const getPlatforms = (config, jwt = null) => {
  return helper.reqToV4API(config, jwt, 'GET', `${config.CHALLENGE_API_URL}/platforms`)
}

/**
 * Function to create the Platform.
 * @param {Object} config Configuration object
 * @param {Object} reqBody the request body object, include name(platform name) property
 * @param {String} jwt The JWT to authenticate the request
 * @returns {Promise} created Platform
 */
const createPlatform = (config, reqBody, jwt = null) => {
  return helper.reqToV4API(config, jwt, 'POST', `${config.CHALLENGE_API_URL}/platforms`, reqBody)
}

/**
 * Function to partially update Platform by id.
 * @param {Object} config Configuration object
 * @param {String} platformId the platform id
 * @param {Object} reqBody the request body object, include name(platform name) property
 * @returns {Promise} updated platform
 */
const patchPlatform = (config, platformId, reqBody, jwt = null) => {
  return helper.reqToV4API(config, jwt, 'PATCH', `${config.CHALLENGE_API_URL}/platforms/${platformId}`, reqBody)
}

/**
 * Function to delete Platform by id.
 * @param {Object} config Configuration object
 * @param {String} platformId the platform id
 * @param {String} jwt The JWT to authenticate the request
 * @returns {Promise}
 */
const deletePlatform = (config, platformId, jwt = null) => {
  return helper.reqToV4API(config, jwt, 'DELETE', `${config.CHALLENGE_API_URL}/platforms/${platformId}`)
}

module.exports = {
  getPlatforms,
  createPlatform,
  patchPlatform,
  deletePlatform
}
