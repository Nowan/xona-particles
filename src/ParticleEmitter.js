const EmissionArea = require("./EmissionArea.js");
const Particle = require("./Particle.js");

"use strict";

class ParticleEmitter {

	constructor(config = ParticleEmitter.DEFAULT_CONFIG) {
		this._initialize(config);
	}

	step(time) {
		if (time % 500 <= 20) {
            this._spawnParticle();
        }
	}

	_initialize(config) {
		this._parseConfig(config);
		this._particles = [];
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