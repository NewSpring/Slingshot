

const Future = Npm.require('fibers/future');
const emailRegex = /[\w\.\'_%-]+(\+[\w-]*)?@([\w-]+\.)+[\w-]+/;

import purchase from "./purchase"
import getPlan from "./get-plan"
import cancelPlan from "./cancel-plan"
import checkSubdomain from "./check-subdomain"

function checkEmail(email) {

  if (!emailRegex.test(email)) {
    throw new Meteor.Error(email + " is not a valid email");
  }

  return;

}

Meteor.methods({

  /*

    purchasePlan:

    person: object containing user data
      firstName: String // required
      lastName: String // required
      email: String // required
      orgSize: Number // optional
      orgName: String // optional
    token: String // generated from stripe.js
    plan: String // id of plan from Stripe

    sample call:

      console.log("starting setup...");
      Stripe.card.createToken({
        number:"4242424242424242",
        cvc:"001",
        exp_month:"12",
        exp_year:"2016",
        name: "Terry Robels"
      }, function(status, response) {
        token = response.id;
        console.log(token);

        Meteor.call("purchasePlan", {
          firstName: "Terry",
          lastName: "Robles",
          email: "terry.robles@newspring.cc",
          subdomain: "mewsprings",
          orgName: "MewSpring Church"
        }, token, "Small", function(err, response){

          if (err) { console.error(err); return; }
          console.table(response);

        });

      });



  */
  "purchasePlan": function(person, token, plan) {

    check(person, {
      firstName: String,
      lastName: String,
      email: String,
      subdomain: Match.Optional(String),
      orgName: Match.Optional(String)
    });
    checkEmail(person.email);
    check(token, String);
    check(plan, String);

    const fut = new Future();
    purchase(person, token, plan, (response) => { fut.return(response); });
    return fut.wait();

  },


  /*

    getPlan:

    email: String // required
    password: String // required


    sample call:

      console.log("getting plan...");

      Meteor.call("getPlan", "terry.robles@newspring.cc", "VURFlVjXWFDTqAE",  function(err, response){
        if (err) { console.error(err); return; }

        console.table(response);
      });
  */
  "getPlan": function(email, password){

    check(email, String);
    checkEmail(email);
    check(password, String);


    // simulate actions being done
    const fut = new Future();
    getPlan(email, password, (response) => { fut.return(response); })
    return fut.wait();

  },


  /*

    cancelPlan:

    stripeId: String // required
    stripeSubId: String // required

    sample call:

      console.log("canceling plan...");
      Meteor.call("cancelPlan", "cus_7MjSbSEK51gMAa", "sub_7Mjc4b2JVlWTmQ", function(err, response){
        if (err) { console.error(err); return; }

        console.table(response);
      });

  */
  "cancelPlan": function(stripeId, stripeSubId) {

    check(stripeId, String);
    check(stripeSubId, String);

    const fut = new Future();
    cancelPlan(stripeId, stripeSubId, (response) => { fut.return(response); })
    return fut.wait();

  },

  /*

    checkSubdomain

    sampleCall:

      console.log("checking taken subdomain...");
      Meteor.call("checkSubdomain", "mewsprings", function(err, response){
        if (err) { console.error(err); return; }

        console.log(response); // false
      });

      console.log("checking available subdomain...");
      Meteor.call("checkSubdomain", "mewsprings", function(err, response){
        if (err) { console.error(err); return; }

        console.log(response); // true
      });

  */
  "checkSubdomain": function(subdomain) {
    check(subdomain, String);

    const fut = new Future();
    checkSubdomain(subdomain, (response) => { fut.return(response); })
    return fut.wait();

  },

  /*

    resetPassword:

    email: String // required
    sample call:

      console.log("resetting password...");

      Meteor.call("resetPassword", "terry.robles@newspring.cc", function(err, response){
        if (err) { console.error(err); return; }

        console.table(response);
      });

  */
  "resetPassword": function(email) {

    check(email, String);
    checkEmail(email);

    // simulate actions being done
    const fut = new Future();
    Meteor.setTimeout(() => {

      fut.return({
        success: true
      });

    // quick return because of async actions
    }, 500);
    return fut.wait();

  }

})
