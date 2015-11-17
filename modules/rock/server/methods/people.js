
import Rock from "../api.js"
import generatePassword from "./random-password"
import Attribute from "./attributes"

const People = {};

People.create = function(person, callback){
  check(person, {
    FirstName: String,
    LastName: String,
    Email: String
  });

  person.IsSystem = false;
  person.Gender = 0
  person.SystemNote = "Created from https://rockrms.church"


  if (!callback) {
    const createdPerson = Rock.apiSync.post("People", person);
    const id = createdPerson.data;

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
