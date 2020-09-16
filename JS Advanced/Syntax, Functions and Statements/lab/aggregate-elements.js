function operations(arr) {
    let sum = (() => {
        return arr.reduce((acc,curr)=>acc+curr,0);
    })();
    let sumInverse = (() => {
        return arr.reduce((acc,curr)=>acc+(1/curr),0);
    })();
    let concat = (() => {
        return arr.reduce((acc,curr)=>acc+curr,"");
    })();

    console.log(sum);
    console.log(sumInverse);
    console.log(concat);
};


operations([2,4,8,16]);