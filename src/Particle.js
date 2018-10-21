"use strict";

class Particle {
    
    constructor(point) {
        this._initialize(point);
    }

    setPosition(x, y) {
        this.x = x;
        this.y = y;
    }

    _initialize(point) {
        this.setPosition(point.x, point.y);
    }
}

module.exports = Particle;