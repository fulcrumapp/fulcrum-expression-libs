!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var r;r="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,r.turftag=e()}}(function(){return function e(r,t,n){function o(i,u){if(!t[i]){if(!r[i]){var a="function"==typeof require&&require;if(!u&&a)return a(i,!0);if(f)return f(i,!0);var p=new Error("Cannot find module '"+i+"'");throw p.code="MODULE_NOT_FOUND",p}var s=t[i]={exports:{}};r[i][0].call(s.exports,function(e){var t=r[i][1][e];return o(t?t:e)},s,s.exports,e,r,t,n)}return t[i].exports}for(var f="function"==typeof require&&require,i=0;i<n.length;i++)o(n[i]);return o}({1:[function(e,r,t){function n(e,r){for(var t=!1,n=0,o=r.length-1;n<r.length;o=n++){var f=r[n][0],i=r[n][1],u=r[o][0],a=r[o][1],p=i>e[1]!=a>e[1]&&e[0]<(u-f)*(e[1]-i)/(a-i)+f;p&&(t=!t)}return t}r.exports=function(e,r){var t=r.geometry.coordinates,o=[e.geometry.coordinates[0],e.geometry.coordinates[1]];"Polygon"===r.geometry.type&&(t=[t]);for(var f=!1,i=0;i<t.length&&!f;){if(n(o,t[i][0])){for(var u=!1,a=1;a<t[i].length&&!u;)n(o,t[i][a])&&(u=!0),a++;u||(f=!0)}i++}return f}},{}],"turf-tag":[function(e,r,t){var n=e("turf-inside");r.exports=function(e,r,t,o){return e=JSON.parse(JSON.stringify(e)),r=JSON.parse(JSON.stringify(r)),e.features.forEach(function(e){e.properties||(e.properties={}),r.features.forEach(function(r){if(void 0===e.properties[o]){var f=n(e,r);f&&(e.properties[o]=r.properties[t])}})}),e}},{"turf-inside":1}]},{},[])("turf-tag")});

var turftag = module.exports;
