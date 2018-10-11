"use strict";

class EmissionArea {

	constructor(config = EmissionArea.DEFAULT_CONFIG) {
        this._parseConfig(config);
    }

    static create(config) {
        switch(config.shape) {
            case EmissionArea.SHAPE.POINT: {
                return new PointEmissionArea(config);
            }
            case EmissionArea.SHAPE.CIRCLE: {
                return new CircleEmissionArea(config);
            }
            case EmissionArea.SHAPE.RECT: {
                return new RectEmissionArea(config);
            }
        }
    }

    getSpawnPosition() {
        return new Point(0, 0);
    }

    _parseConfig(config) {
        this._shape = config.shape;
        this._emitOnEdge = config.emitOnEdge || false;
    }

    _clamp(value, min, max) {
        return Math.min(Math.max(value, min), max);
    }
}

class PointEmissionArea extends EmissionArea {
    
}

class CircleEmissionArea extends EmissionArea {
    getSpawnPosition() {
        const angle = Math.random() * Math.PI * 2;
        const radius = this._emitOnEdge ? this._radius : this._radius * Math.random();
        return new Point(Math.sin(angle) * radius, Math.cos(angle) * radius);
    }
    
    _parseConfig(config) {
        super._parseConfig(config);
        this._radius = config.radius;
    }
}

class RectEmissionArea extends EmissionArea {
    getSpawnPosition() {
        if (this._emitOnEdge) {
            return this._getSpawnPositionOnEdge();
        }
        else {
            return this._getSpawnPositionInbound();
        }
    }

    _getSpawnPositionOnEdge() {
        const angle = Math.random() * Math.PI * 2;
        return new Point(
            this._clamp(Math.sin(angle) * this._halfDiagonal, -this._halfWidth, this._halfWidth),
            this._clamp(Math.cos(angle) * this._halfDiagonal, -this._halfHeight, this._halfHeight)
        );
    }

    _getSpawnPositionInbound() {
        return new Point(
            Math.random() * this._width - this._halfWidth,
            Math.random() * this._height - this._halfHeight
        );
    }

    _parseConfig(config) {
        super._parseConfig(config);
        this._width = config.width;
        this._height = config.height;
        this._halfWidth = this._width * 0.5;
        this._halfHeight = this._height * 0.5;
        this._halfDiagonal = Math.sqrt(Math.pow(this._halfWidth, 2) + Math.pow(this._halfHeight, 2));
    }
}

EmissionArea.SHAPE = {
	POINT: "point",
	CIRCLE: "circle",
	RECT: "rectangle"
};

EmissionArea.DEFAULT_CONFIG = {
    shape: EmissionArea.SHAPE.POINT
};