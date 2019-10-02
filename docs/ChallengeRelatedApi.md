# Challenge Related Api

All URIs are relative to **CHALLENGE_API_URL** configuration variable.

Method | HTTP request | Description
------------- | ------------- | -------------
[**getChallengeMetadata**](ChallengeRelatedApi.md#getChallengeMetadata) | **GET** /challenges/metadata | Get the challenge metadata
[**getChallengeTypes**](ChallengeRelatedApi.md#getChallengeTypes) | **GET** /challenge-types | Get the challenge types

<a name="getChallengeMetadata"></a>
# **getChallengeMetadata**
> getChallengeMetadata([, jwt])

Get the Challenge Metadata.

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
  .getChallengeMetadata()
  .then(result => console.log(result.body, result.status))
  .catch(err => console.log(err))

challengeApiUserCredentialsClient
  .getChallengeMetadata()
  .then(result => console.log(result.body, result.status))
  .catch(err => console.log(err))

challengeApiJwtMethodArgClient
  .getChallengeMetadata(config.JWT)
  .then(result => console.log(result.body, result.status))
  .catch(err => console.log(err))

// Async / await model
await challengeApiM2MClient.getChallengeMetadata()

await challengeApiUserCredentialsClient.getChallengeMetadata()

await challengeApiJwtMethodArgClient.getChallengeMetadata(config.JWT)
```

### Parameters

Name | Type | Description
------------- | ------------- | -------------
 **jwt**      | String | the optional json web token

### Return type

[**Api Response**](ApiResponse.md) with metadata of [**ResponseMetadata**](ResponseMetadata.md) and content of [**ChallengeMetadata**](ChallengeMetadata.md)

### Authorization

[Bearer](../README.md#authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getChallengeTypes"></a>
# **getChallengeTypes**
> getChallengeTypes([, jwt])

Get the Challenge Types.

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
  .getChallengeTypes()
  .then(result => console.log(result.body, result.status))
  .catch(err => console.log(err))

challengeApiUserCredentialsClient
  .getChallengeTypes()
  .then(result => console.log(result.body, result.status))
  .catch(err => console.log(err))

challengeApiJwtMethodArgClient
  .getChallengeTypes(config.JWT)
  .then(result => console.log(result.body, result.status))
  .catch(err => console.log(err))

// Async / await model
await challengeApiM2MClient.getChallengeTypes()

await challengeApiUserCredentialsClient.getChallengeTypes()

await challengeApiJwtMethodArgClient.getChallengeTypes(config.JWT)
```

### Parameters

Name | Type | Description
------------- | ------------- | -------------
 **jwt**      | String | the optional json web token

### Return type

[**Api Response**](ApiResponse.md) with metadata of null and content as an Array of [**ChallengeType**](ChallengeType.md)

### Authorization

[Bearer](../README.md#authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json