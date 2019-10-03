/*
 * Config for tests.
 */

const dotenv = require('dotenv')
dotenv.config()

const config = {
  JWT: process.env.TEST_JWT,
  USERNAME: process.env.TEST_USERNAME,
  PASSWORD: process.env.TEST_PASSWORD,
  TC_AUTHN_URL: process.env.TEST_TC_AUTHN_URL,
  TC_AUTHZ_URL: process.env.TEST_TC_AUTHZ_URL,
  TC_CLIENT_ID: process.env.TEST_TC_CLIENT_ID,
  TC_CLIENT_V2CONNECTION: process.env.TEST_TC_CLIENT_V2CONNECTION,
  CHALLENGE_API_URL: process.env.TEST_CHALLENGE_API_URL
}

module.exports = config
