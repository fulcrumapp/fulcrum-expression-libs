!function(e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).turfDistance=e()}(function(){return function o(n,i,a){function u(r,e){if(!i[r]){if(!n[r]){var t="function"==typeof require&&require;if(!e&&t)return t(r,!0);if(s)return s(r,!0);throw(e=new Error("Cannot find module '"+r+"'")).code="MODULE_NOT_FOUND",e}t=i[r]={exports:{}},n[r][0].call(t.exports,function(e){return u(n[r][1][e]||e)},t,t.exports,o,n,i,a)}return i[r].exports}for(var s="function"==typeof require&&require,e=0;e<a.length;e++)u(a[e]);return u}({1:[function(e,r,o){"use strict";function u(e,r,t){var o={type:"Feature"};return 0!==(t=void 0===t?{}:t).id&&!t.id||(o.id=t.id),t.bbox&&(o.bbox=t.bbox),o.properties=r||{},o.geometry=e,o}function n(e,r,t){if(void 0===t&&(t={}),!e)throw new Error("coordinates is required");if(!Array.isArray(e))throw new Error("coordinates must be an Array");if(e.length<2)throw new Error("coordinates must be at least 2 numbers long");if(y(e[0])&&y(e[1]))return u({type:"Point",coordinates:e},r,t);throw new Error("coordinates must contain numbers")}function i(e,r,t){void 0===t&&(t={});for(var o=0,n=e;o<n.length;o++){var i=n[o];if(i.length<4)throw new Error("Each LinearRing of a Polygon must have 4 or more Positions.");for(var a=0;a<i[i.length-1].length;a++)if(i[i.length-1][a]!==i[0][a])throw new Error("First and last Position are not equivalent.")}return u({type:"Polygon",coordinates:e},r,t)}function a(e,r,t){if(void 0===t&&(t={}),e.length<2)throw new Error("coordinates must be an array of two or more positions");return u({type:"LineString",coordinates:e},r,t)}function s(e,r){var t={type:"FeatureCollection"};return(r=void 0===r?{}:r).id&&(t.id=r.id),r.bbox&&(t.bbox=r.bbox),t.features=e,t}function f(e,r,t){return u({type:"MultiLineString",coordinates:e},r,t=void 0===t?{}:t)}function d(e,r,t){return u({type:"MultiPoint",coordinates:e},r,t=void 0===t?{}:t)}function l(e,r,t){return u({type:"MultiPolygon",coordinates:e},r,t=void 0===t?{}:t)}function c(e,r){var t=o.factors[r=void 0===r?"kilometers":r];if(t)return e*t;throw new Error(r+" units is invalid")}function m(e,r){var t=o.factors[r=void 0===r?"kilometers":r];if(t)return e/t;throw new Error(r+" units is invalid")}function t(e){return 180*(e%(2*Math.PI))/Math.PI}function y(e){return!isNaN(e)&&null!==e&&!Array.isArray(e)}Object.defineProperty(o,"__esModule",{value:!0}),o.earthRadius=6371008.8,o.factors={centimeters:100*o.earthRadius,centimetres:100*o.earthRadius,degrees:o.earthRadius/111325,feet:3.28084*o.earthRadius,inches:39.37*o.earthRadius,kilometers:o.earthRadius/1e3,kilometres:o.earthRadius/1e3,meters:o.earthRadius,metres:o.earthRadius,miles:o.earthRadius/1609.344,millimeters:1e3*o.earthRadius,millimetres:1e3*o.earthRadius,nauticalmiles:o.earthRadius/1852,radians:1,yards:1.0936*o.earthRadius},o.unitsFactors={centimeters:100,centimetres:100,degrees:1/111325,feet:3.28084,inches:39.37,kilometers:.001,kilometres:.001,meters:1,metres:1,miles:1/1609.344,millimeters:1e3,millimetres:1e3,nauticalmiles:1/1852,radians:1/o.earthRadius,yards:1.0936133},o.areaFactors={acres:247105e-9,centimeters:1e4,centimetres:1e4,feet:10.763910417,hectares:1e-4,inches:1550.003100006,kilometers:1e-6,kilometres:1e-6,meters:1,metres:1,miles:386e-9,millimeters:1e6,millimetres:1e6,yards:1.195990046},o.feature=u,o.geometry=function(e,r,t){switch(void 0===t&&(t={}),e){case"Point":return n(r).geometry;case"LineString":return a(r).geometry;case"Polygon":return i(r).geometry;case"MultiPoint":return d(r).geometry;case"MultiLineString":return f(r).geometry;case"MultiPolygon":return l(r).geometry;default:throw new Error(e+" is invalid")}},o.point=n,o.points=function(e,r,t){return void 0===t&&(t={}),s(e.map(function(e){return n(e,r)}),t)},o.polygon=i,o.polygons=function(e,r,t){return void 0===t&&(t={}),s(e.map(function(e){return i(e,r)}),t)},o.lineString=a,o.lineStrings=function(e,r,t){return void 0===t&&(t={}),s(e.map(function(e){return a(e,r)}),t)},o.featureCollection=s,o.multiLineString=f,o.multiPoint=d,o.multiPolygon=l,o.geometryCollection=function(e,r,t){return u({type:"GeometryCollection",geometries:e},r,t=void 0===t?{}:t)},o.round=function(e,r){if(!(r=void 0===r?0:r)||0<=r)return r=Math.pow(10,r||0),Math.round(e*r)/r;throw new Error("precision must be a positive number")},o.radiansToLength=c,o.lengthToRadians=m,o.lengthToDegrees=function(e,r){return t(m(e,r))},o.bearingToAzimuth=function(e){return(e%=360)<0&&(e+=360),e},o.radiansToDegrees=t,o.degreesToRadians=function(e){return e%360*Math.PI/180},o.convertLength=function(e,r,t){if(void 0===r&&(r="kilometers"),void 0===t&&(t="kilometers"),0<=e)return c(m(e,r),t);throw new Error("length must be a positive number")},o.convertArea=function(e,r,t){if(void 0===r&&(r="meters"),void 0===t&&(t="kilometers"),!(0<=e))throw new Error("area must be a positive number");if(!(r=o.areaFactors[r]))throw new Error("invalid original units");if(t=o.areaFactors[t])return e/r*t;throw new Error("invalid final units")},o.isNumber=y,o.isObject=function(e){return!!e&&e.constructor===Object},o.validateBBox=function(e){if(!e)throw new Error("bbox is required");if(!Array.isArray(e))throw new Error("bbox must be an Array");if(4!==e.length&&6!==e.length)throw new Error("bbox must be an Array of 4 or 6 numbers");e.forEach(function(e){if(!y(e))throw new Error("bbox must only contain numbers")})},o.validateId=function(e){if(!e)throw new Error("id is required");if(-1===["string","number"].indexOf(typeof e))throw new Error("id must be a number or a string")}},{}],2:[function(e,r,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=e("@turf/helpers");t.getCoord=function(e){if(!e)throw new Error("coord is required");if(!Array.isArray(e)){if("Feature"===e.type&&null!==e.geometry&&"Point"===e.geometry.type)return e.geometry.coordinates;if("Point"===e.type)return e.coordinates}if(Array.isArray(e)&&2<=e.length&&!Array.isArray(e[0])&&!Array.isArray(e[1]))return e;throw new Error("coord must be GeoJSON Point or an Array of numbers")},t.getCoords=function(e){if(Array.isArray(e))return e;if("Feature"===e.type){if(null!==e.geometry)return e.geometry.coordinates}else if(e.coordinates)return e.coordinates;throw new Error("coords must be GeoJSON Feature, Geometry Object or an Array")},t.containsNumber=function e(r){if(1<r.length&&o.isNumber(r[0])&&o.isNumber(r[1]))return!0;if(Array.isArray(r[0])&&r[0].length)return e(r[0]);throw new Error("coordinates must only contain numbers")},t.geojsonType=function(e,r,t){if(!r||!t)throw new Error("type and name required");if(!e||e.type!==r)throw new Error("Invalid input to "+t+": must be a "+r+", given "+e.type)},t.featureOf=function(e,r,t){if(!e)throw new Error("No feature passed");if(!t)throw new Error(".featureOf() requires a name");if(!e||"Feature"!==e.type||!e.geometry)throw new Error("Invalid input to "+t+", Feature with geometry required");if(!e.geometry||e.geometry.type!==r)throw new Error("Invalid input to "+t+": must be a "+r+", given "+e.geometry.type)},t.collectionOf=function(e,r,t){if(!e)throw new Error("No featureCollection passed");if(!t)throw new Error(".collectionOf() requires a name");if(!e||"FeatureCollection"!==e.type)throw new Error("Invalid input to "+t+", FeatureCollection required");for(var o=0,n=e.features;o<n.length;o++){var i=n[o];if(!i||"Feature"!==i.type||!i.geometry)throw new Error("Invalid input to "+t+", Feature with geometry required");if(!i.geometry||i.geometry.type!==r)throw new Error("Invalid input to "+t+": must be a "+r+", given "+i.geometry.type)}},t.getGeom=function(e){return"Feature"===e.type?e.geometry:e},t.getType=function(e,r){return"FeatureCollection"===e.type?"FeatureCollection":"GeometryCollection"===e.type?"GeometryCollection":("Feature"===e.type&&null!==e.geometry?e.geometry:e).type}},{"@turf/helpers":1}],"@turf/distance":[function(e,r,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=e("@turf/invariant"),a=e("@turf/helpers");t.default=function(e,r,t){void 0===t&&(t={});var e=i.getCoord(e),r=i.getCoord(r),o=a.degreesToRadians(r[1]-e[1]),n=a.degreesToRadians(r[0]-e[0]),e=a.degreesToRadians(e[1]),r=a.degreesToRadians(r[1]),o=Math.pow(Math.sin(o/2),2)+Math.pow(Math.sin(n/2),2)*Math.cos(e)*Math.cos(r);return a.radiansToLength(2*Math.atan2(Math.sqrt(o),Math.sqrt(1-o)),t.units)}},{"@turf/helpers":1,"@turf/invariant":2}]},{},[])("@turf/distance")});

// @turf/distance 6.5.0
var turfDistance = module.exports;