
import Rock from "../api.js"
import generatePassword from "./random-password"

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


export default People
