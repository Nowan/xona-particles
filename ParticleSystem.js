"use strict";

class ParticleSystem {

	constructor(config = ParticleSystem.DEFAULT_CONFIG) {
		this._emitters = config.emitters.map(this._createEmitter);
	}

	_createEmitter(emitterConfig) {
		return new ParticleEmitter(emitterConfig);
	};
}

ParticleSystem.DEFAULT_CONFIG = {
	emitters: [
		ParticleEmitter.DEFAULT_CONFIG
	]
};