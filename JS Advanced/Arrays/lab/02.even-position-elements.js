function findElementsOnEvenPositions(input) {
    return input.reduce((acc,curr,index,arr)=>{
        if (index%2===0) {
            acc.push(curr);
        };
        return acc;
    },[]).join(" ");
}


console.log(findElementsOnEvenPositions(['20', '30', '40']));