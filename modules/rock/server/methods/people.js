
import Rock from "../api.js"
import generatePassword from "./random-password"
import Attribute from "./attributes"

const People = {};

function makeGUID () {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }


  const guid = `${s4()}${s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`;
  return guid.toUpperCase()
}


People.create = function(person, callback){
  check(person, {
    FirstName: String,
    LastName: String,
    Email: String
  });

  let Guid = makeGUID();
  person.IsSystem = false;
  person.Gender = 0
  person.SystemNote = "Created from https://rockrms.church"
  person.Guid = Guid;

  if (!callback) {
    const createdPerson = Rock.apiSync.post("People", person);
    const newPerson = Rock.apiSync.get(`People?$filter=Guid eq guid'${Guid}'`);
    const id = newPerson.data[0].Id;
    console.log(id)

    if (!id) {
      throw new Meteor.Error("No person created");
    }
    return id;
  }

  Rock.api.post("People", person, callback);

  return;
}

People.getByEmail = function(email, callback) {

  check(email, String);

  if (!callback) {
    const response = Rock.apiSync.get(`People/GetByEmail/${email}`);

    return response.data.filter((x) => {
      return x.SystemNote === "Created from https://rockrms.church"
    });
  }

  Rock.api.get(`People/GetByEmail/${email}`, (err, reponse) => {

    if (err) { callback(err); return; }

    let people = response.data.filter((x) => {
      return x.SystemNote === "Created from https://rockrms.church"
    });

    callback(people);

  });

  return

}

People.authorize = function(email, token){

  check(email, String);
  check(token, String);

  // we need some way to ensure we don't have multiple people with the same email?
  const people = People.getByEmail(email);

  let valid = false;
  for (const person of people) {
    let found = Attribute.get("SlingShotGeneratedPassword", person.Id);

    if (found) {
      valid = person.Id;
    };
  }

  /*

    @TODO talk with Ben about using ODATA to shorten api requests

  */

  return valid;

}




export default People
