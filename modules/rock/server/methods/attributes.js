

import Rock from "../api.js"

const Attribute = {};


Attribute.create = function (attr, callback) {

  // rock needed fields
  attr.isSystem = false;
  attr.Order = 0;
  attr.IsGridColumn = 0;
  attr.IsMultiValue = 0;
  attr.IsRequired = 0;
  attr.AllowSearch = 0;


  if (!callback) {
    const response = Rock.apiSync.get(
      `Attributes?$filter=Name eq '${attr.Name}' and EntityTypeId eq ${attr.EntityTypeId}`
    );
    if (!response.data.length) {
      return Rock.apiSync.post(`Attributes`, attr);
    }
    return;
  }

  response = Rock.api.get(
    `Attributes?$filter=Name eq '${attr.Name}' and EntityTypeId eq ${attr.EntityTypeId}`,
    (err, response) => {

      if (err) { callback(err); return; }

      if (!response.length) {
        Rock.apiSync.post(`Attributes`, attr, callback);
      } else {
        callback(null);
      }

  });

}

Attribute.set = function(key, Value, EntityId, callback) {
  check(key, String);
  check(Value, String);
  check(EntityId, Number);

  if (!callback) {
    let attributeInfo = Rock.apiSync.get(`Attributes?$filter=Key eq '${key}'`);

    if (!attributeInfo || !attributeInfo.data[0] || !attributeInfo.data[0].Id) {
      throw new Meteor.Error("That attribute doesn't exist in Rock");
    }

    const AttributeId = attributeInfo.data[0].Id;

    const data = {
      IsSystem: false,
      AttributeId,
      EntityId,
      Value
    };

    const attributeValues = Rock.apiSync.get(
      `AttributeValues?$filter=EntityId eq ${EntityId} and AttributeId eq ${AttributeId}`
    ).data

    if (attributeValues.length) {
      let id = attributeValues[0].Id
      Rock.apiSync.patch(`AttributeValues/${id}`, data);
    } else {
      Rock.apiSync.post(`AttributeValues`, data);
    }
    return;
  }


  Rock.api.get(
    `Attributes?$filter=Key eq '${key}'`,
    (err, response) => {

      if (err) { throw new Meteor.Error(err); }

      if (!response.data[0] || !response.data[0].Id) {
        throw new Meteor.Error("That attribute doesn't exist in Rock");
      }

      const AttributeId = response.data[0].Id;

      const data = {
        IsSystem: false,
        AttributeId,
        EntityId,
        Value
      };

      Rock.api.get(
        `AttributeValues?$filter=EntityId eq ${EntityId} and AttributeId eq ${AttributeId}`,
        (err, response) => {

          if (err) { throw new Meteor.Error(err); }

          if (response.data.length) {
            let id = response.data[0].Id
            Rock.api.patch(`AttributeValues/${id}`, data, callback);
          } else {
            Rock.api.post(`AttributeValues`, data, callback);
          }

      });



  });

  return;


}

Attribute.get = function(key, EntityId, callback) {
  check(key, String);
  let entityIdFilter = "";
  let query;

  if(typeof EntityId === "function") {
    callback = EntityId;
    EntityId = undefined;
  }

  if(EntityId) {
    entityIdFilter = `and EntityId eq ${EntityId}`;
  }

  query = `AttributeValues?$select=Value&$expand=Attribute&$filter=Attribute/Key eq '${key}' ${entityIdFilter}`;

  if (!callback) {
    const attributeValues = Rock.apiSync.get(query).data.map(function (v) {
      return v.Value;
    });

    if (EntityId) {
      let value = attributeValues.length ? attributeValues[0] : null;
      return value;
    }

    return attributeValues;
  }

  Rock.api.get(query, (err, response) => {

    if (err) { throw new Meteor.Error(err); }

    const attributeValues = response.data.map(function (v) {
      return v.Value;
    });

    if (EntityId) {
      let value = attributeValues.length ? attributeValues[0] : null;
      callback(value);
      return;
    }

    callback(attributeValues);
  });
}

Attribute.delete = function(key, EntityId, callback) {
  check(key, String);
  check(EntityId, Number);
  query = `AttributeValues?$select=Id&$expand=Attribute&$filter=EntityId eq ${EntityId} and Attribute/Key eq ${key}`;

  if (!callback) {
    const attributeValueIds = Rock.apiSync.get(query).data.map(function (v) {
      return v.Id;
    });

    if (attributeValueIds.length) {
      let id = attributeValueIds[0];
      Rock.apiSync.delete(`AttributeValues/${id}`);
    }

    return;
  }

  Rock.api.get(query, (err, response) => {
    if (err) { throw new Meteor.Error(err); }

    if (response.data.length) {
      let id = response.data[0].Id;
      Rock.api.delete(`AttributeValues/${id}`, (err, response) => {
          if (err) { throw new Meteor.Error(err); }
          callback(true);
      });
    }
  });
}

export default Attribute
