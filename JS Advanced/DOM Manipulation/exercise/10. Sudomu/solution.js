function solve() {

	let table = document.querySelector('table');
	let tableBody = document.querySelector('tbody');
	let btnCheck = document.querySelectorAll('button')[0];
	let btnClear = document.querySelectorAll('button')[1];
	let resultDiv = document.querySelector('#check p');
	let inputs = document.querySelectorAll('input');

	let winner = "You solve it! Congratulations!";
	let loser = "NOP! You are not done yet...";

	btnClear.addEventListener('click', clearInputs);
	btnCheck.addEventListener('click', checkInputs);

	function checkInputs(e) {
		let mistake = false;

		let matrixHorizontal = createMatrixHorizontal();
		let matrixVertical = createMatrixVertical();

		for (let r = 0; r <= matrixHorizontal.length - 1; r++) {
			for (let c = 0; c <= matrixHorizontal[r].length - 1; c++) {
				if (matrixHorizontal[r].filter(e => e === matrixHorizontal[r][c]).length > 1 || !matrixHorizontal[r][c]) {
					mistake = true;
					break;
				}
			}
		}

		if (!mistake) {
			for (let r = 0; r <= matrixVertical.length - 1; r++) {
				for (let c = 0; c <= matrixVertical[r].length - 1; c++) {
					if (matrixVertical[r].filter(e => e === matrixVertical[r][c]).length > 1 || !matrixVertical[r][c]) {
						mistake = true;
						break;
					}
				}
			}
		}

		if (mistake) {
			table.style.border = "2px solid red";
			resultDiv.textContent = loser;
			resultDiv.style.color = 'red';
		} else {
			table.style.border = "2px solid green";
			resultDiv.textContent = winner;
			resultDiv.style.color = 'green';
		}
	}

	function clearInputs(e) {
		table.removeAttribute('style');
		resultDiv.textContent = '';
		inputs.forEach(input => {
			input.value = '';
		});
	}

	function createMatrixVertical() {
		let matrix = [];

		let arrayOfTableRows = Array.from(tableBody.getElementsByTagName('tr'));
		for (let i = 0; i <= arrayOfTableRows.length - 1; i++) {
			let innerArray = [];
			arrayOfTableRows.forEach(tr => {
				let inputEl = tr.getElementsByTagName('input')[i];
				innerArray.push(inputEl.value);
			});
			matrix.push(innerArray);
		}
		return matrix;
	}

	function createMatrixHorizontal() {
		let matrix = [];

		let tr = Array.from(tableBody.getElementsByTagName('tr'));
		tr.forEach(tr => {
			let array = [];
			Array.from(tr.getElementsByTagName('input')).forEach(input => {
				array.push(input.value);
			});
			matrix.push(array);
		});
		return matrix;
	}
}