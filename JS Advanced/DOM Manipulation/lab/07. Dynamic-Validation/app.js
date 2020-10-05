function validate() {

	let email = document.getElementById("email");
	email.addEventListener("change", check);

	function check() {
		let value = email.value;
		if (value.match(/[a-zA-Z]+\@[a-zA-Z]+\.[A-Za-z]+/)) {
			email.classList.remove("error");
		} else {
			email.classList.add("error");
		}
	}
}