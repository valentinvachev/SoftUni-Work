function solve() {
	let btnGenerate = document.getElementsByTagName('button')[0];
	let textArea = document.getElementsByTagName('textarea')[0];
	let tBody = document.getElementsByTagName('tbody')[0];
	let btnBuy = document.getElementsByTagName('button')[1];
	let textAreaResult = document.getElementsByTagName('textarea')[1];

	btnGenerate.addEventListener('click', addProduct);
	btnBuy.addEventListener('click', buyProducts);

	function buyProducts() {
		let result = {
			products: [],
			price: 0,
			factor: 0
		};

		let products = Array.from(document.querySelectorAll('tbody tr'));
		products.forEach(p => {
			if (p.children[4].firstChild.checked === true) {
				result.products.push(p.children[1].textContent);
				result.price += Number(p.children[2].textContent);
				result.factor += Number(p.children[3].textContent);
			}
		});

		textAreaResult.textContent =
			`Bought furniture: ${result.products.join(', ')}\nTotal price: ${(result.price).toFixed(2)}\nAverage decoration factor: ${result.factor/result.products.length}`;
	}

	function addProduct() {

		let furniture = [];

		let parsedValue = JSON.parse(textArea.value);
		if (typeof parsedValue === 'object') {
			textArea.value = '';

			if (Array.isArray(parsedValue)) {
				furniture = parsedValue;
			} else {
				furniture.push(parsedValue);
			}

			furniture.forEach(f => {

				let {img,name,price,decFactor} = f;

				let el = elementCreator('tr', [
					elementCreator('td', elementCreator('img', '', {
						src: `${img}`
					})),
					elementCreator('td', elementCreator('p', `${name}`)),
					elementCreator('td', elementCreator('p', `${price}`)),
					elementCreator('td', elementCreator('p', `${decFactor}`)),
					elementCreator('td', elementCreator('input', '', {
						type: 'checkbox'
					})),
				]);
				tBody.appendChild(el);
			});
		}
	}


	function elementCreator(type, content, attributes) {
		const result = document.createElement(type);

		if (attributes !== undefined) {
			Object.assign(result, attributes);
		}

		if (Array.isArray(content)) {
			content.forEach(append);
		} else {
			append(content);
		}

		function append(node) {
			if (typeof node === 'string' || typeof node === 'number') {
				node = document.createTextNode(node);
			}
			result.appendChild(node);
		}

		return result;
	}
}