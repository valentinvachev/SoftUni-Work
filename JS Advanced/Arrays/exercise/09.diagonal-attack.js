function diagonalAttack(input) {

    const matrix = input.map(inner=>inner.split(" ").map(e=>Number(e)));

    let sumFirst = 0;
    let sumSecond = 0;
    let counterEnd = matrix.length-1;

    let helperRowFirst = 0;
    let helperColumnFirst = 0;
    let helperRowSecond = 0;
    let helperColumnSecond = matrix[0].length-1;

    while(counterEnd-->=0) {
        sumFirst += matrix[helperRowFirst][helperColumnFirst];
        matrix[helperRowFirst][helperColumnFirst] = matrix[helperRowFirst++][helperColumnFirst++]+"";
        sumSecond += Number(matrix[helperRowSecond][helperColumnSecond]);
        matrix[helperRowSecond][helperColumnSecond] = matrix[helperRowSecond++][helperColumnSecond--]+"";
    }



    if (sumFirst===sumSecond) {
        
        matrix.forEach(inner=>{

            let array = [];
            inner.forEach(element=>{
                if (typeof element === "number") {
                    array.push(sumFirst);
                } else {
                    array.push(Number(element));
                }
            });
            console.log(array.join(" "));
        });

    } else {

        matrix.forEach(inner=>{

            let array = [];
            inner.forEach(element=>{
                array.push(Number(element));
            });
            console.log(array.join(" "));
        });

    }
}



diagonalAttack(['5 3 12 3 1',
'11 4 23 2 5',
'101 12 3 21 10',
'1 4 5 2 2',
'5 22 33 11 1']
);

