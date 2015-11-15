
import Stripe from "./stripe.js"
import Rock from "../../rock/server/api.js"


function createCustomer(token, callback){
  check(token, String);

  Stripe.customers.create({
    description: "Customer for slingshot RockRMS service",
    source: "tok_7MDBzOmvKninaJ" // obtained with Stripe.js
  }, (err, customer) => {

    if (err) { throw new Meteor.Error(err) }

    /*

      We will need to store customer.id, customer.email,
      and probably customer.subscriptions in Rock


      Rock.put("url/to/put", {
        id: customer.id,
        email: customer.email
      }, (err) => {

        if (err) { throw new Meteor.Error(err) }

      })

    */

  });

}

function findCustomer(email, callback){
  check(email, String);
  check(callback, Function);

  /*

    We will need to lookup the customer token from Rock and
    return it. This should be only a server side method

    Rock.get("url/to/search", {
      email: email
    }, callback);

  */
}

export default {
  createCustomer,
  findCustomer
}
