# Topcoder Challenge API Wrapper

Wrapper library for Topcoder Challenge API

## How to use this Wrapper

1. Include the wrapper as a dependency in package.json as follows

    ```bash
    "topcoder-challenge-api-wrapper": "../path/to/topcoder-challenge-api-wrapper"
    ```

2. Create an instance of this wrapper with any one of the approaches listed below, depending on your use case. 
Define `config` with `'CHALLENGE_API_URL'` and other necessary keys depending on the use cases as below (Note that `_` is initialized with [**lodash**](https://www.npmjs.com/package/lodash) module):

    **M2M Authentication Configuration:**

    ```javascript
    const challengeApi = require('topcoder-challenge-api-wrapper')
    const challengeApiM2MClient = challengeApi(_.pick(config,
          ['AUTH0_URL', 'AUTH0_AUDIENCE', 'TOKEN_CACHE_TIME',
            'AUTH0_CLIENT_ID', 'AUTH0_CLIENT_SECRET', 'CHALLENGE_API_URL',
            'AUTH0_PROXY_SERVER_URL']))
    ```

    - AUTH0_URL - the auth0 url
    - AUTH0_AUDIENCE - the auth0 audience
    - TOKEN_CACHE_TIME - (optional) the token cache time
    - AUTH0_CLIENT_ID - the auth0 client id, used as credential
    - AUTH0_CLIENT_SECRET - the auth0 client secret, used as credential
    - AUTH0_PROXY_SERVER_URL - (optional) the auth0 proxy server url
    - CHALLENGE_API_URL - Topcoder V4 Challenge API URL. E.g. `http://api.topcoder-dev.com/v4`
    - PAGE - the page number
    - PER_PAGE - the page size
    - MAX_PAGE_SIZE - the max number of page size

    **User Credentials Authentication Configuration:**

    ```javascript
    const challengeApiUserCredentialsClient = challengeApi(_.pick(config,
          ['USERNAME', 'PASSWORD', 'TC_AUTHN_URL', 'TC_AUTHZ_URL', 'TC_CLIENT_ID',
           'TC_CLIENT_V2CONNECTION', 'CHALLENGE_API_URL']))
    ```

    - USERNAME - Topcoder handle
    - PASSWORD - Topcoder password
    - TC_AUTHN_URL - OAUTH2 token URL, e.g. `https://topcoder.auth0.com/oauth/ro` or for dev `https://topcoder-dev.auth0.com/oauth/ro`
    - TC_AUTHZ_URL - Topcoder API token URL, e.g. `https://api.topcoder.com/v3/authorizations` or for dev `https://api.topcoder-dev.com/v3/authorizations`
    - TC_CLIENT_ID - OAUTH2 Client ID, e.g. `6ZwZEUo2ZK4c50aLPpgupeg5v2Ffxp9P` or for dev `JFDo7HMkf0q2CkVFHojy3zHWafziprhT`
    - TC_CLIENT_V2CONNECTION - The OAUTH2 Client data source, e.g. `LDAP` or for dev `TC-User-Database`
    - CHALLENGE_API_URL - Topcoder V4 Challenge API URL. E.g. `https://api.topcoder.com/v4` or for dev `https://api.topcoder-dev.com/v4`

    **JWT Method Argument Authentication Configuration:**

    ```javascript
    const challengeJwtMethodArgClient = challengeApi(_.pick(config,
          ['CHALLENGE_API_URL']))
    ```

    - CHALLENGE_API_URL - Topcoder V4 Challenge API URL. E.g. `https://api.topcoder.com/v4` or for dev `https://api.topcoder-dev.com/v4`

3. Every function in this wrapper will return a promise, Handling promises is at the caller end. Call the functions with appropriate arguments

E.g.

```bash
const platformId = 27631251

challengeApiClient
  .createPlatform({"param":{"name": "Heroku","id": 0}}, config.JWT)
  .then(result => console.log(result.body, result.status))
  .catch(err => console.log(err))

await challengeApiClient.deletePlatform(platformId)

const result = await challengeApiClient.getPlatforms(config.JWT)
```

Refer `index.js` for the list of available wrapper functions

## Documentation for wrapper methods

All URIs are relative to **CHALLENGE_API_URL** configuration variable.

### Technologies wrapper methods

Method | HTTP request | Description
------------- | ------------- | -------------
[**getTechnologies**](docs/TechnologiesApi.md#getTechnologies) | **GET** /technologies | Get all the technologies.
[**createTechnology**](docs/TechnologiesApi.md#createTechnology) | **POST** /technologies | Create a technology.
[**patchTechnology**](docs/TechnologiesApi.md#patchTechnology) | **PATCH** /technologies/{technologyId} | Partially update technology.
[**deleteTechnology**](docs/TechnologiesApi.md#deleteTechnology) | **DELETE** /technologies/{technologyId} | Delete the technology.

### Platforms wrapper methods

Method | HTTP request | Description
------------- | ------------- | -------------
[**getPlatforms**](docs/PlatformsApi.md#getPlatforms) | **GET** /platforms | Get all the platforms.
[**createPlatform**](docs/PlatformsApi.md#createPlatform) | **POST** /platforms | Create a platform.
[**patchPlatform**](docs/PlatformsApi.md#patchPlatform) | **PATCH** /platforms/{platformId} | Partially update platform.
[**deletePlatform**](docs/PlatformsApi.md#deletePlatform) | **DELETE** /platforms/{platformId} | Delete the platform.

### Challenge Related methods

Method | HTTP request | Description
------------- | ------------- | -------------
[**getChallengeMetadata**](docs/ChallengeRelatedApi.md#getChallengeMetadata) | **GET** /challenges/metadata | Get the challenge metadata
[**getChallengeTypes**](docs/ChallengeRelatedApi.md#getChallengeTypes) | **GET** /challenge-types | Get the challenge types

## Authorization

The wrapper internally generates the JWT token based on the method used when initialising the wrapper (m2m v/s user) or uses the jwt passed during method invocation and passes it in the `Authorization` header.

## Running tests

Following environment variables need to be set up before running the tests

```bash
- TEST_AUTH0_URL
- TEST_AUTH0_AUDIENCE
- TEST_AUTH0_CLIENT_ID
- TEST_AUTH0_CLIENT_SECRET
- TEST_CHALLENGE_API_URL
- TEST_JWT
- TEST_USERNAME
- TEST_PASSWORD
- TEST_TC_AUTHN_URL
- TEST_TC_AUTHZ_URL
- TEST_TC_CLIENT_ID
- TEST_TC_CLIENT_V2CONNECTION
```

Refer to Step # 2 in [this section](#how-to-use-this-wrapper) to learn more about the configuration variables.

To run the tests alone, execute the command

```bash
npm run test
```

To run tests with coverage report, execute the command

```bash
npm run cov
```
