
/*

  Steps to purchase plan:

  1. Charge the customer
  2. Charge the card
  3a. Create Rock instance
  3b. Set info in Rock
  4. Send email (via rock?)
  5. Return url and email to client


*/
import Stripe from "./stripe"
import People from "../../rock/server/methods/people"
import Attribute from "../../rock/server/methods/attributes"
import generatePassword from "../../rock/server/methods/random-password"

function purchase(person, token, plan, callback){
  check(person, {
    firstName: String,
    lastName: String,
    email: String,
    subdomain: Match.Optional(String),
    orgName: Match.Optional(String)
  });
  check(token, String);
  check(plan, String);
  check(callback, Function);

  function async() { return; }

  const SyncCreate = Meteor.wrapAsync(Stripe.customers.create, Stripe.customers);


  const response = SyncCreate({
    description: `${person.firstName} ${person.lastName} - ${person.orgName}`,
    metadata: {
      source: "Slingshot"
    },
    source: token,
    plan: plan,
    email: person.email
  });

  console.log(response);

  const stripeId = response.id;
  const subscriptionId = response.subscriptions.data[0].id;



  // create base person with values in rock (sync because it happens last)
  /*

    set info in Rock

    1. Create a person
    2. Set attributes
      - StripeCustomerId
      - StripeSubscriptionId
      - SlingShotGeneratedPassword
      - SlingshotSubdomain
      - SlingshotOrganizationName

  */
  const personId = People.create({
    FirstName: person.firstName,
    LastName: person.lastName,
    Email: person.email
  });
  console.log("created person record with id " + personId);
  const tempPassword = generatePassword();

  let subdomain = person.subdomain + generatePassword();

  Attribute.set("StripeCustomerId", stripeId, personId, async);
  Attribute.set("StripeSubscriptionId", subscriptionId, personId, async);
  Attribute.set("SlingShotGeneratedPassword", tempPassword, personId, async);
  Attribute.set("SlingshotSubdomain", person.subdomain, personId, async);
  Attribute.set("SlingshotOrganizationName", person.orgName, personId, async);
  Attribute.set("SlingshotResourceGroup", subdomain, personId, async);
  console.log("All values set!");


  Azure.resourceGroup.create(subdomain, (response) => {
    Azure.deployment.create(subdomain, subdomain, (response) => {
      Azure.cname.create(person.subdomain, `${subdomain}.azurewebsites.net`, (response) => {

        console.log("Created", response);
        callback({
          url: `http://${person.subdomain}.rockrms.church/Start.aspx`,
          email: person.email
        });
      });
    });
  });



}



export default purchase
