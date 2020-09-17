function findMagicMatrix(matrix) {
    let rowSum = matrix[0].reduce((acc,curr)=>acc+curr);

    let equal = true;

    matrix.forEach(innerArray => {
      let sum = innerArray.reduce((acc,curr)=>acc+curr);
      if (sum!==rowSum) {
          equal = false;
      }
    });

    if (equal) {
       
        for (let i=0;i<=matrix[0].length-1;i++) {
            let sum = 0;
            for (let y=0;y<=matrix.length-1;y++) {
                sum+= matrix[y][i];
            }
            if (sum!==rowSum) {
                equal = false;
                break;
            }
        }
    }
    console.log(equal);
}
