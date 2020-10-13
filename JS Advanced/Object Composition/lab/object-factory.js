function uniqueObjectCreator(input) {
    let arr = JSON.parse(input);

   return arr.reduce((acc,curr)=>{
        acc = {...acc,...curr};
        return acc;
    },{});
}


