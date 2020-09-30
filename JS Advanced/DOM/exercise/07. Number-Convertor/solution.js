function solve() {

	let elements = {
		number: document.getElementById('input'),
		toOptions: document.getElementById('selectMenuTo'),
		button: document.getElementsByTagName('button')[0],
		result: document.getElementById('result')
	};

	addOptions();
	elements.button.addEventListener('click', convertNumber);

	function convertNumber(e) {
		if (elements.toOptions.value === 'binary' && elements.number.value !== '') {
			elements.result.value = Number(elements.number.value).toString(2);
		} else if (elements.toOptions.value === 'hexadecimal' && elements.number.value !== '') {
			elements.result.value = Number(elements.number.value).toString(16).toUpperCase();
		}
	}

	function addOptions() {
		let optionBinary = document.createElement('option');
		optionBinary.value = 'binary';
		optionBinary.textContent = 'Binary';
		let optionHexadecimal = document.createElement('option');
		optionHexadecimal.value = 'hexadecimal';
		optionHexadecimal.textContent = 'Hexadecimal';

		elements.toOptions.appendChild(optionBinary);
		elements.toOptions.appendChild(optionHexadecimal);
	}
}