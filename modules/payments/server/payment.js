

import chargeCard from "./charge.js"
import { createCustomer, findCustomer } from "./customer.js"
import subscribe from "./subscriptions.js"

const Future = Npm.require('fibers/future');

Meteor.methods({

  "chargeCard": (token, amount) => {

    const fut = new Future();

    chargeCard(token, amount, (result) => {

      fut["return"](result);
    });

    return fut.wait();

  },

  "createCustomer": (person, token) => {

    const fut = new Future();

    createCustomer(person, token, (result) => {

      fut["return"](result);
    });

    return fut.wait();

  },

  "findCustomer": (email) => {
    const fut = new Future();

    findCustomer(email, (result) => {
      fut["return"](result);
    });

    return fut.wait();
  },

  "createSubscription": (customerId, token, planId) => {

    const fut = new Future();

    subscribe(customerId, token, planId, (result) => {
      fut["return"](result);
    });

    return fut.wait();

  }
})
