class PixiParticleSystem extends PIXI.Container {
    constructor(config) {
        super();
        this._initialize(config);
    }

    step(time) {
        Xona.ParticleSystem.prototype.step.call(this, time);
    };

    _initialize(config) {
        Xona.ParticleSystem.prototype._initialize.call(this, config);
    }

    _createEmitter(emitterConfig) {
		return this.addChild(new PixiParticleEmitter(emitterConfig));
	};
}

Object.getOwnPropertyNames(Xona.ParticleSystem.prototype).forEach(function(key) {
    if (!PixiParticleSystem.prototype.hasOwnProperty(key)) {
        PixiParticleSystem.prototype[key] = Xona.ParticleSystem.prototype[key];
    }
});