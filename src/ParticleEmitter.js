const EmissionArea = require("./EmissionArea.js");
const Particle = require("./Particle.js");

"use strict";

class ParticleEmitter {

	constructor(config) {
		this._initialize(config);
	}

	step(time) {
		
	}

	_initialize(config = ParticleEmitter.DEFAULT_CONFIG) {
		this._parseConfig(config);
		this._particles = [];
		this._getParticlesCountInTimestep(5000);
	}

	_parseConfig(config) {
		this._emissionArea = EmissionArea.create(config.emission);
		this._frequency = config.emission.frequency;
		this._density = config.emission.density;
		this._lifetime = config.lifetime;
	}

	_getParticlesCountInTimestep(timestep) {
		let particlesCount = 0;
		const precedingEmissionsCount = this._lifetime.max / this._frequency;
		console.log("PRECEDING EMISSIONS COUNT: " + precedingEmissionsCount);
		for (let i = 0; i < precedingEmissionsCount; i++) {
			const emissionDensity = this._density.min + Math.floor(Math.random() * (this._density.max - this._density.min));
			console.log("EMISSION " + i + " DENSITY: " + emissionDensity);
			for (let j = 0; j < emissionDensity; j++) {
				const particleLifetime = this._lifetime.min + Math.floor(Math.random() * (this._lifetime.max - this._lifetime.min));
				particlesCount += Math.floor(particleLifetime / this._frequency);
				console.log("PARTICLE " + j + " LIFETIME: " + particleLifetime + " OUTLIVES " + (Math.floor(particleLifetime / this._frequency)) + " EMISSIONS");
			}
		}
		console.log("PARTICLES COUNT IN " + timestep + " TIMESTEP: " + particlesCount);
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