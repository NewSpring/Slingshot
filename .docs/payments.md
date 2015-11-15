
# Users and Subscriptions

Currently this application uses the Stripe payment SaaS to manage customers, charges, and subscriptions. It is also where we store the available plans that customers can purchase.

> Eventually this would be better if integrated with Rock but there are current limitations preventing this.

## Customers

Customers are created when a user signs up for a RockRMS subscription. The required information for a customer is their first name, last name, and email. A customer is created via the subscribe form using the server side method `createSubscription`. If the customer does not exist, a new one is created and the subscription is attributed to their id.

We currently plan to sync customers with people in Rock. This gives administration and storage of customers to Rock. We store their information, stripe customer id, and subscription id.

#### Account recovery

Customers are not given a password in the system. We send an email to the customer after signing up with a hash that they can use to *login* and cancel their subscription. They can also reset this token to their email via the reset password form. This hashed value is also stored in Rock but not as a password for Rock.

#### Canceling account

A user can input their hashed *password* to authenticate and view their subscription. At this point, they can cancel their subscription.


## Plans

Plans are setup using the GUI in Stripe. We match our prices to the cost of infrastructure and the size of an organization. Plans are pulled and used to display data on the front end of the application.

> This would be better stored in Rock once payments move to use Rock

## Subscriptions

Thanks to Stripe, we can setup recurring payments for a customer. This provides long term financial support for the Rock instance as well as support for the core team.

In order to support subscriptions, customers have to be able to cancel their plan, and update their account information. We use the hashed password to manage access, store non-sensitive information in Rock, and rely on Stripe to manage credit card information. We need to look into credit card expiration management with Stripe


## Templates

- [ ] Purchase plan
- [ ] Reset password
- [ ] Edit payment details
- [ ] View / Cancel plan


## Flow of information

#### Purchase plan

1. User gives customer information
2. Plan is selected
3. User purchases plan
4. User is created in Stripe
5. User is stored in Rock
6. Subscription is created in Rock
7. Subscription is stored in Rock on person
8. Hash is created and emailed to user
9. User is shown success screen

#### Cancel plan

1. User types email + hashed value from email
2. Stripe user is fetched from Rock
3. Subscription is looked up in Stripe
4. User is shown plan they have with details
5. User cancels subscription in Stripe
6. User's subscription is removed from person in Rock
7. User is shown cancel success

#### Reset password

1. User types email into from
2. User is looked up in Rock
3. New hash is created and email sent
4. New hash is stored in Rock
5. User is told to check email
