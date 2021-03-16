export default class SpriteSheet {
    constructor(image, width, height, tileSize) {
        this.image = image;
        this.width = width;
        this.height = height;
        this.tileSize = tileSize;
        this.tiles = new Map();
    }

    define(name, x, y, width, height) {
        const buffer = document.createElement('canvas');
        buffer.width = 15 * this.tileSize;
        buffer.height = 20 * this.tileSize;
        console.log('x: '+this.tileSize+', '+(15 * this.tileSize));
        buffer
            .getContext('2d')
            .drawImage(
                this.image,
                0,
                0,
                150,
                200,
                0,
                0,
                300,
                400);
        this.tiles.set(name, buffer);
    }

    draw(name, context, x, y) {
        
        const buffer = this.tiles.get(name);
        context.drawImage(buffer, x, y);
    }

    drawTile(name, context, x, y) {
        this.draw(name, context, x * this.width * this, y * this.height);
    }
}
