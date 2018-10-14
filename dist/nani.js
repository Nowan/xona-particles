var Nani=function(t){var e={};function i(s){if(e[s])return e[s].exports;var n=e[s]={i:s,l:!1,exports:{}};return t[s].call(n.exports,n,n.exports,i),n.l=!0,n.exports}return i.m=t,i.c=e,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(s,n,function(e){return t[e]}.bind(null,n));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=3)}([function(t,e,i){const s=i(1),n=i(2);class r{constructor(t=r.DEFAULT_CONFIG){this._parseConfig(t),this._particles=[];for(var e=0;e<100;e++)this._spawnParticle()}_parseConfig(t){this._parseEmission(t.emission)}_parseEmission(t){this._emissionArea=s.create(t)}_spawnParticle(){this._particles.push(this._createParticle())}_createParticle(){return new n(this._emissionArea.getSpawnPosition())}}r.DEFAULT_CONFIG={emission:s.DEFAULT_CONFIG},t.exports=r},function(t,e,i){const s=i(5);class n{constructor(t=n.DEFAULT_CONFIG){this._parseConfig(t)}static create(t){switch(t.shape){case n.SHAPE.POINT:return new r(t);case n.SHAPE.CIRCLE:return new a(t);case n.SHAPE.RECT:return new o(t)}}getSpawnPosition(){return new s(0,0)}_parseConfig(t){this._shape=t.shape,this._emitOnEdge=t.emitOnEdge||!1}_clamp(t,e,i){return Math.min(Math.max(t,e),i)}}class r extends n{}class a extends n{getSpawnPosition(){const t=Math.random()*Math.PI*2,e=this._emitOnEdge?this._radius:this._radius*Math.random();return new s(Math.sin(t)*e,Math.cos(t)*e)}_parseConfig(t){super._parseConfig(t),this._radius=t.radius}}class o extends n{getSpawnPosition(){return this._emitOnEdge?this._getSpawnPositionOnEdge():this._getSpawnPositionInbound()}_getSpawnPositionOnEdge(){const t=Math.random()*Math.PI*2;return new s(this._clamp(Math.sin(t)*this._halfDiagonal,-this._halfWidth,this._halfWidth),this._clamp(Math.cos(t)*this._halfDiagonal,-this._halfHeight,this._halfHeight))}_getSpawnPositionInbound(){return new s(Math.random()*this._width-this._halfWidth,Math.random()*this._height-this._halfHeight)}_parseConfig(t){super._parseConfig(t),this._width=t.width,this._height=t.height,this._halfWidth=.5*this._width,this._halfHeight=.5*this._height,this._halfDiagonal=Math.sqrt(Math.pow(this._halfWidth,2)+Math.pow(this._halfHeight,2))}}n.SHAPE={POINT:"point",CIRCLE:"circle",RECT:"rectangle"},n.DEFAULT_CONFIG={shape:n.SHAPE.POINT},t.exports=n},function(t,e,i){"use strict";t.exports=class{constructor(t){this.setPosition(t.x,t.y)}setPosition(t,e){this.x=t,this.y=e}}},function(t,e,i){const s=i(4),n=i(0),r=i(2),a=i(1);t.exports={ParticleSystem:s,ParticleEmitter:n,Particle:r,EmissionArea:a}},function(t,e,i){const s=i(0);class n{constructor(t=n.DEFAULT_CONFIG){this._emitters=t.emitters.map(this._createEmitter)}_createEmitter(t){return new s(t)}}n.DEFAULT_CONFIG={emitters:[s.DEFAULT_CONFIG]},t.exports=n},function(t,e){t.exports=class{constructor(t=0,e=0){this.x=t,this.y=e}}}]);