"use strict";

class Particle {
    
    constructor(point) {
        this.setPosition(point.x, point.y);
    }

    setPosition(x, y) {
        this.x = x;
        this.y = y;
    }
}