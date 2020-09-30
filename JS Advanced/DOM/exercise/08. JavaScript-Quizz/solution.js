function solve() {

	let arrayQuestions = Array.from(document.getElementsByTagName('section'));

	let rightAnswers = {
		0: 'onclick',
		1: 'JSON.stringify()',
		2: 'A programming API for HTML and XML documents'
	};

	let correct = 0;


	arrayQuestions.forEach((section, index) => {
		section.addEventListener('click', check);

		function check(e) {
			if (e.target.className === 'answer-text') {
				if (e.target.textContent === rightAnswers[index]) {
					correct++;
				}
				section.style.display = 'none';
				if (index + 1 < arrayQuestions.length) {
					arrayQuestions[index + 1].style.display = 'block';
				} else {
					printResult();
				}

			}
		}
	});

	function printResult() {
		let result = document.querySelector('ul li h1');
		document.getElementById('results').style.display = 'block';

		if (correct === arrayQuestions.length) {
			result.textContent = 'You are recognized as top JavaScript fan!';
		} else {
			result.textContent = `You have ${correct} right answers`;
		}
	}

}