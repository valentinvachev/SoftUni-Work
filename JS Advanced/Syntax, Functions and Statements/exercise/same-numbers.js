function checkIfNumberDigitsAreEqual(num) {
    let result = true;
    let sum = 0;

    let array = (""+num).split("");
    
    array.reduce((acc,curr)=>{
        if (curr!==acc) {
            result = false;
        }
        sum+=Number(curr);
        return acc;
    },array[0]) 

    console.log(result);
    console.log(sum);
};

