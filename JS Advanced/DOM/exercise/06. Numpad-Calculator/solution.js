function solve() {
	let elements = {
		keys: document.getElementsByClassName('keys')[0],
		expression: document.getElementById('expressionOutput'),
		clear: document.getElementsByClassName('clear')[0],
		result: document.getElementById('resultOutput')
	};


	let calculator = {
		'+': (a, b) => a + b,
		'-': (a, b) => a - b,
		'/': (a, b) => a / b,
		'x': (a, b) => a * b,
	};

	elements.keys.addEventListener('click', printSymbol);
	elements.clear.addEventListener('click', clearFields);


	function printResult() {
		let result = checkIfValid();
		elements.result.textContent = result;
	}

	function checkIfValid() {
		let result = elements.expression.textContent.trim().split(' ');
		let firstOperand = Number(result[0]);
		let secondOperand = Number(result[2]);
		if (result.length !== 3 || isNaN(firstOperand) || isNaN(secondOperand)) {
			return NaN;
		} else {
			return calculator[result[1]](firstOperand, secondOperand);
		}
	}

	function clearFields(e) {
		elements.result.textContent = '';
		elements.expression.textContent = '';
	}

	function printSymbol(e) {

		if (elements.result.textContent !== '') {
			elements.result.textContent = '';
			elements.expression.textContent = '';
		}

		if (e.target.textContent === '=') {
			printResult();
		} else if (e.target.textContent.match(/[\/\+\-\x]/)) {
			elements.expression.textContent += ' ' + e.target.textContent + ' ';
		} else {
			elements.expression.textContent += e.target.textContent;
		}
		elements.expression.textContent.trim();
	}
}