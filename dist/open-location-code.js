!function(e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).openlocationcode=e()}(function(){return function r(o,i,u){function a(t,e){if(!i[t]){if(!o[t]){var n="function"==typeof require&&require;if(!e&&n)return n(t,!0);if(f)return f(t,!0);throw(n=new Error("Cannot find module '"+t+"'")).code="MODULE_NOT_FOUND",n}n=i[t]={exports:{}},o[t][0].call(n.exports,function(e){return a(o[t][1][e]||e)},n,n.exports,r,o,i,u)}return i[t].exports}for(var f="function"==typeof require&&require,e=0;e<u.length;e++)a(u[e]);return a}({"open-location-code":[function(e,t,n){function r(){}var l="+",d="0",h="23456789CFGHJMPQRVWX",o=h.length,c=90,s=180,i=10,p=[20,1,.05,.0025,125e-6],g=125e-6;r.prototype.isValid=function(e){if(!e)return!1;if(-1==e.indexOf(l))return!1;if(e.indexOf(l)!=e.lastIndexOf(l))return!1;if(1==e.length)return!1;if(8<e.indexOf(l)||e.indexOf(l)%2==1)return!1;if(-1<e.indexOf(d)){if(0==e.indexOf(d))return!1;var t=e.match(new RegExp("(0+)","g"));if(1<t.length||t[0].length%2==1||6<t[0].length)return!1;if(e.charAt(e.length-1)!=l)return!1}if(e.length-e.indexOf(l)-1==1)return!1;for(var n=0,r=(e=e.replace(new RegExp("\\++"),"").replace(new RegExp("0+"),"")).length;n<r;n++){var o=e.charAt(n).toUpperCase();if(o!=l&&-1==h.indexOf(o))return!1}return!0},r.prototype.isShort=function(e){return!!this.isValid(e)&&(0<=e.indexOf(l)&&e.indexOf(l)<8)},r.prototype.isFull=function(e){if(!this.isValid(e))return!1;if(this.isShort(e))return!1;if(180<=h.indexOf(e.charAt(0).toUpperCase())*o)return!1;if(1<e.length&&360<=h.indexOf(e.charAt(1).toUpperCase())*o)return!1;return!0},r.prototype.encode=function(e,t,n){if((n=void 0===n?i:n)<2||n<8&&n%2==1)throw"IllegalArgumentException: Invalid Open Location Code length";e=f(e),t=x(t),90==e&&(e-=u(n));var r=a(e,t,Math.min(n,i));return i<n&&(r+=v(e,t,n-i)),r},r.prototype.decode=function(e){if(!this.isFull(e))throw"IllegalArgumentException: Passed Open Location Code is not a valid full code: "+e;e=(e=(e=e.replace(l,"")).replace(new RegExp("0+"),"")).toUpperCase();var t=C(e.substring(0,i));if(e.length<=i)return t;e=O(e.substring(i));return w(t.latitudeLo+e.latitudeLo,t.longitudeLo+e.longitudeLo,t.latitudeLo+e.latitudeHi,t.longitudeLo+e.longitudeHi,t.codeLength+e.codeLength)},r.prototype.recoverNearest=function(e,t,n){if(!this.isShort(e)){if(this.isFull(e))return e;throw"ValueError: Passed short code is not valid: "+e}t=f(t),n=x(n);var r=8-(e=e.toUpperCase()).indexOf(l),o=Math.pow(20,2-r/2),i=o/2,u=Math.floor(t/o)*o,a=Math.floor(n/o)*o,e=this.decode(this.encode(u,a).substr(0,r)+e),t=e.latitudeCenter-t;return i<t?e.latitudeCenter-=o:t<-i&&(e.latitudeCenter+=o),i<(t=e.longitudeCenter-n)?e.longitudeCenter-=o:t<-i&&(e.longitudeCenter+=o),this.encode(e.latitudeCenter,e.longitudeCenter,e.codeLength)},r.prototype.shorten=function(e,t,n){if(!this.isFull(e))throw"ValueError: Passed code is not valid and full: "+e;if(-1!=e.indexOf(d))throw"ValueError: Cannot shorten padded codes: "+e;var e=e.toUpperCase(),r=this.decode(e);if(r.codeLength<6)throw"ValueError: Code length must be at least 6";t=f(t),n=x(n);for(var o=Math.max(Math.abs(r.latitudeCenter-t),Math.abs(r.longitudeCenter-n)),i=p.length-2;1<=i;i--)if(o<.3*p[i])return e.substring(2*(i+1));return e};var f=function(e){return Math.min(90,Math.max(-90,e))},u=function(e){return e<=10?Math.pow(20,Math.floor(e/-2+2)):Math.pow(20,-3)/Math.pow(5,e-10)},x=function(e){for(;e<-180;)e+=360;for(;180<=e;)e-=360;return e},a=function(e,t,n){for(var r="",o=e+c,i=t+s,u=0;u<n;){var a=p[Math.floor(u/2)],f=Math.floor(o/a);o-=f*a,r+=h.charAt(f),u+=1,i-=(f=Math.floor(i/a))*a,r+=h.charAt(f),8==(u+=1)&&u<n&&(r+=l)}return r.length<8&&(r+=Array(8-r.length+1).join(d)),8==r.length&&(r+=l),r},v=function(e,t,n){for(var r="",o=g,i=g,u=(e+c)%o,a=(t+s)%i,f=0;f<n;f++){var l=Math.floor(u/(o/5)),d=Math.floor(a/(i/4));u-=l*(o/=5),a-=d*(i/=4),r+=h.charAt(4*l+d)}return r},C=function(e){var t=M(e,0),n=M(e,1);return new w(t[0]-c,n[0]-s,t[1]-c,n[1]-s,e.length)},M=function(e,t){for(var n=0,r=0;2*n+t<e.length;)r+=h.indexOf(e.charAt(2*n+t))*p[n],n+=1;return[r,r+p[n-1]]},O=function(e){for(var t=0,n=0,r=g,o=g,i=0;i<e.length;){var u=h.indexOf(e.charAt(i));t+=Math.floor(u/4)*(r/=5),n+=u%4*(o/=4),i+=1}return w(t,n,t+r,n+o,e.length)},w=r.prototype.CodeArea=function(e,t,n,r,o){return new y.init(e,t,n,r,o)},y={init:function(e,t,n,r,o){this.latitudeLo=e,this.longitudeLo=t,this.latitudeHi=n,this.longitudeHi=r,this.codeLength=o,this.latitudeCenter=Math.min(e+(n-e)/2,c),this.longitudeCenter=Math.min(t+(r-t)/2,s)}};n.OpenLocationCode=r},{}]},{},[])("open-location-code")});

var openlocationcode = module.exports;