function fillMatrix(input) {
    const dimensions = Number(input[0]);
    let row = Number(input[2]);
    let column = Number(input[3]);

    const array = [];
    for (let i = 0; i <= dimensions - 1; i++) {
        array[i] = [];
        for (let y = 0; y <= dimensions - 1; y++) {
            array[i].push('*');
        }
    }


    array[row][column] = 1;
    let number = 2;
    let times = 1;
    while (times++ < dimensions && isEmptySpaceLeft(array)) {
        for (let r = 0; r <= dimensions - 1; r++) {
            for (let c = 0; c <= dimensions - 1; c++) {
                if (array[r][c] === '*') {
                    //up
                    if (r - 1 >= 0 && number - 1 === array[r - 1][c]) {
                        array[r][c] = number;
                    }
                    //down 
                    if (r + 1 <= array.length - 1 && number - 1 === array[r + 1][c]) {
                        array[r][c] = number;
                    }
                    // left
                    if (c - 1 >= 0 && number - 1 === array[r][c - 1]) {
                        array[r][c] = number;
                    }
                    // right
                    if (c + 1 <= array[0].length - 1 && number - 1 === array[r][c + 1]) {
                        array[r][c] = number;
                    }
                    // up-left diagonal
                    if (r - 1 >= 0 && c - 1 >= 0 && number - 1 === array[r - 1][c - 1]) {
                        array[r][c] = number;
                    }
                    // up-right diagonal
                    if (r - 1 >= 0 && c + 1 <= array[0].length - 1 && number - 1 === array[r - 1][c + 1]) {
                        array[r][c] = number;
                    }
                    // down-left diagonal
                    if (r + 1 <= array.length - 1 && c - 1 >= 0 && number - 1 === array[r + 1][c - 1]) {
                        array[r][c] = number;
                    }
                    // down-right diagonal
                    if (r + 1 <= array.length - 1 && c + 1 <= array[0].length - 1 && number - 1 === array[r + 1][c + 1]) {
                        array[r][c] = number;
                    }
                }
            }
        }
        number++;
    }

    array.forEach(e => console.log(e.join(' ')));

    function isEmptySpaceLeft(array) {
        for (let r = 0; r <= array.length - 1; r++) {
            for (let c = 0; c <= array[r].length - 1; c++) {
                if (array[r][c] === '*') {
                    return true;
                }
            }
        }
        return false;
    }
}