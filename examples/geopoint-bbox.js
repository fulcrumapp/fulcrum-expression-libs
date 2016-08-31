/***
Calculate bbox from location and defined distance and make a request to another app's data share to fetch the records within the bounding box. This example grabs the first record and sets the value of a record link field called `site`. If there are no sites within the bbox, alert the user to manually select the associated site from the record link list.

requires geopoint.js
***/

ON('change-geometry', function(event) {
  var location = new geopoint(LATITUDE(), LONGITUDE());
  var boundingCoords = location.boundingCoordinates(0.094697); // ~500ft
  var bbox = boundingCoords[0]._degLat + ',' + boundingCoords[0]._degLon + ',' + boundingCoords[1]._degLat + ',' + boundingCoords[1]._degLon;

  options = {
    url: 'https://web.fulcrumapp.com/shares/{share_token}.geojson',
    qs: {
      bounding_box: bbox
    }
  };

  REQUEST(options, function(error, response, body) {
    if (error) {
      ALERT('Error with request: ' + error);
    } else {
      data = JSON.parse(body);
      if (data && data.features[0]) {
        SETVALUE('site', [data.features[0].properties.fulcrum_id]);
      } else {
        ALERT('Warning!', 'This record does not appear to be within 500ft of a site. Please select the associated site from the Site list.');
      }

    }
  });
});
