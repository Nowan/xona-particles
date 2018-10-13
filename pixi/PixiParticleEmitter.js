class PixiParticleEmitter extends PIXI.Container {
    constructor(config) {
        super();
        ParticleEmitter.call(this, config);
    }
}

for (let key in ParticleEmitter.prototype) {
    if (ParticleEmitter.prototype.hasOwnProperty(key) && !PixiParticleEmitter.prototype.hasOwnProperty(key)) {
        PixiParticleEmitter.prototype[key] = ParticleEmitter.prototype[key];
    }
}