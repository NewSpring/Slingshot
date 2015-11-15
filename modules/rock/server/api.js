

const Rock = {};

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

Rock.call = function(method, endpoint, data, callback) {

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
  options.headers = JSON.stringify(headers);

  endpoint = Meteor.settings.rock.baseURL + endpoint;
  
  HTTP.call(method, endpoint, data, callback);
  return;
};


Rock.get = function() {
  let args;
  args = _.values(arguments);
  args.unshift("GET");
  return Rock.call.apply(this, args);
};

Rock["delete"] = function() {
  let args;
  args = _.values(arguments);
  args.unshift("DELETE");
  return Rock.call.apply(this, args);
};

Rock.put = function() {
  let args;
  args = _.values(arguments);
  args.unshift("PUT");
  return Rock.call.apply(this, args);
};

Rock.post = function() {
  let args;
  args = _.values(arguments);
  args.unshift("POST");
  return Rock.call.apply(this, args);
};

Rock.patch = function() {
  let args;
  args = _.values(arguments);
  args.unshift("PATCH");
  return Rock.call.apply(this, args);
};


export default Rock
