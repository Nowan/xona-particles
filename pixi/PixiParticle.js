class PixiParticle extends PIXI.Graphics {
    constructor(point) {
        super();

        this.position.set(point.x, point.y);

        this.beginFill(0xffffff);
        this.drawCircle(0, 0, 2);
        this.endFill();
    }
}   