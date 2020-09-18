function play(turns) {
    let matrix = [
        [false, false, false],
        [false, false, false],
        [false, false, false]
    ];

    (function main() {

    let turnOfPlayer = "X";

    for (let i = 0; i <= turns.length - 1; i++) {
        let [row, col] = turns[i].split(" ");
        row = Number(row);
        col = Number(col);



        if (!checkIfThePositionIsTaken(row, col)) {
            matrix[row][col] = turnOfPlayer;
            turnOfPlayer = turnOfPlayer === "X" ? "O" : "X";
            if (checkIfSomebodyWins()) {
                break;
            } else if (checkIfDashboardIsFull()) {
                break;
            }
        }
    }
}());


    matrix.forEach(innerArray => {
        console.log(innerArray.join("\t"));
    });


    function checkIfSomebodyWins() {

        let winner = false;

        if (matrix[0][0] !== false && matrix[0][0] === matrix[0][1] && matrix[0][0] === matrix[0][2]) {
            winner = matrix[0][0];
        } else if (matrix[1][0] !== false && matrix[1][0] === matrix[1][1] && matrix[1][0] === matrix[1][2]) {
            winner = matrix[1][0];
        } else if (matrix[2][0] !== false && matrix[2][0] === matrix[2][1] && matrix[2][0] === matrix[2][2]) {
            winner = matrix[2][0];
        } else if (matrix[0][0] !== false && matrix[0][0] === matrix[1][0] && matrix[0][0] === matrix[2][0]) {
            winner = matrix[0][0];
        } else if (matrix[0][1] !== false && matrix[0][1] === matrix[1][1] && matrix[0][1] === matrix[2][1]) {
            winner = matrix[0][1];
        } else if (matrix[0][2] !== false && matrix[0][2] === matrix[1][2] && matrix[0][2] === matrix[2][2]) {
            winner = matrix[0][2];
        } else if (matrix[0][0] !== false && matrix[0][0] === matrix[1][1] && matrix[0][0] === matrix[2][2]) {
            winner = matrix[0][0];
        } else if (matrix[0][2] !== false && matrix[0][2] === matrix[1][1] && matrix[0][2] === matrix[2][0]) {
            winner = matrix[0][2];
        }

        if (winner) {
            console.log(`Player ${winner} wins!`);
            return true;
        }
        return false;
    }


    function checkIfDashboardIsFull() {
        let isFull = true;

        matrix.forEach(innerArray => innerArray.forEach(e => {
            if (e === false) {
                isFull = false;
            }
        }));

        if (isFull) {
            console.log(`The game ended! Nobody wins :(`);
        }
        return isFull;
    }

    function checkIfThePositionIsTaken(r, c) {
        if (matrix[r][c] === false) {
            return false;
        }
        console.log(`This place is already taken. Please choose another!`);
        return true;
    }
}





