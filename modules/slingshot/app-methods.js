// TODO: import collections

Meteor.methods({
  // TODO: create methods
});

if (Meteor.isClient) {
  Meteor.startup(() => {
    if (!Meteor.settings.public.stripe) {
      return;
    }

    Stripe.setPublishableKey(Meteor.settings.public.stripe);
  })
}

if (Meteor.isServer) {
  Meteor.methods({
    "chargeCard": function(token, amount, callback){
      check(token, String);
      check(amount, Number);

      if (!Meteor.settings.stripe) {
        console.log("No settings for stripe found");
        throw new Meteor.Error("Giving is currently offline")
        return;
      }

      const Stripe = StripeAPI(Meteor.settings.stripe);

      Stripe.charges.create({
        amount: amount,
        currency: 'usd',
        source: token
      }, (err) => {
        if (err) { throw new Meteor.Error(err) }
      });
    }
  })
}
