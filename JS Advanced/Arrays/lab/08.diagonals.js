function diagonalsOfMatrix(matrix) {
    let firstDiagonal = 0;
    let secondDiagonal = 0;


    let count = 0
    let fRow = 0;
    let sRow = matrix.length-1;

    while(count<matrix[0].length) {
        firstDiagonal += matrix[fRow++][count];
        secondDiagonal += matrix[sRow--][count];
        count++;
    }

    return `${firstDiagonal} ${secondDiagonal}`
}
