function deleteByEmail() {
    let inputField = document.getElementsByTagName('input')[0];
    let result = document.getElementById('result');

    let tableRows = Array.from(document.getElementsByTagName('tr'));

    let isFound = false;

        tableRows.forEach(tr=>{
            if (tr.children[1].textContent.localeCompare(inputField.value)===0) {
                tr.remove();
                isFound = true;
            }
        });

        inputField.value = '';

        if(!isFound) {
            result.textContent = 'Not found.';           
        } else {
            result.textContent = '';
        }
};