/***

This Fulcrum Data event code demonstrates how to calculate the Open Location Code (Plus Code) from record location coordinates (encode) and set the record location to the center of a given code (decode).
Open Location Code source from: https://github.com/google/open-location-code, licensed under the Apache License 2.0

***/

!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.openlocationcode=e()}}(function(){return function(){function e(t,n,r){function o(u,a){if(!n[u]){if(!t[u]){var f="function"==typeof require&&require;if(!a&&f)return f(u,!0);if(i)return i(u,!0);var l=new Error("Cannot find module '"+u+"'");throw l.code="MODULE_NOT_FOUND",l}var d=n[u]={exports:{}};t[u][0].call(d.exports,function(e){return o(t[u][1][e]||e)},d,d.exports,e,t,n,r)}return n[u].exports}for(var i="function"==typeof require&&require,u=0;u<r.length;u++)o(r[u]);return o}return e}()({"open-location-code":[function(e,t,n){var r=function(){},o="23456789CFGHJMPQRVWX",i=o.length,u=[20,1,.05,.0025,125e-6];r.prototype.isValid=function(e){if(!e)return!1;if(-1==e.indexOf("+"))return!1;if(e.indexOf("+")!=e.lastIndexOf("+"))return!1;if(1==e.length)return!1;if(e.indexOf("+")>8||e.indexOf("+")%2==1)return!1;if(e.indexOf("0")>-1){if(0==e.indexOf("0"))return!1;var t=e.match(new RegExp("(0+)","g"));if(t.length>1||t[0].length%2==1||t[0].length>6)return!1;if("+"!=e.charAt(e.length-1))return!1}if(e.length-e.indexOf("+")-1==1)return!1;e=e.replace(new RegExp("\\++"),"").replace(new RegExp("0+"),"");for(var n=0,r=e.length;n<r;n++){var i=e.charAt(n).toUpperCase();if("+"!=i&&-1==o.indexOf(i))return!1}return!0},r.prototype.isShort=function(e){return!!this.isValid(e)&&(e.indexOf("+")>=0&&e.indexOf("+")<8)},r.prototype.isFull=function(e){if(!this.isValid(e))return!1;if(this.isShort(e))return!1;if(o.indexOf(e.charAt(0).toUpperCase())*i>=180)return!1;if(e.length>1){if(o.indexOf(e.charAt(1).toUpperCase())*i>=360)return!1}return!0},r.prototype.encode=function(e,t,n){if(void 0===n&&(n=10),n<2||n<8&&n%2==1)throw"IllegalArgumentException: Invalid Open Location Code length";e=a(e),t=l(t),90==e&&(e-=f(n));var r=d(e,t,Math.min(n,10));return n>10&&(r+=h(e,t,n-10)),r},r.prototype.decode=function(e){if(!this.isFull(e))throw"IllegalArgumentException: Passed Open Location Code is not a valid full code: "+e;e=e.replace("+",""),e=e.replace(new RegExp("0+"),""),e=e.toUpperCase();var t=c(e.substring(0,10));if(e.length<=10)return t;var n=p(e.substring(10));return g(t.latitudeLo+n.latitudeLo,t.longitudeLo+n.longitudeLo,t.latitudeLo+n.latitudeHi,t.longitudeLo+n.longitudeHi,t.codeLength+n.codeLength)},r.prototype.recoverNearest=function(e,t,n){if(!this.isShort(e)){if(this.isFull(e))return e;throw"ValueError: Passed short code is not valid: "+e}t=a(t),n=l(n),e=e.toUpperCase();var r=8-e.indexOf("+"),o=Math.pow(20,2-r/2),i=o/2,u=Math.floor(t/o)*o,f=Math.floor(n/o)*o,d=this.decode(this.encode(u,f).substr(0,r)+e),h=d.latitudeCenter-t;return h>i?d.latitudeCenter-=o:h<-i&&(d.latitudeCenter+=o),h=d.longitudeCenter-n,h>i?d.longitudeCenter-=o:h<-i&&(d.longitudeCenter+=o),this.encode(d.latitudeCenter,d.longitudeCenter,d.codeLength)},r.prototype.shorten=function(e,t,n){if(!this.isFull(e))throw"ValueError: Passed code is not valid and full: "+e;if(-1!=e.indexOf("0"))throw"ValueError: Cannot shorten padded codes: "+e;var e=e.toUpperCase(),r=this.decode(e);if(r.codeLength<6)throw"ValueError: Code length must be at least 6";t=a(t),n=l(n);for(var o=Math.max(Math.abs(r.latitudeCenter-t),Math.abs(r.longitudeCenter-n)),i=u.length-2;i>=1;i--)if(o<.3*u[i])return e.substring(2*(i+1));return e};var a=function(e){return Math.min(90,Math.max(-90,e))},f=function(e){return e<=10?Math.pow(20,Math.floor(e/-2+2)):Math.pow(20,-3)/Math.pow(5,e-10)},l=function(e){for(;e<-180;)e+=360;for(;e>=180;)e-=360;return e},d=function(e,t,n){for(var r="",i=e+90,a=t+180,f=0;f<n;){var l=u[Math.floor(f/2)],d=Math.floor(i/l);i-=d*l,r+=o.charAt(d),f+=1,d=Math.floor(a/l),a-=d*l,r+=o.charAt(d),f+=1,8==f&&f<n&&(r+="+")}return r.length<8&&(r+=Array(8-r.length+1).join("0")),8==r.length&&(r+="+"),r},h=function(e,t,n){for(var r="",i=125e-6,u=125e-6,a=(e+90)%i,f=(t+180)%u,l=0;l<n;l++){var d=Math.floor(a/(i/5)),h=Math.floor(f/(u/4));i/=5,u/=4,a-=d*i,f-=h*u,r+=o.charAt(4*d+h)}return r},c=function(e){var t=s(e,0),n=s(e,1);return new g(t[0]-90,n[0]-180,t[1]-90,n[1]-180,e.length)},s=function(e,t){for(var n=0,r=0;2*n+t<e.length;)r+=o.indexOf(e.charAt(2*n+t))*u[n],n+=1;return[r,r+u[n-1]]},p=function(e){for(var t=0,n=0,r=125e-6,i=125e-6,u=0;u<e.length;){var a=o.indexOf(e.charAt(u)),f=Math.floor(a/4),l=a%4;r/=5,i/=4,t+=f*r,n+=l*i,u+=1}return g(t,n,t+r,n+i,e.length)},g=r.prototype.CodeArea=function(e,t,n,r,o){return new x.init(e,t,n,r,o)},x={init:function(e,t,n,r,o){this.latitudeLo=e,this.longitudeLo=t,this.latitudeHi=n,this.longitudeHi=r,this.codeLength=o,this.latitudeCenter=Math.min(e+(n-e)/2,90),this.longitudeCenter=Math.min(t+(r-t)/2,180)}};n.OpenLocationCode=r},{}]},{},[])("open-location-code")});

var openlocationcode = module.exports;

var olc = new openlocationcode.OpenLocationCode();

ON('change-geometry', function (event) {
  var encoded = olc.encode(LATITUDE(), LONGITUDE(), 11);
  SETVALUE('open_location_code', encoded);
});

ON('click', 'update_location', function (event) {
  if ($open_location_code) {
    try {
      var area = olc.decode($open_location_code);
      SETLOCATION(area.latitudeCenter, area.longitudeCenter);
    }
    catch(err) {
      ALERT('Warning!', err);
    }
  } else {
  	ALERT('Warning!', 'A valid Open Location Code is required!');
  }
});
