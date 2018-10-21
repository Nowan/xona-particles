class PixiParticle extends PIXI.Graphics {
    constructor(point) {
        super();

        this.beginFill(0xffffff);
        this.drawCircle(point.x, point.y, 2);
        this.endFill();
    }
}   