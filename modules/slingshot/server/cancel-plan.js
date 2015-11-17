
import Stripe from "./stripe"
import People from "../../rock/server/methods/people"
import Attribute from "../../rock/server/methods/attributes"
import Rock from "../../rock/server/api"

function cancel(stripeId, stripeSubId, callback){
  check(stripeId, String);
  check(stripeSubId, String);
  check(callback, Function);

  const SyncCancel = Meteor.wrapAsync(
    Stripe.customers.cancelSubscription,
    Stripe.customers
  );

  const response = SyncCancel(stripeId, stripeSubId);

  if (response) {
    const attributeRecord = Rock.apiSync.get(
      `AttributeValues?$filter=Value eq '${stripeId}'`
    );

    if (
      attributeRecord.data &&
      attributeRecord.data[0] &&
      attributeRecord.data[0].EntityId
    ) {

      function async() { return; }

      const personId = attributeRecord.data[0].EntityId;

      Attribute.delete("StripeCustomerId", personId, async);
      Attribute.delete("StripeSubscriptionId", personId, async);
      Attribute.delete("SlingShotGeneratedPassword", personId, async);
      Attribute.delete("SlingshotSubdomain", personId, async);
      Attribute.delete("SlingshotOrganizationName", personId, async);
    }
  }
  callback(response);
  return;

}

export default cancel
