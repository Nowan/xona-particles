const ParticleEmitter = require("./ParticleEmitter.js");

"use strict";

class ParticleSystem {

	constructor(config) {
		this._initialize(config);
	}

	step(time) {
		this._emitters.forEach(function(emitter) {
			emitter.step(time);
		}, this);
	}

	_initialize(config = ParticleSystem.DEFAULT_CONFIG) {
		this._emitters = config.emitters.map(this._createEmitter, this);
	}

	_createEmitter(emitterConfig) {
		return new ParticleEmitter(emitterConfig);
	}
}

ParticleSystem.DEFAULT_CONFIG = {
	emitters: [
		ParticleEmitter.DEFAULT_CONFIG
	]
};

module.exports = ParticleSystem;