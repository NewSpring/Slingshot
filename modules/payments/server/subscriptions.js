


import Stripe from "./stripe.js"
import getPlan from "./plan.js"
import Rock from "../../rock/server/api.js"

function subscribe(customerId, token, planId, callback){

  check(customerId, String);
  check(planId, String);
  check(token, String);
  check(callback, Function);


  getPlan(planId, (plan) => {


    Stripe.customers.createSubscription(customerId, {
      plan: planId,
      source: token
    }, (err, sub) => {

      if (err) { throw new Meteor.Error(err) }

      /*

        Rock.patch("url/to/put", {
          id: customerId,
          subscription: customer.subscription
        }, (err) => {

          if (err) { throw new Meteor.Error(err) }

        })

      */
      callback(sub);

    });


  })


}

function cancel(customerId, callback){
  check(customerId, String);
  check(callback, Function);

  /*

    Rock.get("url/to/get/sub", {
      id: customerId,
    }, (err, response) => {

      if (err) { throw new Meteor.Error(err) }

      if (!response.data || response.data.subscription ) {

        throw new Meteor.Error("no subscriptions found");

      }

      stripe.customers.cancelSubscription(
        customerId,
        response.data.subscription,
        function(err, confirmation) {

          if (err) { throw new Meteor.Error(err) }

          callback(confirmation);

        }
      );
    }
    })

  */

}

export default {
  "subscribe": subscribe,
  "cancel": cancel
}
