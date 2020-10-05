function solve() {
	let result = document.getElementById('result');
	let sectionCards = document.getElementsByClassName('cards')[0];
	let history = document.getElementById('history');
	let firstSpan = result.firstElementChild;
	let secondSpan = result.lastElementChild;

	let firstCard = null;
	let secondCard = null;

	sectionCards.addEventListener('click', cardChecked);

	function cardChecked(e) {
		if (!e.target.hasAttribute('style') && e.target.localName === 'img') {
			e.target.src = "images/whiteCard.jpg";


			if (e.target.parentNode.id === 'player1Div') {
				firstSpan.textContent = e.target.name;
				firstCard = e.target;
			} else {
				secondSpan.textContent = e.target.name;
				secondCard = e.target;
			}

			if (firstCard && secondCard) {
				if (Number(firstCard.name) > Number(secondCard.name)) {
					firstCard.style.border = '2px solid green';
					secondCard.style.border = '2px solid red';
				} else if (Number(firstCard.name) < Number(secondCard.name)) {
					secondCard.style.border = '2px solid green';
					firstCard.style.border = '2px solid red';
				} else {
					firstCard.style.border = '2px solid green';
					secondCard.style.border = '2px solid green';
				}

				firstSpan.textContent = '';
				secondSpan.textContent = '';
				history.textContent += `[${firstCard.name} vs ${secondCard.name}] `;
				firstCard = null;
				secondCard = null;
			}
		}
	}
}