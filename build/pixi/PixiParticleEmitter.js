class PixiParticleEmitter extends PIXI.Container {
    constructor(config) {
        super();
        this._initialize(config);
    }

    _initialize(config) {
        Xona.ParticleEmitter.prototype._initialize.call(this, config);
    }

    _createParticle() {
		return this.addChild(new PixiParticle(this._emissionArea.getSpawnPosition()));
	}
}

Object.getOwnPropertyNames(Xona.ParticleEmitter.prototype).forEach(function(key) {
    if (!PixiParticleEmitter.prototype.hasOwnProperty(key)) {
        PixiParticleEmitter.prototype[key] = Xona.ParticleEmitter.prototype[key];
    }
});