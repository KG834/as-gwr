class Notes {
    constructor(x, y, w, h, img) {
        this.x = x;
        this.y = y;
        this.height = h;
        this.width = w;
        this.image = img;
    }
    display() {
       imageMode(CENTER);
        image(this.image, this.x, this.y, this.width, this.height)
    }

}