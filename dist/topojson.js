!function(e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).topojson=e()}(function(){return function r(o,a,i){function c(t,e){if(!a[t]){if(!o[t]){var n="function"==typeof require&&require;if(!e&&n)return n(t,!0);if(u)return u(t,!0);throw(e=new Error("Cannot find module '"+t+"'")).code="MODULE_NOT_FOUND",e}n=a[t]={exports:{}},o[t][0].call(n.exports,function(e){return c(o[t][1][e]||e)},n,n.exports,r,o,a,i)}return a[t].exports}for(var u="function"==typeof require&&require,e=0;e<i.length;e++)c(i[e]);return c}({"topojson-client":[function(e,t,n){var r,o;r=this,o=function(e){"use strict";function t(e){return e}function f(e){var a,i,c,u,f,s;return null==e?t:(c=e.scale[0],u=e.scale[1],f=e.translate[0],s=e.translate[1],function(e,t){t||(a=i=0);var n=2,r=e.length,o=new Array(r);for(o[0]=(a+=e[0])*c+f,o[1]=(i+=e[1])*u+s;n<r;)o[n]=e[n],++n;return o})}function d(e){var t,o=f(e.transform),a=1/0,i=a,c=-a,u=-a;function n(e){(e=o(e))[0]<a&&(a=e[0]),e[0]>c&&(c=e[0]),e[1]<i&&(i=e[1]),e[1]>u&&(u=e[1])}function r(e){switch(e.type){case"GeometryCollection":e.geometries.forEach(r);break;case"Point":n(e.coordinates);break;case"MultiPoint":e.coordinates.forEach(n)}}for(t in e.arcs.forEach(function(e){for(var t,n=-1,r=e.length;++n<r;)(t=o(e[n],n))[0]<a&&(a=t[0]),t[0]>c&&(c=t[0]),t[1]<i&&(i=t[1]),t[1]>u&&(u=t[1])}),e.objects)r(e.objects[t]);return[a,i,c,u]}function n(e,t){var n=t.id,r=t.bbox,o=null==t.properties?{}:t.properties,e=s(e,t);return null==n&&null==r?{type:"Feature",properties:o,geometry:e}:null==r?{type:"Feature",id:n,properties:o,geometry:e}:{type:"Feature",id:n,bbox:r,properties:o,geometry:e}}function s(e,t){var h=f(e.transform),d=e.arcs;function o(e){return h(e)}function a(e){for(var t=[],n=0,r=e.length;n<r;++n){p=l=f=s=u=c=i=a=o=void 0;var o=e[n],a=t;a.length&&a.pop();for(var i=d[o<0?~o:o],c=0,u=i.length;c<u;++c)a.push(h(i[c],c));if(o<0)for(var f,s=a,o=u,l=s.length,p=l-o;p<--l;)f=s[p],s[p++]=s[l],s[l]=f}return t.length<2&&t.push(t[0]),t}function n(e){for(var t=a(e);t.length<4;)t.push(t[0]);return t}function i(e){return e.map(n)}return function e(t){var n,r=t.type;switch(r){case"GeometryCollection":return{type:r,geometries:t.geometries.map(e)};case"Point":n=o(t.coordinates);break;case"MultiPoint":n=t.coordinates.map(o);break;case"LineString":n=a(t.arcs);break;case"MultiLineString":n=t.arcs.map(a);break;case"Polygon":n=i(t.arcs);break;case"MultiPolygon":n=t.arcs.map(i);break;default:return null}return{type:r,coordinates:n}}(t)}function h(i,r){var o={},c={},u={},a=[],f=-1;function e(e,t){for(var n in e){n=e[n];delete t[n.start],delete n.start,delete n.end,n.forEach(function(e){o[e<0?~e:e]=1}),a.push(n)}}return r.forEach(function(e,t){var n=i.arcs[e<0?~e:e];n.length<3&&!n[1][0]&&!n[1][1]&&(n=r[++f],r[f]=e,r[t]=n)}),r.forEach(function(e){var t,n,r,o=function(e){var t,n=i.arcs[e<0?~e:e],r=n[0];i.transform?(t=[0,0],n.forEach(function(e){t[0]+=e[0],t[1]+=e[1]})):t=n[n.length-1];return e<0?[t,r]:[r,t]}(e),a=o[0],o=o[1];(t=u[a])?(delete u[t.end],t.push(e),t.end=o,(n=c[o])?(delete c[n.start],r=n===t?t:t.concat(n),c[r.start=t.start]=u[r.end=n.end]=r):c[t.start]=u[t.end]=t):(t=c[o])?(delete c[t.start],t.unshift(e),t.start=a,(n=u[a])?(delete u[n.end],r=n===t?t:n.concat(t),c[r.start=n.start]=u[r.end=t.end]=r):c[t.start]=u[t.end]=t):c[(t=[e]).start=a]=u[t.end=o]=t}),e(u,c),e(c,u),r.forEach(function(e){o[e<0?~e:e]||a.push([e])}),a}function r(e,t,n){var r,o,a,i,c,u,f;if(1<arguments.length)i=n,u=[],f=[],function e(t){switch((c=t).type){case"GeometryCollection":t.geometries.forEach(e);break;case"LineString":l(t.arcs);break;case"MultiLineString":case"Polygon":p(t.arcs);break;case"MultiPolygon":t.arcs.forEach(p)}}(t),f.forEach(null==i?function(e){u.push(e[0].i)}:function(e){i(e[0].g,e[e.length-1].g)&&u.push(e[0].i)}),r=u;else for(o=0,r=new Array(a=e.arcs.length);o<a;++o)r[o]=o;function s(e){var t=e<0?~e:e;(f[t]||(f[t]=[])).push({i:e,g:c})}function l(e){e.forEach(s)}function p(e){e.forEach(l)}return{type:"MultiLineString",arcs:h(e,r)}}function o(c,e){var u={},n=[],r=[];function o(t){t.forEach(function(e){e.forEach(function(e){(u[e=e<0?~e:e]||(u[e]=[])).push(t)})}),n.push(t)}function f(e){for(var t,n=s(c,{type:"Polygon",arcs:[e]}).coordinates[0],r=-1,o=n.length,a=n[o-1],i=0;++r<o;)t=a,a=n[r],i+=t[0]*a[1]-t[1]*a[0];return Math.abs(i)}return e.forEach(function e(t){switch(t.type){case"GeometryCollection":t.geometries.forEach(e);break;case"Polygon":o(t.arcs);break;case"MultiPolygon":t.arcs.forEach(o)}}),n.forEach(function(e){if(!e._){var t=[],n=[e];for(e._=1,r.push(t);e=n.pop();)t.push(e),e.forEach(function(e){e.forEach(function(e){u[e<0?~e:e].forEach(function(e){e._||(e._=1,n.push(e))})})})}}),n.forEach(function(e){delete e._}),{type:"MultiPolygon",arcs:r.map(function(e){var t,n=[];if(e.forEach(function(e){e.forEach(function(e){e.forEach(function(e){u[e<0?~e:e].length<2&&n.push(e)})})}),1<(t=(n=h(c,n)).length))for(var r,o,a=1,i=f(n[0]);a<t;++a)(r=f(n[a]))>i&&(o=n[0],n[0]=n[a],n[a]=o,i=r);return n}).filter(function(e){return 0<e.length})}}function g(e,t){for(var n=0,r=e.length;n<r;){var o=n+r>>>1;e[o]<t?n=1+o:r=o}return n}function y(e){var i,c,u,f,s,l;return null==e?t:(u=e.scale[0],f=e.scale[1],s=e.translate[0],l=e.translate[1],function(e,t){t||(i=c=0);var n=2,r=e.length,o=new Array(r),t=Math.round((e[0]-s)/u),a=Math.round((e[1]-l)/f);for(o[0]=t-i,i=t,o[1]=a-c,c=a;n<r;)o[n]=e[n],++n;return o})}e.bbox=d,e.feature=function(t,e){return"GeometryCollection"===(e="string"==typeof e?t.objects[e]:e).type?{type:"FeatureCollection",features:e.geometries.map(function(e){return n(t,e)})}:n(t,e)},e.merge=function(e){return s(e,o.apply(this,arguments))},e.mergeArcs=o,e.mesh=function(e){return s(e,r.apply(this,arguments))},e.meshArcs=r,e.neighbors=function(e){var r={},t=e.map(function(){return[]});function n(e,n){e.forEach(function(e){var t=r[e=e<0?~e:e];t?t.push(n):r[e]=[n]})}function o(e,t){e.forEach(function(e){n(e,t)})}var a,i={LineString:n,MultiLineString:o,Polygon:o,MultiPolygon:function(e,t){e.forEach(function(e){o(e,t)})}};for(a in e.forEach(function t(e,n){"GeometryCollection"===e.type?e.geometries.forEach(function(e){t(e,n)}):e.type in i&&i[e.type](e.arcs,n)}),r)for(var c=r[a],u=c.length,f=0;f<u;++f)for(var s=f+1;s<u;++s){var l,p=c[f],h=c[s];(l=t[p])[a=g(l,h)]!==h&&l.splice(a,0,h),(l=t[h])[a=g(l,p)]!==p&&l.splice(a,0,p)}return t},e.quantize=function(e,t){if(e.transform)throw new Error("already quantized");if(t&&t.scale)c=e.bbox;else{if(!(2<=(n=Math.floor(t))))throw new Error("n must be ≥2");var n,r=(c=e.bbox||d(e))[0],o=c[1],a=c[2],i=c[3];t={scale:[a-r?(a-r)/(n-1):1,i-o?(i-o)/(n-1):1],translate:[r,o]}}var c,u,f=y(t),s=e.objects,l={};function p(e){return f(e)}function h(e){var t;switch(e.type){case"GeometryCollection":t={type:"GeometryCollection",geometries:e.geometries.map(h)};break;case"Point":t={type:"Point",coordinates:p(e.coordinates)};break;case"MultiPoint":t={type:"MultiPoint",coordinates:e.coordinates.map(p)};break;default:return e}return null!=e.id&&(t.id=e.id),null!=e.bbox&&(t.bbox=e.bbox),null!=e.properties&&(t.properties=e.properties),t}for(u in s)l[u]=h(s[u]);return{type:"Topology",bbox:c,transform:t,objects:l,arcs:e.arcs.map(function(e){var t,n=0,r=1,o=e.length,a=new Array(o);for(a[0]=f(e[0],0);++n<o;)((t=f(e[n],n))[0]||t[1])&&(a[r++]=t);return 1===r&&(a[r++]=[0,0]),a.length=r,a})}},e.transform=f,e.untransform=y,Object.defineProperty(e,"__esModule",{value:!0})},"object"==typeof n&&void 0!==t?o(n):o((r=r||self).topojson=r.topojson||{})},{}]},{},[])("topojson-client")});

// topojson-client 3.1.0
var topojson = module.exports;