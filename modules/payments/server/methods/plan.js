

import Stripe from "./../stripe.js"

function getPlan(planId, callback){

  check(token, String);
  check(callback, Function);

  Stripe.plans.retrieve(planId, (err, plan) => {
    if (err) { throw new Meteor.Error(err) }

    callback(plan);

  });


}

export default getPlan
