function addItem() {
    let elements = {
        textInput: document.querySelector('#newItemText'),
        valueInput: document.querySelector('#newItemValue'),
        dropDown: document.querySelector('#menu')
    };

    let optionEl = document.createElement('option');
    optionEl.textContent = elements.textInput.value;
    optionEl.value = elements.valueInput.value;
    elements.textInput.value = '';
    elements.valueInput.value = '';


    elements.dropDown.appendChild(optionEl);
}