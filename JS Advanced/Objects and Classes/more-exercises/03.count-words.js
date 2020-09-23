function countTheCountOfTheWord(input) {
    let array = input[0].split(/\W+/).filter(e=>e.trim()!=="").reduce((acc,curr)=>{
        if (acc.hasOwnProperty(curr)) {
            acc[curr] ++;
        } else {
            acc[curr] = 1;
        }
        return acc;
    },{});

    return JSON.stringify(array);
}


