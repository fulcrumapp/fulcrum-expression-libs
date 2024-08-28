!function(t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).turfBooleanEqual=t()}(function(){return function o(n,i,a){function u(e,t){if(!i[e]){if(!n[e]){var r="function"==typeof require&&require;if(!t&&r)return r(e,!0);if(s)return s(e,!0);throw(t=new Error("Cannot find module '"+e+"'")).code="MODULE_NOT_FOUND",t}r=i[e]={exports:{}},n[e][0].call(r.exports,function(t){return u(n[e][1][t]||t)},r,r.exports,o,n,i,a)}return i[e].exports}for(var s="function"==typeof require&&require,t=0;t<a.length;t++)u(a[t]);return u}({1:[function(t,e,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var i=t("@turf/helpers"),u=t("@turf/invariant");function a(t){var e=u.getCoords(t);if(2===e.length&&!s(e[0],e[1]))return e;var r=[],o=e.length-1,n=r.length;r.push(e[0]);for(var i=1;i<o;i++){var a=r[r.length-1];e[i][0]===a[0]&&e[i][1]===a[1]||(r.push(e[i]),2<(n=r.length)&&c(r[n-3],r[n-1],r[n-2])&&r.splice(r.length-2,1))}if(r.push(e[e.length-1]),n=r.length,s(e[0],e[e.length-1])&&n<4)throw new Error("invalid polygon");return c(r[n-3],r[n-1],r[n-2])&&r.splice(r.length-2,1),r}function s(t,e){return t[0]===e[0]&&t[1]===e[1]}function c(t,e,r){var o=r[0],r=r[1],n=t[0],t=t[1],i=e[0],e=e[1],a=i-n,u=e-t;return 0==(o-n)*u-(r-t)*a&&(Math.abs(a)>=Math.abs(u)?0<a?n<=o&&o<=i:i<=o&&o<=n:0<u?t<=r&&r<=e:e<=r&&r<=t)}r.default=function(t,e){if(e="object"==typeof(e=void 0===e?{}:e)?e.mutate:e,!t)throw new Error("geojson is required");var r=u.getType(t),o=[];switch(r){case"LineString":o=a(t);break;case"MultiLineString":case"Polygon":u.getCoords(t).forEach(function(t){o.push(a(t))});break;case"MultiPolygon":u.getCoords(t).forEach(function(t){var e=[];t.forEach(function(t){e.push(a(t))}),o.push(e)});break;case"Point":return t;case"MultiPoint":var n={};u.getCoords(t).forEach(function(t){var e=t.join("-");Object.prototype.hasOwnProperty.call(n,e)||(o.push(t),n[e]=!0)});break;default:throw new Error(r+" geometry not supported")}return t.coordinates?!0===e?(t.coordinates=o,t):{type:r,coordinates:o}:!0===e?(t.geometry.coordinates=o,t):i.feature({type:r,coordinates:o},t.properties,{bbox:t.bbox,id:t.id})}},{"@turf/helpers":2,"@turf/invariant":3}],2:[function(t,e,o){"use strict";function u(t,e,r){var o={type:"Feature"};return 0!==(r=void 0===r?{}:r).id&&!r.id||(o.id=r.id),r.bbox&&(o.bbox=r.bbox),o.properties=e||{},o.geometry=t,o}function n(t,e,r){if(void 0===r&&(r={}),!t)throw new Error("coordinates is required");if(!Array.isArray(t))throw new Error("coordinates must be an Array");if(t.length<2)throw new Error("coordinates must be at least 2 numbers long");if(d(t[0])&&d(t[1]))return u({type:"Point",coordinates:t},e,r);throw new Error("coordinates must contain numbers")}function i(t,e,r){void 0===r&&(r={});for(var o=0,n=t;o<n.length;o++){var i=n[o];if(i.length<4)throw new Error("Each LinearRing of a Polygon must have 4 or more Positions.");for(var a=0;a<i[i.length-1].length;a++)if(i[i.length-1][a]!==i[0][a])throw new Error("First and last Position are not equivalent.")}return u({type:"Polygon",coordinates:t},e,r)}function a(t,e,r){if(void 0===r&&(r={}),t.length<2)throw new Error("coordinates must be an array of two or more positions");return u({type:"LineString",coordinates:t},e,r)}function s(t,e){var r={type:"FeatureCollection"};return(e=void 0===e?{}:e).id&&(r.id=e.id),e.bbox&&(r.bbox=e.bbox),r.features=t,r}function c(t,e,r){return u({type:"MultiLineString",coordinates:t},e,r=void 0===r?{}:r)}function p(t,e,r){return u({type:"MultiPoint",coordinates:t},e,r=void 0===r?{}:r)}function f(t,e,r){return u({type:"MultiPolygon",coordinates:t},e,r=void 0===r?{}:r)}function l(t,e){var r=o.factors[e=void 0===e?"kilometers":e];if(r)return t*r;throw new Error(e+" units is invalid")}function y(t,e){var r=o.factors[e=void 0===e?"kilometers":e];if(r)return t/r;throw new Error(e+" units is invalid")}function r(t){return 180*(t%(2*Math.PI))/Math.PI}function d(t){return!isNaN(t)&&null!==t&&!Array.isArray(t)}Object.defineProperty(o,"__esModule",{value:!0}),o.earthRadius=6371008.8,o.factors={centimeters:100*o.earthRadius,centimetres:100*o.earthRadius,degrees:o.earthRadius/111325,feet:3.28084*o.earthRadius,inches:39.37*o.earthRadius,kilometers:o.earthRadius/1e3,kilometres:o.earthRadius/1e3,meters:o.earthRadius,metres:o.earthRadius,miles:o.earthRadius/1609.344,millimeters:1e3*o.earthRadius,millimetres:1e3*o.earthRadius,nauticalmiles:o.earthRadius/1852,radians:1,yards:1.0936*o.earthRadius},o.unitsFactors={centimeters:100,centimetres:100,degrees:1/111325,feet:3.28084,inches:39.37,kilometers:.001,kilometres:.001,meters:1,metres:1,miles:1/1609.344,millimeters:1e3,millimetres:1e3,nauticalmiles:1/1852,radians:1/o.earthRadius,yards:1.0936133},o.areaFactors={acres:247105e-9,centimeters:1e4,centimetres:1e4,feet:10.763910417,hectares:1e-4,inches:1550.003100006,kilometers:1e-6,kilometres:1e-6,meters:1,metres:1,miles:386e-9,millimeters:1e6,millimetres:1e6,yards:1.195990046},o.feature=u,o.geometry=function(t,e,r){switch(void 0===r&&(r={}),t){case"Point":return n(e).geometry;case"LineString":return a(e).geometry;case"Polygon":return i(e).geometry;case"MultiPoint":return p(e).geometry;case"MultiLineString":return c(e).geometry;case"MultiPolygon":return f(e).geometry;default:throw new Error(t+" is invalid")}},o.point=n,o.points=function(t,e,r){return void 0===r&&(r={}),s(t.map(function(t){return n(t,e)}),r)},o.polygon=i,o.polygons=function(t,e,r){return void 0===r&&(r={}),s(t.map(function(t){return i(t,e)}),r)},o.lineString=a,o.lineStrings=function(t,e,r){return void 0===r&&(r={}),s(t.map(function(t){return a(t,e)}),r)},o.featureCollection=s,o.multiLineString=c,o.multiPoint=p,o.multiPolygon=f,o.geometryCollection=function(t,e,r){return u({type:"GeometryCollection",geometries:t},e,r=void 0===r?{}:r)},o.round=function(t,e){if(!(e=void 0===e?0:e)||0<=e)return e=Math.pow(10,e||0),Math.round(t*e)/e;throw new Error("precision must be a positive number")},o.radiansToLength=l,o.lengthToRadians=y,o.lengthToDegrees=function(t,e){return r(y(t,e))},o.bearingToAzimuth=function(t){return(t%=360)<0&&(t+=360),t},o.radiansToDegrees=r,o.degreesToRadians=function(t){return t%360*Math.PI/180},o.convertLength=function(t,e,r){if(void 0===e&&(e="kilometers"),void 0===r&&(r="kilometers"),0<=t)return l(y(t,e),r);throw new Error("length must be a positive number")},o.convertArea=function(t,e,r){if(void 0===e&&(e="meters"),void 0===r&&(r="kilometers"),!(0<=t))throw new Error("area must be a positive number");if(!(e=o.areaFactors[e]))throw new Error("invalid original units");if(r=o.areaFactors[r])return t/e*r;throw new Error("invalid final units")},o.isNumber=d,o.isObject=function(t){return!!t&&t.constructor===Object},o.validateBBox=function(t){if(!t)throw new Error("bbox is required");if(!Array.isArray(t))throw new Error("bbox must be an Array");if(4!==t.length&&6!==t.length)throw new Error("bbox must be an Array of 4 or 6 numbers");t.forEach(function(t){if(!d(t))throw new Error("bbox must only contain numbers")})},o.validateId=function(t){if(!t)throw new Error("id is required");if(-1===["string","number"].indexOf(typeof t))throw new Error("id must be a number or a string")}},{}],3:[function(t,e,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var o=t("@turf/helpers");r.getCoord=function(t){if(!t)throw new Error("coord is required");if(!Array.isArray(t)){if("Feature"===t.type&&null!==t.geometry&&"Point"===t.geometry.type)return t.geometry.coordinates;if("Point"===t.type)return t.coordinates}if(Array.isArray(t)&&2<=t.length&&!Array.isArray(t[0])&&!Array.isArray(t[1]))return t;throw new Error("coord must be GeoJSON Point or an Array of numbers")},r.getCoords=function(t){if(Array.isArray(t))return t;if("Feature"===t.type){if(null!==t.geometry)return t.geometry.coordinates}else if(t.coordinates)return t.coordinates;throw new Error("coords must be GeoJSON Feature, Geometry Object or an Array")},r.containsNumber=function t(e){if(1<e.length&&o.isNumber(e[0])&&o.isNumber(e[1]))return!0;if(Array.isArray(e[0])&&e[0].length)return t(e[0]);throw new Error("coordinates must only contain numbers")},r.geojsonType=function(t,e,r){if(!e||!r)throw new Error("type and name required");if(!t||t.type!==e)throw new Error("Invalid input to "+r+": must be a "+e+", given "+t.type)},r.featureOf=function(t,e,r){if(!t)throw new Error("No feature passed");if(!r)throw new Error(".featureOf() requires a name");if(!t||"Feature"!==t.type||!t.geometry)throw new Error("Invalid input to "+r+", Feature with geometry required");if(!t.geometry||t.geometry.type!==e)throw new Error("Invalid input to "+r+": must be a "+e+", given "+t.geometry.type)},r.collectionOf=function(t,e,r){if(!t)throw new Error("No featureCollection passed");if(!r)throw new Error(".collectionOf() requires a name");if(!t||"FeatureCollection"!==t.type)throw new Error("Invalid input to "+r+", FeatureCollection required");for(var o=0,n=t.features;o<n.length;o++){var i=n[o];if(!i||"Feature"!==i.type||!i.geometry)throw new Error("Invalid input to "+r+", Feature with geometry required");if(!i.geometry||i.geometry.type!==e)throw new Error("Invalid input to "+r+": must be a "+e+", given "+i.geometry.type)}},r.getGeom=function(t){return"Feature"===t.type?t.geometry:t},r.getType=function(t,e){return"FeatureCollection"===t.type?"FeatureCollection":"GeometryCollection"===t.type?"GeometryCollection":("Feature"===t.type&&null!==t.geometry?t.geometry:t).type}},{"@turf/helpers":2}],4:[function(t,e,r){"use strict";var o=t("get-intrinsic"),n=t("./"),i=n(o("String.prototype.indexOf"));e.exports=function(t,e){e=o(t,!!e);return"function"==typeof e&&-1<i(t,".prototype.")?n(e):e}},{"./":5,"get-intrinsic":13}],5:[function(t,e,r){"use strict";var o=t("function-bind"),t=t("get-intrinsic"),n=t("%Function.prototype.apply%"),i=t("%Function.prototype.call%"),a=t("%Reflect.apply%",!0)||o.call(i,n),u=t("%Object.getOwnPropertyDescriptor%",!0),s=t("%Object.defineProperty%",!0),c=t("%Math.max%");if(s)try{s({},"a",{value:1})}catch(t){s=null}e.exports=function(t){var e=a(o,i,arguments);return u&&s&&u(e,"length").configurable&&s(e,"length",{value:1+c(0,t.length-(arguments.length-1))}),e};function p(){return a(o,n,arguments)}s?s(e.exports,"apply",{value:p}):e.exports.apply=p},{"function-bind":10,"get-intrinsic":13}],6:[function(t,e,r){var p=t("object-keys"),f=t("is-arguments"),l=t("object-is"),y=t("is-regex"),d=t("regexp.prototype.flags"),g=t("is-date-object"),h=Date.prototype.getTime;function m(t,e,r){r=r||{};if(r.strict?!l(t,e):t!==e){if(!t||!e||"object"!=typeof t&&"object"!=typeof e)return r.strict?l(t,e):t==e;var o,n,i=t,a=e,u=r;if(typeof i!=typeof a)return!1;if(b(i)||b(a))return!1;if(i.prototype!==a.prototype)return!1;if(f(i)!==f(a))return!1;t=y(i),e=y(a);if(t!==e)return!1;if(t||e)return i.source===a.source&&d(i)===d(a);if(g(i)&&g(a))return h.call(i)===h.call(a);if(t=v(i),e=v(a),t!==e)return!1;if(t||e){if(i.length!==a.length)return!1;for(o=0;o<i.length;o++)if(i[o]!==a[o])return!1}else{if(typeof i!=typeof a)return!1;try{var s=p(i),c=p(a)}catch(t){return!1}if(s.length!==c.length)return!1;for(s.sort(),c.sort(),o=s.length-1;0<=o;o--)if(s[o]!=c[o])return!1;for(o=s.length-1;0<=o;o--)if(n=s[o],!m(i[n],a[n],u))return!1}}return!0}function b(t){return null==t}function v(t){return!(!t||"object"!=typeof t||"number"!=typeof t.length||"function"!=typeof t.copy||"function"!=typeof t.slice||0<t.length&&"number"!=typeof t[0])}e.exports=m},{"is-arguments":21,"is-date-object":22,"is-regex":23,"object-is":25,"object-keys":29,"regexp.prototype.flags":32}],7:[function(t,e,r){"use strict";var o=t("has-property-descriptors")(),n=t("get-intrinsic"),s=o&&n("%Object.defineProperty%",!0),c=n("%SyntaxError%"),p=n("%TypeError%"),f=t("gopd");e.exports=function(t,e,r){if(!t||"object"!=typeof t&&"function"!=typeof t)throw new p("`obj` must be an object or a function`");if("string"!=typeof e&&"symbol"!=typeof e)throw new p("`property` must be a string or a symbol`");if(3<arguments.length&&"boolean"!=typeof arguments[3]&&null!==arguments[3])throw new p("`nonEnumerable`, if provided, must be a boolean or null");if(4<arguments.length&&"boolean"!=typeof arguments[4]&&null!==arguments[4])throw new p("`nonWritable`, if provided, must be a boolean or null");if(5<arguments.length&&"boolean"!=typeof arguments[5]&&null!==arguments[5])throw new p("`nonConfigurable`, if provided, must be a boolean or null");if(6<arguments.length&&"boolean"!=typeof arguments[6])throw new p("`loose`, if provided, must be a boolean");var o=3<arguments.length?arguments[3]:null,n=4<arguments.length?arguments[4]:null,i=5<arguments.length?arguments[5]:null,a=6<arguments.length&&arguments[6],u=!!f&&f(t,e);if(s)s(t,e,{configurable:null===i&&u?u.configurable:!i,enumerable:null===o&&u?u.enumerable:!o,value:r,writable:null===n&&u?u.writable:!n});else{if(!a&&(o||n||i))throw new c("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");t[e]=r}}},{"get-intrinsic":13,gopd:14,"has-property-descriptors":15}],8:[function(t,e,r){"use strict";function o(t,e){var r=2<arguments.length?arguments[2]:{},o=i(e);a&&(o=u.call(o,Object.getOwnPropertySymbols(e)));for(var n=0;n<o.length;n+=1)!function(t,e,r,o){if(e in t)if(!0===o){if(t[e]===r)return}else if(!c(o)||!o())return;p?s(t,e,r,!0):s(t,e,r)}(t,o[n],e[o[n]],r[o[n]])}var i=t("object-keys"),a="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),n=Object.prototype.toString,u=Array.prototype.concat,s=t("define-data-property"),c=function(t){return"function"==typeof t&&"[object Function]"===n.call(t)},p=t("has-property-descriptors")();o.supportsDescriptors=!!p,e.exports=o},{"define-data-property":7,"has-property-descriptors":15,"object-keys":29}],9:[function(t,e,r){"use strict";var s=Array.prototype.slice,c=Object.prototype.toString;e.exports=function(e){var r=this;if("function"!=typeof r||"[object Function]"!==c.call(r))throw new TypeError("Function.prototype.bind called on incompatible "+r);for(var o,t,n=s.call(arguments,1),i=Math.max(0,r.length-n.length),a=[],u=0;u<i;u++)a.push("$"+u);return o=Function("binder","return function ("+a.join(",")+"){ return binder.apply(this,arguments); }")(function(){var t;return this instanceof o?(t=r.apply(this,n.concat(s.call(arguments))),Object(t)===t?t:this):r.apply(e,n.concat(s.call(arguments)))}),r.prototype&&((t=function(){}).prototype=r.prototype,o.prototype=new t,t.prototype=null),o}},{}],10:[function(t,e,r){"use strict";t=t("./implementation");e.exports=Function.prototype.bind||t},{"./implementation":9}],11:[function(t,e,r){"use strict";function o(){return"string"==typeof function(){}.name}var n=Object.getOwnPropertyDescriptor;if(n)try{n([],"length")}catch(t){n=null}o.functionsHaveConfigurableNames=function(){var t;return!!(o()&&n&&(t=n(function(){},"name"))&&t.configurable)};var i=Function.prototype.bind;o.boundFunctionsHaveNames=function(){return o()&&"function"==typeof i&&""!==function(){}.bind().name},e.exports=o},{}],12:[function(t,e,r){function o(t){this.precision=t&&t.precision?t.precision:17,this.direction=!(!t||!t.direction)&&t.direction,this.pseudoNode=!(!t||!t.pseudoNode)&&t.pseudoNode,this.objectComparator=t&&t.objectComparator?t.objectComparator:u}var n=t("deep-equal");function i(e){return e.coordinates.map(function(t){return{type:e.type.replace("Multi",""),coordinates:t}})}function a(t,e){return t.hasOwnProperty("coordinates")?t.coordinates.length===e.coordinates.length:t.length===e.length}function u(t,e){return n(t,e,{strict:!0})}o.prototype.compare=function(t,e){if(t.type===e.type&&a(t,e))switch(t.type){case"Point":return this.compareCoord(t.coordinates,e.coordinates);case"LineString":return this.compareLine(t.coordinates,e.coordinates,0,!1);case"Polygon":return this.comparePolygon(t,e);case"Feature":return this.compareFeature(t,e);default:var r,o,n;if(0===t.type.indexOf("Multi"))return r=this,o=i(t),n=i(e),o.every(function(e){return this.some(function(t){return r.compare(e,t)})},n)}return!1},o.prototype.compareCoord=function(t,e){if(t.length!==e.length)return!1;for(var r=0;r<t.length;r++)if(t[r].toFixed(this.precision)!==e[r].toFixed(this.precision))return!1;return!0},o.prototype.compareLine=function(t,e,r,o){return!!a(t,e)&&(t=this.pseudoNode?t:this.removePseudo(t),e=this.pseudoNode?e:this.removePseudo(e),!o||this.compareCoord(t[0],e[0])||(e=this.fixStartIndex(e,t))?(o=this.compareCoord(t[r],e[r]),this.direction||o?this.comparePath(t,e):!!this.compareCoord(t[r],e[e.length-(1+r)])&&this.comparePath(t.slice().reverse(),e)):void 0)},o.prototype.fixStartIndex=function(t,e){for(var r,o=-1,n=0;n<t.length;n++)if(this.compareCoord(t[n],e[0])){o=n;break}return r=0<=o?[].concat(t.slice(o,t.length),t.slice(1,o+1)):r},o.prototype.comparePath=function(t,e){var r=this;return t.every(function(t,e){return r.compareCoord(t,this[e])},e)},o.prototype.comparePolygon=function(t,e){var r;return!!this.compareLine(t.coordinates[0],e.coordinates[0],1,!0)&&(t=t.coordinates.slice(1,t.coordinates.length),e=e.coordinates.slice(1,e.coordinates.length),r=this,t.every(function(e){return this.some(function(t){return r.compareLine(e,t,1,!0)})},e))},o.prototype.compareFeature=function(t,e){return!(t.id!==e.id||!this.objectComparator(t.properties,e.properties)||!this.compareBBox(t,e))&&this.compare(t.geometry,e.geometry)},o.prototype.compareBBox=function(t,e){return!!(!t.bbox&&!e.bbox||t.bbox&&e.bbox&&this.compareCoord(t.bbox,e.bbox))},o.prototype.removePseudo=function(t){return t},e.exports=o},{"deep-equal":6}],13:[function(t,e,r){"use strict";var o,l=SyntaxError,n=Function,y=TypeError,i=function(t){try{return n('"use strict"; return ('+t+").constructor;")()}catch(t){}},d=Object.getOwnPropertyDescriptor;if(d)try{d({},"")}catch(t){d=null}function a(){throw new y}var u=d?function(){try{return a}catch(t){try{return d(arguments,"callee").get}catch(t){return a}}}():a,s=t("has-symbols")(),c=t("has-proto")(),p=Object.getPrototypeOf||(c?function(t){return t.__proto__}:null),g={},c="undefined"!=typeof Uint8Array&&p?p(Uint8Array):o,h={"%AggregateError%":"undefined"==typeof AggregateError?o:AggregateError,"%Array%":Array,"%ArrayBuffer%":"undefined"==typeof ArrayBuffer?o:ArrayBuffer,"%ArrayIteratorPrototype%":s&&p?p([][Symbol.iterator]()):o,"%AsyncFromSyncIteratorPrototype%":o,"%AsyncFunction%":g,"%AsyncGenerator%":g,"%AsyncGeneratorFunction%":g,"%AsyncIteratorPrototype%":g,"%Atomics%":"undefined"==typeof Atomics?o:Atomics,"%BigInt%":"undefined"==typeof BigInt?o:BigInt,"%BigInt64Array%":"undefined"==typeof BigInt64Array?o:BigInt64Array,"%BigUint64Array%":"undefined"==typeof BigUint64Array?o:BigUint64Array,"%Boolean%":Boolean,"%DataView%":"undefined"==typeof DataView?o:DataView,"%Date%":Date,"%decodeURI%":decodeURI,"%decodeURIComponent%":decodeURIComponent,"%encodeURI%":encodeURI,"%encodeURIComponent%":encodeURIComponent,"%Error%":Error,"%eval%":eval,"%EvalError%":EvalError,"%Float32Array%":"undefined"==typeof Float32Array?o:Float32Array,"%Float64Array%":"undefined"==typeof Float64Array?o:Float64Array,"%FinalizationRegistry%":"undefined"==typeof FinalizationRegistry?o:FinalizationRegistry,"%Function%":n,"%GeneratorFunction%":g,"%Int8Array%":"undefined"==typeof Int8Array?o:Int8Array,"%Int16Array%":"undefined"==typeof Int16Array?o:Int16Array,"%Int32Array%":"undefined"==typeof Int32Array?o:Int32Array,"%isFinite%":isFinite,"%isNaN%":isNaN,"%IteratorPrototype%":s&&p?p(p([][Symbol.iterator]())):o,"%JSON%":"object"==typeof JSON?JSON:o,"%Map%":"undefined"==typeof Map?o:Map,"%MapIteratorPrototype%":"undefined"!=typeof Map&&s&&p?p((new Map)[Symbol.iterator]()):o,"%Math%":Math,"%Number%":Number,"%Object%":Object,"%parseFloat%":parseFloat,"%parseInt%":parseInt,"%Promise%":"undefined"==typeof Promise?o:Promise,"%Proxy%":"undefined"==typeof Proxy?o:Proxy,"%RangeError%":RangeError,"%ReferenceError%":ReferenceError,"%Reflect%":"undefined"==typeof Reflect?o:Reflect,"%RegExp%":RegExp,"%Set%":"undefined"==typeof Set?o:Set,"%SetIteratorPrototype%":"undefined"!=typeof Set&&s&&p?p((new Set)[Symbol.iterator]()):o,"%SharedArrayBuffer%":"undefined"==typeof SharedArrayBuffer?o:SharedArrayBuffer,"%String%":String,"%StringIteratorPrototype%":s&&p?p(""[Symbol.iterator]()):o,"%Symbol%":s?Symbol:o,"%SyntaxError%":l,"%ThrowTypeError%":u,"%TypedArray%":c,"%TypeError%":y,"%Uint8Array%":"undefined"==typeof Uint8Array?o:Uint8Array,"%Uint8ClampedArray%":"undefined"==typeof Uint8ClampedArray?o:Uint8ClampedArray,"%Uint16Array%":"undefined"==typeof Uint16Array?o:Uint16Array,"%Uint32Array%":"undefined"==typeof Uint32Array?o:Uint32Array,"%URIError%":URIError,"%WeakMap%":"undefined"==typeof WeakMap?o:WeakMap,"%WeakRef%":"undefined"==typeof WeakRef?o:WeakRef,"%WeakSet%":"undefined"==typeof WeakSet?o:WeakSet};if(p)try{null.error}catch(t){s=p(p(t));h["%Error.prototype%"]=s}function m(t){var e,r;return"%AsyncFunction%"===t?e=i("async function () {}"):"%GeneratorFunction%"===t?e=i("function* () {}"):"%AsyncGeneratorFunction%"===t?e=i("async function* () {}"):"%AsyncGenerator%"===t?(r=m("%AsyncGeneratorFunction%"))&&(e=r.prototype):"%AsyncIteratorPrototype%"===t&&(r=m("%AsyncGenerator%"))&&p&&(e=p(r.prototype)),h[t]=e}var b={"%ArrayBufferPrototype%":["ArrayBuffer","prototype"],"%ArrayPrototype%":["Array","prototype"],"%ArrayProto_entries%":["Array","prototype","entries"],"%ArrayProto_forEach%":["Array","prototype","forEach"],"%ArrayProto_keys%":["Array","prototype","keys"],"%ArrayProto_values%":["Array","prototype","values"],"%AsyncFunctionPrototype%":["AsyncFunction","prototype"],"%AsyncGenerator%":["AsyncGeneratorFunction","prototype"],"%AsyncGeneratorPrototype%":["AsyncGeneratorFunction","prototype","prototype"],"%BooleanPrototype%":["Boolean","prototype"],"%DataViewPrototype%":["DataView","prototype"],"%DatePrototype%":["Date","prototype"],"%ErrorPrototype%":["Error","prototype"],"%EvalErrorPrototype%":["EvalError","prototype"],"%Float32ArrayPrototype%":["Float32Array","prototype"],"%Float64ArrayPrototype%":["Float64Array","prototype"],"%FunctionPrototype%":["Function","prototype"],"%Generator%":["GeneratorFunction","prototype"],"%GeneratorPrototype%":["GeneratorFunction","prototype","prototype"],"%Int8ArrayPrototype%":["Int8Array","prototype"],"%Int16ArrayPrototype%":["Int16Array","prototype"],"%Int32ArrayPrototype%":["Int32Array","prototype"],"%JSONParse%":["JSON","parse"],"%JSONStringify%":["JSON","stringify"],"%MapPrototype%":["Map","prototype"],"%NumberPrototype%":["Number","prototype"],"%ObjectPrototype%":["Object","prototype"],"%ObjProto_toString%":["Object","prototype","toString"],"%ObjProto_valueOf%":["Object","prototype","valueOf"],"%PromisePrototype%":["Promise","prototype"],"%PromiseProto_then%":["Promise","prototype","then"],"%Promise_all%":["Promise","all"],"%Promise_reject%":["Promise","reject"],"%Promise_resolve%":["Promise","resolve"],"%RangeErrorPrototype%":["RangeError","prototype"],"%ReferenceErrorPrototype%":["ReferenceError","prototype"],"%RegExpPrototype%":["RegExp","prototype"],"%SetPrototype%":["Set","prototype"],"%SharedArrayBufferPrototype%":["SharedArrayBuffer","prototype"],"%StringPrototype%":["String","prototype"],"%SymbolPrototype%":["Symbol","prototype"],"%SyntaxErrorPrototype%":["SyntaxError","prototype"],"%TypedArrayPrototype%":["TypedArray","prototype"],"%TypeErrorPrototype%":["TypeError","prototype"],"%Uint8ArrayPrototype%":["Uint8Array","prototype"],"%Uint8ClampedArrayPrototype%":["Uint8ClampedArray","prototype"],"%Uint16ArrayPrototype%":["Uint16Array","prototype"],"%Uint32ArrayPrototype%":["Uint32Array","prototype"],"%URIErrorPrototype%":["URIError","prototype"],"%WeakMapPrototype%":["WeakMap","prototype"],"%WeakSetPrototype%":["WeakSet","prototype"]},u=t("function-bind"),v=t("has"),w=u.call(Function.call,Array.prototype.concat),A=u.call(Function.apply,Array.prototype.splice),P=u.call(Function.call,String.prototype.replace),j=u.call(Function.call,String.prototype.slice),O=u.call(Function.call,RegExp.prototype.exec),E=/[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,x=/\\(\\)?/g;e.exports=function(t,e){if("string"!=typeof t||0===t.length)throw new y("intrinsic name must be a non-empty string");if(1<arguments.length&&"boolean"!=typeof e)throw new y('"allowMissing" argument must be a boolean');if(null===O(/^%?[^%]*%?$/,t))throw new l("`%` may not be present anywhere but at the beginning and end of the intrinsic name");var r=function(t){var e=j(t,0,1),r=j(t,-1);if("%"===e&&"%"!==r)throw new l("invalid intrinsic syntax, expected closing `%`");if("%"===r&&"%"!==e)throw new l("invalid intrinsic syntax, expected opening `%`");var n=[];return P(t,E,function(t,e,r,o){n[n.length]=r?P(o,x,"$1"):e||t}),n}(t),o=0<r.length?r[0]:"",n=function(t,e){var r,o=t;if(v(b,o)&&(o="%"+(r=b[o])[0]+"%"),v(h,o)){var n=h[o];if(void 0!==(n=n===g?m(o):n)||e)return{alias:r,name:o,value:n};throw new y("intrinsic "+t+" exists, but is not available. Please file an issue!")}throw new l("intrinsic "+t+" does not exist!")}("%"+o+"%",e),i=(n.name,n.value),a=!1,n=n.alias;n&&(o=n[0],A(r,w([0,1],n)));for(var u=1,s=!0;u<r.length;u+=1){var c=r[u],p=j(c,0,1),f=j(c,-1);if(('"'===p||"'"===p||"`"===p||'"'===f||"'"===f||"`"===f)&&p!==f)throw new l("property names with quotes must have matching quotes");if("constructor"!==c&&s||(a=!0),v(h,p="%"+(o+="."+c)+"%"))i=h[p];else if(null!=i){if(!(c in i)){if(e)return;throw new y("base intrinsic for "+t+" exists, but the property is not available.")}i=d&&u+1>=r.length?(s=!!(f=d(i,c)))&&"get"in f&&!("originalValue"in f.get)?f.get:i[c]:(s=v(i,c),i[c]),s&&!a&&(h[p]=i)}}return i}},{"function-bind":10,has:20,"has-proto":16,"has-symbols":17}],14:[function(e,t,r){"use strict";e=e("get-intrinsic")("%Object.getOwnPropertyDescriptor%",!0);if(e)try{e([],"length")}catch(t){e=null}t.exports=e},{"get-intrinsic":13}],15:[function(t,e,r){"use strict";function o(){if(n)try{return n({},"a",{value:1}),!0}catch(t){}return!1}var n=t("get-intrinsic")("%Object.defineProperty%",!0);o.hasArrayLengthDefineBug=function(){if(!o())return null;try{return 1!==n([],"length",{value:1}).length}catch(t){return!0}},e.exports=o},{"get-intrinsic":13}],16:[function(t,e,r){"use strict";var o={foo:{}},n=Object;e.exports=function(){return{__proto__:o}.foo===o.foo&&!({__proto__:null}instanceof n)}},{}],17:[function(t,e,r){"use strict";var o="undefined"!=typeof Symbol&&Symbol,n=t("./shams");e.exports=function(){return"function"==typeof o&&"function"==typeof Symbol&&"symbol"==typeof o("foo")&&"symbol"==typeof Symbol("bar")&&n()}},{"./shams":18}],18:[function(t,e,r){"use strict";e.exports=function(){if("function"!=typeof Symbol||"function"!=typeof Object.getOwnPropertySymbols)return!1;if("symbol"!=typeof Symbol.iterator){var t={},e=Symbol("test"),r=Object(e);if("string"==typeof e)return!1;if("[object Symbol]"!==Object.prototype.toString.call(e))return!1;if("[object Symbol]"!==Object.prototype.toString.call(r))return!1;for(e in t[e]=42,t)return!1;if("function"==typeof Object.keys&&0!==Object.keys(t).length)return!1;if("function"==typeof Object.getOwnPropertyNames&&0!==Object.getOwnPropertyNames(t).length)return!1;r=Object.getOwnPropertySymbols(t);if(1!==r.length||r[0]!==e)return!1;if(!Object.prototype.propertyIsEnumerable.call(t,e))return!1;if("function"==typeof Object.getOwnPropertyDescriptor){r=Object.getOwnPropertyDescriptor(t,e);if(42!==r.value||!0!==r.enumerable)return!1}}return!0}},{}],19:[function(t,e,r){"use strict";var o=t("has-symbols/shams");e.exports=function(){return o()&&!!Symbol.toStringTag}},{"has-symbols/shams":18}],20:[function(t,e,r){"use strict";t=t("function-bind");e.exports=t.call(Function.call,Object.prototype.hasOwnProperty)},{"function-bind":10}],21:[function(t,e,r){"use strict";function o(t){return!(i&&t&&"object"==typeof t&&Symbol.toStringTag in t)&&"[object Arguments]"===a(t)}function n(t){return!!o(t)||null!==t&&"object"==typeof t&&"number"==typeof t.length&&0<=t.length&&"[object Array]"!==a(t)&&"[object Function]"===a(t.callee)}var i=t("has-tostringtag/shams")(),a=t("call-bind/callBound")("Object.prototype.toString"),t=function(){return o(arguments)}();o.isLegacyArguments=n,e.exports=t?o:n},{"call-bind/callBound":4,"has-tostringtag/shams":19}],22:[function(t,e,r){"use strict";var o=Date.prototype.getDay,n=Object.prototype.toString,i=t("has-tostringtag/shams")();e.exports=function(t){if("object"!=typeof t||null===t)return!1;if(!i)return"[object Date]"===n.call(t);try{return o.call(t),!0}catch(t){return!1}}},{"has-tostringtag/shams":19}],23:[function(t,e,r){"use strict";var o,n,i,a,u,s=t("call-bind/callBound"),t=t("has-tostringtag/shams")(),c=(t&&(o=s("Object.prototype.hasOwnProperty"),n=s("RegExp.prototype.exec"),i={},u={toString:a=function(){throw i},valueOf:a},"symbol"==typeof Symbol.toPrimitive)&&(u[Symbol.toPrimitive]=a),s("Object.prototype.toString")),p=Object.getOwnPropertyDescriptor;e.exports=t?function(t){if(!t||"object"!=typeof t)return!1;var e=p(t,"lastIndex");if(!(e&&o(e,"value")))return!1;try{n(t,u)}catch(t){return t===i}}:function(t){return!(!t||"object"!=typeof t&&"function"!=typeof t)&&"[object RegExp]"===c(t)}},{"call-bind/callBound":4,"has-tostringtag/shams":19}],24:[function(t,e,r){"use strict";function o(t){return t!=t}e.exports=function(t,e){return 0===t&&0===e?1/t==1/e:t===e||!(!o(t)||!o(e))}},{}],25:[function(t,e,r){"use strict";var o=t("define-properties"),n=t("call-bind"),i=t("./implementation"),a=t("./polyfill"),t=t("./shim"),n=n(a(),Object);o(n,{getPolyfill:a,implementation:i,shim:t}),e.exports=n},{"./implementation":24,"./polyfill":26,"./shim":27,"call-bind":5,"define-properties":8}],26:[function(t,e,r){"use strict";var o=t("./implementation");e.exports=function(){return"function"==typeof Object.is?Object.is:o}},{"./implementation":24}],27:[function(t,e,r){"use strict";var o=t("./polyfill"),n=t("define-properties");e.exports=function(){var t=o();return n(Object,{is:t},{is:function(){return Object.is!==t}}),t}},{"./polyfill":26,"define-properties":8}],28:[function(t,e,r){"use strict";var l,y,d,g,h,m,b,o,v,n;Object.keys||(l=Object.prototype.hasOwnProperty,y=Object.prototype.toString,d=t("./isArguments"),t=Object.prototype.propertyIsEnumerable,g=!t.call({toString:null},"toString"),h=t.call(function(){},"prototype"),m=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],b=function(t){var e=t.constructor;return e&&e.prototype===t},o={$applicationCache:!0,$console:!0,$external:!0,$frame:!0,$frameElement:!0,$frames:!0,$innerHeight:!0,$innerWidth:!0,$onmozfullscreenchange:!0,$onmozfullscreenerror:!0,$outerHeight:!0,$outerWidth:!0,$pageXOffset:!0,$pageYOffset:!0,$parent:!0,$scrollLeft:!0,$scrollTop:!0,$scrollX:!0,$scrollY:!0,$self:!0,$webkitIndexedDB:!0,$webkitStorageInfo:!0,$window:!0},v=function(){if("undefined"!=typeof window)for(var t in window)try{if(!o["$"+t]&&l.call(window,t)&&null!==window[t]&&"object"==typeof window[t])try{b(window[t])}catch(t){return!0}}catch(t){return!0}return!1}(),n=function(t){var e=null!==t&&"object"==typeof t,r="[object Function]"===y.call(t),o=d(t),n=e&&"[object String]"===y.call(t),i=[];if(!e&&!r&&!o)throw new TypeError("Object.keys called on a non-object");var a=h&&r;if(n&&0<t.length&&!l.call(t,0))for(var u=0;u<t.length;++u)i.push(String(u));if(o&&0<t.length)for(var s=0;s<t.length;++s)i.push(String(s));else for(var c in t)a&&"prototype"===c||!l.call(t,c)||i.push(String(c));if(g)for(var p=function(t){if("undefined"==typeof window||!v)return b(t);try{return b(t)}catch(t){return!1}}(t),f=0;f<m.length;++f)p&&"constructor"===m[f]||!l.call(t,m[f])||i.push(m[f]);return i}),e.exports=n},{"./isArguments":30}],29:[function(t,e,r){"use strict";var o=Array.prototype.slice,n=t("./isArguments"),i=Object.keys,a=i?function(t){return i(t)}:t("./implementation"),u=Object.keys;a.shim=function(){return Object.keys?function(){var t=Object.keys(arguments);return t&&t.length===arguments.length}(1,2)||(Object.keys=function(t){return n(t)?u(o.call(t)):u(t)}):Object.keys=a,Object.keys||a},e.exports=a},{"./implementation":28,"./isArguments":30}],30:[function(t,e,r){"use strict";var o=Object.prototype.toString;e.exports=function(t){var e=o.call(t);return"[object Arguments]"===e||"[object Array]"!==e&&null!==t&&"object"==typeof t&&"number"==typeof t.length&&0<=t.length&&"[object Function]"===o.call(t.callee)}},{}],31:[function(t,e,r){"use strict";var t=t("set-function-name"),o=Object,n=TypeError;e.exports=t(function(){if(null!=this&&this!==o(this))throw new n("RegExp.prototype.flags getter called on non-object");var t="";return this.hasIndices&&(t+="d"),this.global&&(t+="g"),this.ignoreCase&&(t+="i"),this.multiline&&(t+="m"),this.dotAll&&(t+="s"),this.unicode&&(t+="u"),this.unicodeSets&&(t+="v"),this.sticky&&(t+="y"),t},"get flags",!0)},{"set-function-name":35}],32:[function(t,e,r){"use strict";var o=t("define-properties"),n=t("call-bind"),i=t("./implementation"),a=t("./polyfill"),t=t("./shim"),n=n(a());o(n,{getPolyfill:a,implementation:i,shim:t}),e.exports=n},{"./implementation":31,"./polyfill":33,"./shim":34,"call-bind":5,"define-properties":8}],33:[function(t,e,r){"use strict";var o=t("./implementation"),n=t("define-properties").supportsDescriptors,i=Object.getOwnPropertyDescriptor;e.exports=function(){if(n&&"gim"===/a/gim.flags){var t=i(RegExp.prototype,"flags");if(t&&"function"==typeof t.get&&"boolean"==typeof RegExp.prototype.dotAll&&"boolean"==typeof RegExp.prototype.hasIndices){var e="",r={};if(Object.defineProperty(r,"hasIndices",{get:function(){e+="d"}}),Object.defineProperty(r,"sticky",{get:function(){e+="y"}}),"dy"===e)return t.get}}return o}},{"./implementation":31,"define-properties":8}],34:[function(t,e,r){"use strict";var o=t("define-properties").supportsDescriptors,n=t("./polyfill"),i=Object.getOwnPropertyDescriptor,a=Object.defineProperty,u=TypeError,s=Object.getPrototypeOf,c=/a/;e.exports=function(){var t,e,r;if(o&&s)return t=n(),e=s(c),(r=i(e,"flags"))&&r.get===t||a(e,"flags",{configurable:!0,enumerable:!1,get:t}),t;throw new u("RegExp.prototype.flags requires a true ES5 environment that supports property descriptors")}},{"./polyfill":33,"define-properties":8}],35:[function(t,e,r){"use strict";var o=t("define-data-property"),n=t("has-property-descriptors")(),i=t("functions-have-names").functionsHaveConfigurableNames(),a=TypeError;e.exports=function(t,e){if("function"!=typeof t)throw new a("`fn` is not a function");return 2<arguments.length&&!!arguments[2]&&!i||(n?o(t,"name",e,!0,!0):o(t,"name",e)),t}},{"define-data-property":7,"functions-have-names":11,"has-property-descriptors":15}],"@turf/boolean-equal":[function(t,e,r){"use strict";var o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}},n=(Object.defineProperty(r,"__esModule",{value:!0}),o(t("geojson-equality"))),i=o(t("@turf/clean-coords")),a=t("@turf/invariant");r.default=function(t,e){return a.getGeom(t).type===a.getGeom(e).type&&new n.default({precision:6}).compare(i.default(t),i.default(e))}},{"@turf/clean-coords":1,"@turf/invariant":3,"geojson-equality":12}]},{},[])("@turf/boolean-equal")});

// @turf/boolean-equal 6.5.0
var turfBooleanEqual = module.exports;