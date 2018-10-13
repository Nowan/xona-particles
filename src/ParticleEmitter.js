const EmissionArea = require("./EmissionArea.js");
const Particle = require("./Particle.js");

"use strict";

class ParticleEmitter {

	constructor(config = ParticleEmitter.DEFAULT_CONFIG) {
		this._parseConfig(config);

		this._particles = [];

		for (var i = 0; i < 100; i++) {
			this._spawnParticle();
		}
	}

	_parseConfig(config) {
		this._parseEmission(config.emission);
	}

	_parseEmission(emissionConfig) {
		this._emissionArea = EmissionArea.create(emissionConfig);
	}

	_spawnParticle() {
		this._particles.push(this._createParticle());
	}

	_createParticle() {
		return new Particle(this._emissionArea.getSpawnPosition());
	}
}

ParticleEmitter.DEFAULT_CONFIG = {
    emission: EmissionArea.DEFAULT_CONFIG
};

module.exports = ParticleEmitter;