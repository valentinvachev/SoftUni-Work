function findLargestNum(numOne,numTwo,numThree) {
    let max = Array.from(arguments).reduce((acc,curr)=>{
        if (curr>acc) {
            acc = curr;
        }
        return acc;
    },arguments[0]);

    console.log(`The largest number is ${max}.`);
}


findLargestNum(190000,560,1);