class Point{
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }

    static distance(pointOne,pointTwo) {
        
          let a =  Math.pow((pointTwo.x-pointOne.x),2);
          let b =  Math.pow((pointTwo.y-pointOne.y),2);
          return Math.sqrt(a+b);
    }
}


