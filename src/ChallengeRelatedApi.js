/*
 * Wrapper function for Challenge related endpoints
 */

const helper = require('./common/helper')

/**
 * Function to get the Challenges Metadata.
 * @param {Object} config Configuration object
 * @returns {Promise} the challenges metadata
 */
const getChallengeMetadata = (config, jwt = null) => {
  return helper.reqToV4API(config, jwt, 'GET', `${config.CHALLENGE_API_URL}/challenges/metadata`)
}

/**
 * Function to get all the Challenges Types.
 * @param {Object} config Configuration object
 * @returns {Promise} all the challenges types
 */
const getChallengeTypes = (config, jwt = null) => {
  return helper.reqToV4API(config, jwt, 'GET', `${config.CHALLENGE_API_URL}/challenge-types`)
}

module.exports = {
  getChallengeMetadata,
  getChallengeTypes
}
