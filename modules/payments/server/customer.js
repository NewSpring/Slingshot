
import Stripe from "./stripe.js"
import Rock from "../../rock/server/api.js"


<<<<<<< HEAD
function createCustomer(person, token, callback){
  check(person, Object);
=======
function createCustomer(token, callback){
>>>>>>> ed86037c2d3041abd1026fa235844f7e4ab3376c
  check(token, String);

  Stripe.customers.create({
    description: "Customer for slingshot RockRMS service",
<<<<<<< HEAD
    source: token // obtained with Stripe.js
=======
    source: "tok_7MDBzOmvKninaJ" // obtained with Stripe.js
>>>>>>> ed86037c2d3041abd1026fa235844f7e4ab3376c
  }, (err, customer) => {

    if (err) { throw new Meteor.Error(err) }

    /*

      We will need to store customer.id, customer.email,
      and probably customer.subscriptions in Rock

<<<<<<< HEAD
    */

    Rock.api.post("api/People", {
      // id: customer.id,
      IsSystem: false,
      FirstName: person.firstName || null,
      LastName: person.lastName || null,
      Email: person.email || null,
      EmailPreference: customer.email || 0

    }, (err) => {

      if (err) { throw new Meteor.Error(err) }

    })
=======

      Rock.put("url/to/put", {
        id: customer.id,
        email: customer.email
      }, (err) => {

        if (err) { throw new Meteor.Error(err) }

      })

    */
>>>>>>> ed86037c2d3041abd1026fa235844f7e4ab3376c

  });

}

function findCustomer(email, callback){
  check(email, String);
  check(callback, Function);

  /*

    We will need to lookup the customer token from Rock and
    return it. This should be only a server side method

<<<<<<< HEAD
    Rock.api.get("url/to/search", {
=======
    Rock.get("url/to/search", {
>>>>>>> ed86037c2d3041abd1026fa235844f7e4ab3376c
      email: email
    }, callback);

  */
}

export default {
  createCustomer,
  findCustomer
}
