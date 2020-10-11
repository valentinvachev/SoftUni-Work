function getArticleGenerator(articles) {
    let div = document.getElementById("content");
    let arr = articles;
    return function showNext() {
        if (arr.length > 0) {
        let result = arr.shift();
        let article = document.createElement('article');
        article.textContent = result;
        div.appendChild(article);
        }
    };
}