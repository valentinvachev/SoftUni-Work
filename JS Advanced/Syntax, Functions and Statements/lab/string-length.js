function findInputTotalAndAverageLength(a,b,c) {
    function findTotal() {
        return [a,b,c].reduce((acc,curr)=>acc+curr.length,0);
    }
    function findAverage() {
        return [a,b,c].reduce((acc,curr,index,array)=>acc+(curr.length/array.length),0);
    }

    console.log(findTotal());
    console.log(Math.floor(findAverage()));
}

