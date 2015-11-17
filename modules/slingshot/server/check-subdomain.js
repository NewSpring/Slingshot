


import Rock from "../../rock/server/api"

function checkSubdomain(subdomain, callback){
  check(subdomain, String);
  check(callback, Function);

  // why doesn't this work?...
  // https://alpha-rock.newspring.cc/api/Attributes?$expand=AttributeValues&$filter=Key eq 'SlingshotSubdomain'
  Rock.api.get(
    `Attributes?$filter=Key eq 'SlingshotSubdomain'`,
    (err, response) => {

      if (err) { throw new Meteor.Error(err); }

      if (!response.data || ! response.data[0].Id) {
        throw new Meteor.Error("Attribute for SlingshotSubdomain not setup");
      }

      const attributeId = response.data[0].Id;

      const attributes = Rock.apiSync.get(
        `AttributeValues?$filter=AttributeId eq ${attributeId}`
      );

      let found = false;
      for (let attr of attributes.data) {
        if (attr.Value === subdomain) {
          found = true;
          break;
        }
      }

      callback(found);
      return;
  });

  return;

}

export default checkSubdomain
