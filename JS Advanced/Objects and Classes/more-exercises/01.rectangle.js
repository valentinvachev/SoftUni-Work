function Rectangle(width,height,color) {
    this.width = width;
    this.height = height;
    this.color = color;
    this.calcArea = function() {
       return this.width * this.height;
    };
}