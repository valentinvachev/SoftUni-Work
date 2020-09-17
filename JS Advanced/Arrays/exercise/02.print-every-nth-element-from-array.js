function printSteppedBy(input) {
    const array = input.slice(0,input.length-1);
    const step = input[input.length-1];

    for (let i=0;i<=array.length-1;i+=Number(step)) {
        console.log(array[i]);
    }
}

