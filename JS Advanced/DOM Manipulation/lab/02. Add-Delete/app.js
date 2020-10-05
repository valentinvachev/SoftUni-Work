function addItem() {
    let inputField = document.getElementById('newText');
    let itemsList = document.getElementById('items');

    let li = document.createElement('li');
    li.textContent = inputField.value;
    let link = document.createElement('a');
    link.textContent = '[Delete]';
    link.href = '#';
    li.appendChild(link);

    link.addEventListener('click',(e)=>{
        e.preventDefault();
        li.remove();
    });

    itemsList.appendChild(li);
    inputField.value = '';
};