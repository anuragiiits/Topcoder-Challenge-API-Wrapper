# Technology

## Properties

Name | Type | Description
------------ | ------------- | ------------- 
**id** | **Integer** | The id of the technology.
**name** | **String** | The name of the technology.
**description** | **String** | Description about the technology.
**status** | [**StatusObject**](#status-properties) | Status of the technology.

## Status Properties
Name | Type | Description
------------ | ------------- | ------------- 
**id** | **Integer** | The id of the status. 
**description** | **String** | Description about the status. 

### Structure
```javascript
{
    "id": Integer,
    "name": "String",
    "description": "String",
    "status": {
        "id": Integer,
        "description": "String"
    }
}
```
