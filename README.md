# Topcoder Challenge API Wrapper

Wrapper library for Topcoder Challenge API

## How to use this Wrapper

1. Include the wrapper as a dependency in package.json as follows

    ```bash
    "topcoder-challenge-api-wrapper": "../path/to/topcoder-challenge-api-wrapper"
    ```

2. Create an instance of this wrapper with any one of the approaches listed below, depending on your use case

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
[**patchTechnology**](docs/TechnologiesApi.md#patchTechnology) | **PATCH** /technologies/{TechnologyId} | Partially update technology.
[**deleteTechnology**](docs/TechnologiesApi.md#deleteTechnology) | **DELETE** /technologies/{TechnologyId} | Delete the technology.

### Reviews wrapper methods

Method | HTTP request | Description
------------- | ------------- | -------------
[**searchReviews**](docs/ReviewsApi.md#searchReviews) | **GET** /reviews | Search reviews.
[**headReviews**](docs/ReviewsApi.md#headReviews) | **HEAD** /reviews | Same to search reviews, but only response status and headers information return.
[**createReview**](docs/ReviewsApi.md#createReview) | **POST** /reviews | Create a review.
[**getReview**](docs/ReviewsApi.md#getReview) | **GET** /reviews/{reviewId} | Get the review.
[**headReview**](docs/ReviewsApi.md#headReview) | **HEAD** /reviews/{reviewId} | Same to get review, but only response status and headers information return.
[**updateReview**](docs/ReviewsApi.md#updateReview) | **PUT** /reviews/{reviewId} | Fully update review.
[**patchReview**](docs/ReviewsApi.md#patchReview) | **PATCH** /reviews/{reviewId} | Partially update review.
[**deleteReview**](docs/ReviewsApi.md#deleteReview) | **DELETE** /reviews/{reviewId} | Delete the review.

### Review Summations wrapper methods

Method | HTTP request | Description
------------- | ------------- | -------------
[**searchReviewSummations**](docs/ReviewSummationsApi.md#searchReviewSummations) | **GET** /reviewSummations | Search review summations.
[**headReviewSummations**](docs/ReviewSummationsApi.md#headReviewSummations) | **HEAD** /reviewSummations | Same to search review summations, but only response status and headers information return.
[**createReviewSummation**](docs/ReviewSummationsApi.md#createReviewSummation) | **POST** /reviewSummations | Create a review summation.
[**getReviewSummation**](docs/ReviewSummationsApi.md#getReviewSummation) | **GET** /reviewSummations/{reviewSummationId} | Get the review summation.
[**headReviewSummation**](docs/ReviewSummationsApi.md#headReviewSummation) | **HEAD** /reviewSummations/{reviewSummationId} | Same to get review summation, but only response status and headers information return.
[**updateReviewSummation**](docs/ReviewSummationsApi.md#updateReviewSummation) | **PUT** /reviewSummations/{reviewSummationId} | Fully update review summation.
[**patchReviewSummation**](docs/ReviewSummationsApi.md#patchReviewSummation) | **PATCH** /reviewSummations/{reviewSummationId} | Partially update review summation.
[**deleteReviewSummation**](docs/ReviewSummationsApi.md#deleteReviewSummation) | **DELETE** /reviewSummations/{reviewSummationId} | Delete the review summation.

### Challenges wrapper methods

Method | HTTP request | Description
------------- | ------------- | -------------
[**searchSubmissions**](docs/SubmissionsApi.md#searchSubmissions) | **GET** /submissions | Search submissions.
[**headSubmissions**](docs/SubmissionsApi.md#headSubmissions) | **HEAD** /submissions | Same to search submissions, but only response status and headers information return.
[**createSubmission**](docs/SubmissionsApi.md#createSubmission) | **POST** /submissions | Create a submission.
[**getSubmission**](docs/SubmissionsApi.md#getSubmission) | **GET** /submissions/{submissionId} | Get the submission.
[**headSubmission**](docs/SubmissionsApi.md#headSubmission) | **HEAD** /submissions/{submissionId} | Same to get submission, but only response status and headers information return.
[**updateSubmission**](docs/SubmissionsApi.md#updateSubmission) | **PUT** /submissions/{submissionId} | Fully update submission.
[**patchSubmission**](docs/SubmissionsApi.md#patchSubmission) | **PATCH** /submissions/{submissionId} | Partially update submission.
[**deleteSubmission**](docs/SubmissionsApi.md#deleteSubmission) | **DELETE** /submissions/{submissionId} | Delete the submission.
[**downloadSubmission**](docs/SubmissionsApi.md#downloadSubmission) | **GET** /submissions/{submissionId}/download | Download the submission.
[**createArtifact**](docs/SubmissionsApi.md#createArtifact) | **POST** /submissions/{submissionId}/artifacts | Create artifact for submission.
[**listArtifacts**](docs/SubmissionsApi.md#listArtifacts) | **GET** /submissions/{submissionId}/artifacts | List artifacts of specified submission.
[**downloadArtifact**](docs/SubmissionsApi.md#downloadArtifact) | **GET** /submissions/{submissionId}/artifacts/{artifactId}/download | Download artifact
[**deleteArtifact**](docs/SubmissionsApi.md#deleteArtifact) | **DELETE** /submissions/{submissionId}/artifacts/{artifactId} | Delete artifact

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
