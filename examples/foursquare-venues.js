//requires get-foursquare-venues.js

ON('change', '@geometry', function(event) {
  var options = {
    clientID: 'CLIENT_ID',
    clientSecret: 'CLIENT_SECRET'
  };

  GETFOURSQUAREVENUES(options, LATITUDE(), LONGITUDE(), function(err, venues) {
    var choices = venues.map(function(venue) {
      return { label: venue.name + ' (' + venue.location.distance + 'm away)',
               value: venue.name };
    });

    SETCHOICES('venue', choices);
  });
});
