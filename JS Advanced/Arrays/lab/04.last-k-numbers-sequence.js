function findSequence(n,m) {
    let array = [1];


    while(array.length<n) {
        let counter = array.length-1;
        let sum = 0;
        let count = m;
        while(counter>=0 && count>0) {
            sum+= array[counter];
            counter--;
            count--;
        }

        array.push(sum);
    }

    return array;
}


