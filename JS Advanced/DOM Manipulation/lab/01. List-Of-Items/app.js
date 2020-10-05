function addItem() {
    let inputField = document.getElementById("newItemText");
    let itemsList = document.getElementById("items");

    let li = document.createElement("li");
    li.textContent = inputField.value;

    itemsList.appendChild(li);
    inputField.value = '';
}