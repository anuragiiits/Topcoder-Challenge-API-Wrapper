/*
 * Config for tests.
 */

const dotenv = require('dotenv')
dotenv.config()

const config = {
  AUTH0_CLIENT_ID: process.env.TEST_AUTH0_CLIENT_ID,
  AUTH0_CLIENT_SECRET: process.env.TEST_AUTH0_CLIENT_SECRET,
  AUTH0_URL: process.env.TEST_AUTH0_URL,
  AUTH0_AUDIENCE: process.env.TEST_AUTH0_AUDIENCE,
  CHALLENGE_API_URL: process.env.TEST_CHALLENGE_API_URL
}

module.exports = config
