# Technologies Api

All URIs are relative to **CHALLENGE_API_URL** configuration variable.

Method | HTTP request | Description
------------- | ------------- | -------------
[**getTechnologies**](TechnologiesApi.md#getTechnologies) | **GET** /technologies | Get all the technologies.
[**createTechnology**](TechnologiesApi.md#createTechnology) | **POST** /technologies | Create a technology.
[**patchTechnology**](TechnologiesApi.md#patchTechnology) | **PATCH** /technologies/{technologyId} | Partially update technology.
[**deleteTechnology**](TechnologiesApi.md#deleteTechnology) | **DELETE** /technologies/{technologyId} | Delete the technology.

<a name="getTechnologies"></a>
# **getTechnologies**
> getTechnologies([, jwt])

Get all the Technologies.

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
  .getTechnologies()
  .then(result => console.log(result.body, result.status))
  .catch(err => console.log(err))

challengeApiUserCredentialsClient
  .getTechnologies()
  .then(result => console.log(result.body, result.status))
  .catch(err => console.log(err))

challengeApiJwtMethodArgClient
  .getTechnologies(config.JWT)
  .then(result => console.log(result.body, result.status))
  .catch(err => console.log(err))

// Async / await model
await challengeApiM2MClient.getTechnologies()

await challengeApiUserCredentialsClient.getTechnologies()

await challengeApiJwtMethodArgClient.getTechnologies(config.JWT)
```

### Parameters

Name | Type | Description
------------- | ------------- | -------------
 **jwt**      | String | the optional json web token

### Return type

[**Api Response**](ApiResponse.md) with content as an Array of [**Technology**](Technology.md)

### Authorization

[Bearer](../README.md#authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createTechnology"></a>
# **createTechnology**
> createTechnology(reqBody[, jwt])

Create a technology.

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
        name: "J2EE",
        description: "Java 2 Enterprise Edition",
        status: {
            id: 1,
            description: "Active"
        }
    }
}

// Promise model
challengeApiM2MClient
  .createTechnology(reqBody)
  .then(result => console.log(result.body, result.status))
  .catch(err => console.log(err))

challengeApiUserCredentialsClient
  .createTechnology(reqBody)
  .then(result => console.log(result.body, result.status))
  .catch(err => console.log(err))

challengeApiJwtMethodArgClient
  .createTechnology(reqBody, config.JWT)
  .then(result => console.log(result.body, result.status))
  .catch(err => console.log(err))

// Async / await model
await challengeApiM2MClient.createTechnology(reqBody)

await challengeApiUserCredentialsClient.createTechnology(reqBody)

await challengeApiJwtMethodArgClient.createTechnology(reqBody, config.JWT)
```

### Parameters

Name | Type | Description
------------- | ------------- | -------------
 **reqBody** | [**requestBody**](ApiRequestBody.md)| param with value as [**TechnologyObject**](Technology.md)
 **jwt**      | String | the optional json web token

### Return type

[**Api Response**](ApiResponse.md) with content of [**Technology**](Technology.md)

### Authorization

[Bearer](../README.md#authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="patchTechnology"></a>
# **patchTechnology**
> patchTechnology(technologyId, reqBody[, jwt])

Partially update technology.

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

const technologyId = 27141052
const reqBody = {
    param: {
        id: 27141052,
        name: "Hibernate",
        description: "Hibernate for JAVA",
        status: {
            id: 1,
            description: "Active"
        }
    }
}

// Promise model
challengeApiM2MClient
  .patchTechnology(technologyId, reqBody)
  .then(result => console.log(result.body, result.status))
  .catch(err => console.log(err))

challengeApiUserCredentialsClient
  .patchTechnology(technologyId, reqBody)
  .then(result => console.log(result.body, result.status))
  .catch(err => console.log(err))

challengeApiJwtMethodArgClient
  .patchTechnology(technologyId, reqBody, config.JWT)
  .then(result => console.log(result.body, result.status))
  .catch(err => console.log(err))

// Async / await model
await challengeApiM2MClient.patchTechnology(technologyId, reqBody)

await challengeApiUserCredentialsClient.patchTechnology(technologyId, reqBody)

await challengeApiJwtMethodArgClient.patchTechnology(technologyId, reqBody, config.JWT)
```

### Parameters

Name | Type | Description
------------- | ------------- | -------------
 **technologyId** | Number | the technology id
 **reqBody** | [**requestBody**](ApiRequestBody.md)| param with value as [**TechnologyObject**](Technology.md)
 **jwt**      | String | the optional json web token

### Return type

[**Api Response**](ApiResponse.md) with content of [**Technology**](Technology.md)

### Authorization

[Bearer](../README.md#authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteTechnology"></a>
# **deleteTechnology**
> deleteTechnology(reviewId[, jwt])

Delete technology by id.

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

const technologyId = 27141052

// Promise model
challengeApiM2MClient
  .deleteTechnology(technologyId)
  .then(result => console.log(result.status))
  .catch(err => console.log(err))

challengeApiUserCredentialsClient
  .deleteTechnology(technologyId)
  .then(result => console.log(result.status))
  .catch(err => console.log(err))

challengeApiJwtMethodArgClient
  .deleteTechnology(technologyId, config.JWT)
  .then(result => console.log(result.status))
  .catch(err => console.log(err))

// Async / await model
await challengeApiM2MClient.deleteTechnology(technologyId)

await challengeApiUserCredentialsClient.deleteTechnology(technologyId)

await challengeApiJwtMethodArgClient.deleteTechnology(technologyId, config.JWT)
```

### Parameters

Name | Type | Description
------------- | ------------- | -------------
 **technologyId** | Number | the technology id
 **jwt**      | String | the optional json web token

### Return type

[**Api Response**](ApiResponse.md) with content as null

### Authorization

[Bearer](../README.md#authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json
