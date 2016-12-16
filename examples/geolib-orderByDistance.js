/***
Get list of points with distance to record, from reference list, ordered nearest to farthest

requires geolib.js
***/

ON('change-geometry', function (event) {

  var location = {
    latitude: LATITUDE(),
    longitude: LONGITUDE()
  };

  var sites = {
    "Brandenburg Gate, Berlin": {latitude: 52.516272, longitude: 13.377722},
    "Dortmund U-Tower": {latitude: 51.515, longitude: 7.453619},
    "London Eye": {latitude: 51.503333, longitude: -0.119722},
    "Kremlin, Moscow": {latitude: 55.751667, longitude: 37.617778},
    "Eiffel Tower, Paris": {latitude: 48.8583, longitude: 2.2945},
    "Riksdag building, Stockholm": {latitude: 59.3275, longitude: 18.0675},
    "Royal Palace, Oslo": {latitude: 59.916911, longitude: 10.727567}
  };

  var closestSites = geolib.orderByDistance(location, sites).slice(0, 4);

  var choices = closestSites.map(function(site) {
    var siteName = site.key;
    var distanceFeet = geolib.convertUnit('ft', site.distance, 0);
    return ({
      label: siteName + ' (' + distanceFeet + ' feet away)',
      value: siteName
    });
  });

  SETCHOICES('closest_site', choices);
});
