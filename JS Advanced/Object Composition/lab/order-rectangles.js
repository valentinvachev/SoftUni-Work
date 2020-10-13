function solve(input) {

    class Rectangle{
        constructor(width,height) {
            this.width = width;
            this.height = height;
        }
        area() {
            return this.width * this.height;
        }
        compareTo(otherRectangle) {
           return otherRectangle.area() - this.area() || otherRectangle.width - this.width;
         }
    }

  return Array.from(input).reduce((acc,curr)=>{
        acc.push(new Rectangle(curr[0],curr[1]));  
        return acc; 
    },[]).sort((a,b)=>b.area()-a.area() || b.width - a.width);
}

