function findDiagonal(input) {
    const array = input.map(innerArray=>innerArray.split(' ').map(e=>Number(e)));
    let firstDiagonal = 0;
    let secondDiagonal = 0;

    let column = 0;
    let columnEnd = array[0].length-1;

    array.forEach(element => {
        firstDiagonal += element[column++];
        secondDiagonal += element[columnEnd--];
    });

    if (firstDiagonal === secondDiagonal) {
        setOtherPositionsToSum(array, firstDiagonal);
    }

    printMatrix(array);

    function printMatrix(array) {
        array.forEach(e => console.log(e.join(' ')));
    };

    
    function setOtherPositionsToSum(array, sum) {
        let columnNotToPrint = array[0].length-1;
        for (let r = 0; r <= array.length - 1; r++) {
            for (let c = 0; c <= array[0].length - 1; c++) {
                if (r !== c && c!==columnNotToPrint) {
                    array[r][c] = sum;
                }
            }
            columnNotToPrint--;
        }
    }
}