
import Stripe from "./stripe"
import People from "../../rock/server/methods/people"
import Attribute from "../../rock/server/methods/attributes"

function getPlan(email, password, callback){
  check(email, String);
  check(password, String);
  check(callback, Function);

  const personId = People.authorize(email, password);

  if (!personId) {
    throw new Meteor.Error(`${email} is not authorized`);
  }


  const stripeId = Attribute.get("StripeCustomerId", personId);
  const stripeSubId = Attribute.get("StripeSubscriptionId", personId);

  console.log(stripeId, stripeSubId);

  const SyncLookup = Meteor.wrapAsync(
    Stripe.customers.retrieveSubscription,
    Stripe.customers
  );

  SyncLookup(stripeId, stripeSubId, (err, response) => {
    if (err) { throw new Meteor.Error(err) }

    callback(response);

  });
  return;

}

export default getPlan
