# Response Metadata

## Properties

Name | Type | Description
------------ | ------------- | ------------- 
**totalCount** | **Integer** | The total count of the objects
**fields** | [**FieldObject**](#fields-properties) | The values passed in the fields query parameter.

## Fields Properties
Name | Type | Description
------------ | ------------- | ------------- 
**label** | **String** | The field label name.
**type** | **String** | The type field label.
**isDefault** | **Boolean** | Is this default field to be included.

### Structure
```javascript
{
    "totalCount": Integer,
    "fields": {
        "label": "string",
        "type": "string",
        "isDefault": Boolean
    }
}
```
