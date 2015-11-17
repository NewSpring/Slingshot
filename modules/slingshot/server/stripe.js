
if (!Meteor.settings.stripe) {
  throw new Meteor.Error("Giving is currently offline")
}

const Stripe = StripeAPI(Meteor.settings.stripe);

export default Stripe
