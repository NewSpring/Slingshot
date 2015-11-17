


import Rock from "../../rock/server/api"

function checkSubdomain(subdomain, callback){
  check(subdomain, String);
  check(callback, Function);

  // why doesn't this work?...
  // https://alpha-rock.newspring.cc/api/Attributes?$expand=AttributeValues&$filter=Key eq 'SlingshotSubdomain'
  // https://alpha-rock.newspring.cc/api/AttributeValues?$expand=Attribute&$filter=Attribute/Key eq 'SlingshotSubdomain'&$select=Value
  Rock.api.get(
    `AttributeValues?$expand=Attribute&$filter=Attribute/Key eq 'SlingshotSubdomain'&$select=Value`,
    (err, response) => {

      if (err) { throw new Meteor.Error(err); }

      let found = false;
      for (let attr of response.data) {
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
