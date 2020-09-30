function createArticle() {

	let elements = {
		title: document.getElementById('createTitle'),
		content: document.getElementById('createContent'),
		create: document.getElementsByTagName('button')[0],
		articles: document.getElementById('articles')
	};


	if (elements.title.value.trim() !== '' && elements.content.value.trim() !== '') {


		let h3 = document.createElement('h3');
		let p = document.createElement('p');
		let article = document.createElement('article');

		h3.textContent = elements.title.value;
		p.textContent = elements.content.value;

		article.appendChild(h3);
		article.appendChild(p);

		elements.articles.appendChild(article);

		elements.title.value = '';
		elements.content.value = '';
	}
}