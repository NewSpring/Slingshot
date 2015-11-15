
import Stripe from "./stripe.js"
import Rock from "../../rock/server/api.js"


function createCustomer(person, token, callback){
  check(person, Object);
  check(token, String);

  Stripe.customers.create({
    description: "Customer for slingshot RockRMS service",
    source: token // obtained with Stripe.js
  }, (err, customer) => {

    if (err) { throw new Meteor.Error(err) }

    /*

      We will need to store customer.id, customer.email,
      and probably customer.subscriptions in Rock

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

  });

}

function findCustomer(email, callback){
  check(email, String);
  check(callback, Function);

  /*

    We will need to lookup the customer token from Rock and
    return it. This should be only a server side method

    Rock.api.get("url/to/search", {
      email: email
    }, callback);

  */
}

export default {
  createCustomer,
  findCustomer
}
