
# Data modeling

This application is pretty light on data and all data is stored in Rock or Stripe. However, we do have a few entities that need to be modeled and used. They are defined below:

### Content

TBD

#### Plans (from stripe)

```javascript

{
  id: String,
  object: "plan",
  amount: Number, // A positive integer in cents
  created: Number,
  currency: "usd", // 3-letter ISO code for currency.
  interval: "month", // Day, week, month or year.
  interval_count: Number, // The number of intervals between each subscription billing
  livemode: false,
  metadata: {
  },
  name: String, // displayed on invoices
  statement_descriptor: null, // An arbitrary string to be displayed on your customer’s credit card statement.
  trial_period_days: null
}

```



### Customer

```javascript

{
  stripeId: String // from Stripe
  firstName: String // from user
  lastName: String // from user
  stripeSubscriptionId: String // from Stripe
  orgSize: Number // from user
  orgName: String // from user
  slingshotIp: String // from Azure
  slingshotSubdomain: String // from user (or generated from orgName?)
  password: String // stored in Rock user Account
}

```
