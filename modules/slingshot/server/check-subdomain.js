import Rock from "../../rock/server/api"

function checkSubdomain(subdomain, callback){
  check(subdomain, String);
  check(callback, Function);

  Attribute.get("SlingshotSubdomain", function (values) {
    let found = false;
    for (let attr of values) {
      if (attr === subdomain) {
        found = true;
        break;
      }
    }

    callback(found);
  });
}

export default checkSubdomain
