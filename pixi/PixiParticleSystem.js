class PixiParticleSystem extends PIXI.Container {
    constructor(config) {
        super();
        PixiParticleSystem.call(this, config);
    }

    _createEmitter(emitterConfig) {
		return this.addChild(new PixiParticleEmitter(emitterConfig));
	};
}

for (let key in ParticleSystem.prototype) {
    if (ParticleSystem.prototype.hasOwnProperty(key) && !PixiParticleSystem.prototype.hasOwnProperty(key)) {
        PixiParticleSystem.prototype[key] = ParticleSystem.prototype[key];
    }
}