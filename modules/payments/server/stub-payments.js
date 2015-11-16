

const Future = Npm.require('fibers/future');
const emailRegex = /[\w\.\'_%-]+(\+[\w-]*)?@([\w-]+\.)+[\w-]+/;

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

      var int = setInterval(function(){
        console.log("still setting up...");
      }, 2000);

      Meteor.call("purchasePlan", {
        firstName: "Purus",
        lastName: "Magna",
        email: "terry.robles@newspring.cc",
        orgSize: 10000,
        orgName: "Freedom Church"
      }, "Cursus", "Tellus", function(err, response){
        if (err) { console.error(err); return; }

        clearInterval(int);
        console.table(response);

      });

  */
  "purchasePlan": function(person, token, plan) {

    check(person, {
      firstName: String,
      lastName: String,
      email: String,
      orgSize: Match.Optional(Number),
      orgName: Match.Optional(String)
    });
    checkEmail(person.email);
    check(token, String);
    check(plan, String);



    // simulate actions being done
    const fut = new Future();
    Meteor.setTimeout(() => {

      fut.return({
        url: "https://sandbox.rockrms.church",
        email: person.email
      });

    // long wait to setup everything!
    }, 120000);
    return fut.wait();

  },


  /*

    getPlan:

    email: String // required
    password: String // required


    sample call:

      console.log("getting plan...");

      var planInt = setInterval(function(){
        console.log("still getting plan...");
      }, 2000);

      Meteor.call("getPlan", "terry.robles@newspring.cc", "Cursus",  function(err, response){
        if (err) { console.error(err); return; }

        clearInterval(planInt);
        console.table(response);
      });
  */
  "getPlan": function(email, password){

    check(email, String);
    checkEmail(email);
    check(password, String);


    // simulate actions being done
    const fut = new Future();

    Meteor.setTimeout(() => {

      fut.return({
        id: "sub_7MKtmcn8hX6y9v",
        current_period_end: 1450230969,
        current_period_start: 1447638969,
        plan: {
          id: "basic_plan_1",
          amount: 50,
          interval: "month",
          interval_count: 1,
          metadata: {
          },
          name: "Basic Plan",
          statement_descriptor: "Dolor Cras Pharetra Fusce Inceptos"
        },
        start: 1447638969,
        status: "active",
        server: {
          ip: "241.111.140.80",
          url: "https://sandbox.rockrms.church",
        },
        person: {
          firstName: "Purus",
          lastName: "Magna",
          email: "terry.robles@newspring.cc",
          orgSize: 10000,
          orgName: "Freedom Church"
        }
      });

    // medium wait to pull everything!
    }, 10000);
    return fut.wait();

  },


  /*

    cancelPlan:

    email: String // required
    password: String // required
    subId: String // required

    sample call:

      console.log("canceling plan...");

      var cancelInt = setInterval(function(){
        console.log("still canceling plan...");
      }, 2000);

      Meteor.call("cancelPlan", "terry.robles@newspring.cc", "Cursus", "foobar", function(err, response){
        if (err) { console.error(err); return; }

        clearInterval(cancelInt);
        console.table(response);
      });

  */
  "cancelPlan": function(email, password, subId) {

    check(email, String);
    checkEmail(email);
    check(password, String);
    check(subId, String);


    // simulate actions being done
    const fut = new Future();
    Meteor.setTimeout(() => {

      fut.return({
        success: true
      });

    // medium wait to cancel plan!
    }, 10000);
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
