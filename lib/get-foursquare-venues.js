function GETFOURSQUAREVENUES(options, latitude, longitude, callback) {
  var version = options.version || '20140806';
  var clientID = options.clientID;
  var clientSecret = options.clientSecret;

  if (clientID == null) {
    throw new Error('clientID must be specified');
  }

  if (clientSecret == null) {
    throw new Error('clientSecret must be specified');
  }

  var requestOptions = {
    url: 'https://api.foursquare.com/v2/venues/search',
    qs: {
      v: version,
      client_id: clientID,
      client_secret: clientSecret,
      ll: latitude + ',' + longitude
    }
  };

  REQUEST(requestOptions, function(err, res, body) {
    if (err) {
      return callback(err);
    }

    var venues = JSON.parse(body).response.venues;

    callback(null, venues);
  });
}
