

import Stripe from "./../stripe.js"

function charge(token, amount, callback){

  check(token, String);
  check(amount, Number);
  check(callback, Function);

  if (!Meteor.settings.stripe) {
    throw new Meteor.Error("Giving is currently offline")
    return;
  }

  Stripe.charges.create({
    amount: amount,
    currency: 'usd',
    source: token
  }, (err, charge) => {

    if (err) { throw new Meteor.Error(err) }

    callback(charge)

  });


}

export default charge
