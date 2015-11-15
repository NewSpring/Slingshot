

Meteor.startup(() => {
  if (!Meteor.settings.public.stripe) {
    return;
  }

  Stripe.setPublishableKey(Meteor.settings.public.stripe);
})
