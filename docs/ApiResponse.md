# API Response

## Properties

Name | Type | Description
------------ | ------------- | ------------- 
**id** | **String** | The unique id identifying the request.
**version** | **String** | API Version
**result** | [**ResultObject**](#result-properties) | The response result object. 

## Result Properties
Name | Type | Description
------------ | ------------- | ------------- 
**success** | **Boolean** | API connectivity. 
**status** | **Integer** | The response http status code. 
**metadata** | **Object** | The object with the API metadata. 
**content** | **Object** | The object with the API response data. 


### Structure
```javascript
{
  "id": "string",
  "version": "string",
  "result": {
    "success": Boolean,
    "status": Integer,
    "metadata": { /* Arbitrary object */ }, 
    "content": { /* Arbitrary object */ }
  }
}
```
