# Platforms Api

All URIs are relative to **CHALLENGE_API_URL** configuration variable.

Method | HTTP request | Description
------------- | ------------- | -------------
[**getPlatforms**](PlatformsApi.md#getPlatforms) | **GET** /platforms | Get all the platforms.
[**createPlatform**](PlatformsApi.md#createPlatform) | **POST** /platforms | Create a platform.
[**patchPlatform**](PlatformsApi.md#patchPlatform) | **PATCH** /platforms/{platformId} | Partially update platform.
[**deletePlatform**](PlatformsApi.md#deletePlatform) | **DELETE** /platforms/{platformId} | Delete the platform.

<a name="getPlatforms"></a>
# **getPlatforms**
> getPlatforms([, jwt])

Get all the Platforms.

### Example
```javascript
const challengeApi = require('topcoder-challenge-api-wrapper')
const challengeApiM2MClient = challengeApi(_.pick(config,
      ['AUTH0_URL', 'AUTH0_AUDIENCE', 'TOKEN_CACHE_TIME',
        'AUTH0_CLIENT_ID', 'AUTH0_CLIENT_SECRET', 'CHALLENGE_API_URL',
        'AUTH0_PROXY_SERVER_URL']))

const challengeApiUserCredentialsClient = challengeApi(_.pick(config,
      ['USERNAME', 'PASSWORD', 'TC_AUTHN_URL', 'TC_AUTHZ_URL', 'TC_CLIENT_ID',
       'TC_CLIENT_V2CONNECTION', 'CHALLENGE_API_URL']))

const challengeApiJwtMethodArgClient = challengeApi(_.pick(config,
      ['CHALLENGE_API_URL']))

// Promise model
challengeApiM2MClient
  .getPlatforms()
  .then(result => console.log(result.body, result.status))
  .catch(err => console.log(err))

challengeApiUserCredentialsClient
  .getPlatforms()
  .then(result => console.log(result.body, result.status))
  .catch(err => console.log(err))

challengeApiJwtMethodArgClient
  .getPlatforms(config.JWT)
  .then(result => console.log(result.body, result.status))
  .catch(err => console.log(err))

// Async / await model
await challengeApiM2MClient.getPlatforms()

await challengeApiUserCredentialsClient.getPlatforms()

await challengeApiJwtMethodArgClient.getPlatforms(config.JWT)
```

### Parameters

Name | Type | Description
------------- | ------------- | -------------
 **jwt**      | String | the optional json web token

### Return type

[**Api Response**](ApiResponse.md) with content as an Array of [**Platform**](Platform.md)

### Authorization

[Bearer](../README.md#authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createPlatform"></a>
# **createPlatform**
> createPlatform(reqBody[, jwt])

Create a Platform.

### Example
```javascript
const challengeApi = require('topcoder-challenge-api-wrapper')
const challengeApiM2MClient = challengeApi(_.pick(config,
      ['AUTH0_URL', 'AUTH0_AUDIENCE', 'TOKEN_CACHE_TIME',
        'AUTH0_CLIENT_ID', 'AUTH0_CLIENT_SECRET', 'CHALLENGE_API_URL',
        'AUTH0_PROXY_SERVER_URL']))

const challengeApiUserCredentialsClient = challengeApi(_.pick(config,
      ['USERNAME', 'PASSWORD', 'TC_AUTHN_URL', 'TC_AUTHZ_URL', 'TC_CLIENT_ID',
       'TC_CLIENT_V2CONNECTION', 'CHALLENGE_API_URL']))

const challengeApiJwtMethodArgClient = challengeApi(_.pick(config, 'CHALLENGE_API_URL'))

const reqBody = {
    param: {
        id: 0,
        name: "Heroku",
    }
}

// Promise model
challengeApiM2MClient
  .createPlatform(reqBody)
  .then(result => console.log(result.body, result.status))
  .catch(err => console.log(err))

challengeApiUserCredentialsClient
  .createPlatform(reqBody)
  .then(result => console.log(result.body, result.status))
  .catch(err => console.log(err))

challengeApiJwtMethodArgClient
  .createPlatform(reqBody, config.JWT)
  .then(result => console.log(result.body, result.status))
  .catch(err => console.log(err))

// Async / await model
await challengeApiM2MClient.createPlatform(reqBody)

await challengeApiUserCredentialsClient.createPlatform(reqBody)

await challengeApiJwtMethodArgClient.createPlatform(reqBody, config.JWT)
```

### Parameters

Name | Type | Description
------------- | ------------- | -------------
 **reqBody** | [**requestBody**](ApiRequestBody.md)| param with value as [**Platform Object**](Platform.md)
 **jwt**      | String | the optional json web token

### Return type

[**Api Response**](ApiResponse.md) with content of [**Platform**](Platform.md)

### Authorization

[Bearer](../README.md#authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="patchPlatform"></a>
# **patchPlatform**
> patchPlatform(platformId, reqBody[, jwt])

Update a Platform.

### Example
```javascript
const challengeApi = require('topcoder-challenge-api-wrapper')
const challengeApiM2MClient = challengeApi(_.pick(config,
      ['AUTH0_URL', 'AUTH0_AUDIENCE', 'TOKEN_CACHE_TIME',
        'AUTH0_CLIENT_ID', 'AUTH0_CLIENT_SECRET', 'CHALLENGE_API_URL',
        'AUTH0_PROXY_SERVER_URL']))

const challengeApiUserCredentialsClient = challengeApi(_.pick(config,
      ['USERNAME', 'PASSWORD', 'TC_AUTHN_URL', 'TC_AUTHZ_URL', 'TC_CLIENT_ID',
       'TC_CLIENT_V2_CONNECTION', 'CHALLENGE_API_URL']))

const challengeApiJwtMethodArg = challengeApi(_.pick(config, 'CHALLENGE_API_URL'))

const platformId = 27631255
const reqBody = {
    param: {
        id: 27631255,
        name: "Heroku",
    }
}

// Promise model
challengeApiM2MClient
  .patchPlatform(platformId, reqBody)
  .then(result => console.log(result.body, result.status))
  .catch(err => console.log(err))

challengeApiUserCredentialsClient
  .patchPlatform(platformId, reqBody)
  .then(result => console.log(result.body, result.status))
  .catch(err => console.log(err))

challengeApiJwtMethodArgClient
  .patchPlatform(platformId, reqBody, config.JWT)
  .then(result => console.log(result.body, result.status))
  .catch(err => console.log(err))

// Async / await model
await challengeApiM2MClient.patchPlatform(platformId, reqBody)

await challengeApiUserCredentialsClient.patchPlatform(platformId, reqBody)

await challengeApiJwtMethodArgClient.patchPlatform(platformId, reqBody, config.JWT)
```

### Parameters

Name | Type | Description
------------- | ------------- | -------------
 **platformId** | Number | the platform id
 **reqBody** | [**requestBody**](ApiRequestBody.md)| param with value as [**Platform Object**](Platform.md)
 **jwt**      | String | the optional json web token

### Return type

[**Api Response**](ApiResponse.md) with content of [**Platform**](Platform.md)

### Authorization

[Bearer](../README.md#authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deletePlatform"></a>
# **deletePlatform**
> deletePlatform(reviewId[, jwt])

Delete Platform by id.

### Example
```javascript
const challengeApi = require('topcoder-challenge-api-wrapper')
const challengeApiM2MClient = challengeApi(_.pick(config,
      ['AUTH0_URL', 'AUTH0_AUDIENCE', 'TOKEN_CACHE_TIME',
        'AUTH0_CLIENT_ID', 'AUTH0_CLIENT_SECRET', 'CHALLENGE_API_URL',
        'AUTH0_PROXY_SERVER_URL']))

const challengeApiUserCredentialsClient = challengeApi(_.pick(config,
      ['USERNAME', 'PASSWORD', 'TC_AUTHN_URL', 'TC_AUTHZ_URL', 'TC_CLIENT_ID',
       'TC_CLIENT_V2_CONNECTION', 'CHALLENGE_API_URL']))

const challengeApiJwtMethodArg = challengeApi(_.pick(config, 'CHALLENGE_API_URL'))

const platformId = 27631255

// Promise model
challengeApiM2MClient
  .deletePlatform(platformId)
  .then(result => console.log(result.status))
  .catch(err => console.log(err))

challengeApiUserCredentialsClient
  .deletePlatform(platformId)
  .then(result => console.log(result.status))
  .catch(err => console.log(err))

challengeApiJwtMethodArgClient
  .deletePlatform(platformId, config.JWT)
  .then(result => console.log(result.status))
  .catch(err => console.log(err))

// Async / await model
await challengeApiM2MClient.deletePlatform(platformId)

await challengeApiUserCredentialsClient.deletePlatform(platformId)

await challengeApiJwtMethodArgClient.deletePlatform(platformId, config.JWT)
```

### Parameters

Name | Type | Description
------------- | ------------- | -------------
 **platformId** | Number | the platform id
 **jwt**      | String | the optional json web token

### Return type

[**Api Response**](ApiResponse.md) with content as null

### Authorization

[Bearer](../README.md#authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json
