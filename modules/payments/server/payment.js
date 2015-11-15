

import chargeCard from "./charge.js"
import { createCustomer, findCustomer } from "./customer.js"
import subscribe from "./subscriptions.js"

const Future = Npm.require('fibers/future');

Meteor.methods({

  "chargeCard": () => {

    const fut = new Future();

    chargeCard(token, (result) => {
      fut["return"](result);
    });

    return fut.wait();

  },

  "createCustomer": (token) => {

    const fut = new Future();

    createCustomer(token, (result) => {
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
