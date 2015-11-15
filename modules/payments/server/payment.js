

import chargeCard from "./charge.js"
import { createCustomer, findCustomer } from "./customer.js"
import subscribe from "./subscriptions.js"

const Future = Npm.require('fibers/future');

Meteor.methods({

<<<<<<< HEAD
  "chargeCard": (token, amount) => {

    const fut = new Future();

    chargeCard(token, amount, (result) => {
=======
  "chargeCard": () => {

    const fut = new Future();

    chargeCard(token, (result) => {
>>>>>>> ed86037c2d3041abd1026fa235844f7e4ab3376c
      fut["return"](result);
    });

    return fut.wait();

  },

<<<<<<< HEAD
  "createCustomer": (person, token) => {

    const fut = new Future();

    createCustomer(person, token, (result) => {
=======
  "createCustomer": (token) => {

    const fut = new Future();

    createCustomer(token, (result) => {
>>>>>>> ed86037c2d3041abd1026fa235844f7e4ab3376c
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
