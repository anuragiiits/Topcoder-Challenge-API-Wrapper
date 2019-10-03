/*
 * Config for tests.
 */

const config = {
    AUTH0_CLIENT_ID: process.env.TEST_AUTH0_CLIENT_ID || 'e6oZAxnoFvjdRtjJs1Jt3tquLnNSTs0e',
    AUTH0_CLIENT_SECRET: process.env.TEST_AUTH0_CLIENT_SECRET || '9S148ziWIsXyo0XUo2YbycEbSjSp1pr7ImTKql7P9xKoTbSy9Ej_IyzLeWIfBaMe',
    AUTH0_URL: process.env.TEST_AUTH0_URL || 'https://topcoder.auth0.com/oauth/ro',
    AUTH0_AUDIENCE: process.env.TEST_AUTH0_AUDIENCE || 'https://m2m.topcoder-dev.com',
    CHALLENGE_API_URL: 'https://api.topcoder-dev.com/v5'
  }
  
module.exports = config
  