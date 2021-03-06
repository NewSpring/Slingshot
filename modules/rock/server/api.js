

const Rock = {};
Rock.api = {};


/*
  Rock.api.call
  @example make an API call to Rock
    Rock.apiRequest "DELETE", "api/UserLogins/#{user.Id}", (error, data) ->
      throw err if err
      console.log data
  @param method [String] CRUD Method desired
  @param endpoint [String] Url to hit on rock
  @param data [Object, String, Array] data to send to Rock
  @param callback [Function] callback to run on response
 */

Rock.api.call = function(method, endpoint, data, callback) {

  if (typeof data === "function") {
    callback = data;
    data = {};
  }

  if (!Meteor.settings.rock ||
      !Meteor.settings.rock.tokenName ||
      !Meteor.settings.rock.token ||
      !Meteor.settings.rock.baseURL
    ) {
    throw new Meteor.Error("Rock api credientials are missing");
    return;
  }

  const headers = {};
  headers["Content-Type"] = "application/json";
  headers[Meteor.settings.rock.tokenName] = Meteor.settings.rock.token;

  const options = {};
  options.content = JSON.stringify(data);
  options.headers = headers;

  endpoint = Meteor.settings.rock.baseURL + "api/" + endpoint;
  HTTP.call(method, endpoint, options, callback);
  return;
};


Rock.api.get = function() {
  let args;
  args = _.values(arguments);
  args.unshift("GET");
  return Rock.api.call.apply(this, args);
};

Rock.api["delete"] = function() {
  let args;
  args = _.values(arguments);
  args.unshift("DELETE");
  return Rock.api.call.apply(this, args);
};

Rock.api.put = function() {
  let args;
  args = _.values(arguments);
  args.unshift("PUT");
  return Rock.api.call.apply(this, args);
};

Rock.api.post = function() {
  let args;
  args = _.values(arguments);
  args.unshift("POST");
  return Rock.api.call.apply(this, args);
};

Rock.api.patch = function() {
  let args;
  args = _.values(arguments);
  args.unshift("PATCH");
  return Rock.api.call.apply(this, args);

};


Rock.apiSync = {};
for (const meth in Rock.api) {
  Rock.apiSync[meth] = Meteor.wrapAsync(Rock.api[meth], Rock.api);
}

export default Rock
