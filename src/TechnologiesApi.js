/*
 * Wrapper function for Challenge related endpoints
 */

const helper = require('./common/helper')

/**
 * Function to get all the Technologies.
 * @param {Object} config Configuration object
 * @returns {Promise} all the technologies
 */
const getTechnologies = (config, jwt = null) => {
    return helper.reqToV4API(config, jwt, 'GET', `${config.CHALLENGE_API_URL}/technologies`)
}

/**
 * Function to create the Technology.
 * @param {Object} config Configuration object
 * @param {Object} reqBody the request body object, include name(technology name), description(technology description), status(an object containing id and description of status) properties
 * @param {String} jwt The JWT to authenticate the request
 * @returns {Promise} created Technology
 */
const createTechnology = (config, reqBody, jwt = null) => {
    return helper.reqToV4API(config, jwt, 'POST', `${config.CHALLENGE_API_URL}/technologies`, reqBody)
}

/**
 * Function to partially update Technology by id.
 * @param {Object} config Configuration object
 * @param {String} id the technology id
 * @param {Object} reqBody the request body object,including type(the submission type),
 *   url(the submission url), memberId(the submitter id), challengeId(the challenge id),
 *   legacySubmissionId(the legacy submission id), legacyUploadId(the legacy upload id),
 *   submissionPhaseId(the submission phase id)
 * @returns {Promise} updated technology
 */
const patchTechnology = (config, id, reqBody, jwt = null) => {
    return helper.reqToV4API(config, jwt, 'PATCH', `${config.CHALLENGE_API_URL}/technologies/${id}`, reqBody)
}

/**
 * Function to delete Technology by id.
 * @param {Object} config Configuration object
 * @param {String} id the technology id
 * @param {String} jwt The JWT to authenticate the request
 * @returns {Promise}
 */
const deleteTechnology = (config, id, jwt = null) => {
    return helper.reqToV4API(config, jwt, 'DELETE', `${config.CHALLENGE_API_URL}/technologies/${id}`)
}

module.exports = {
    getTechnologies,
    createTechnology,
    patchTechnology,
    deleteTechnology
}