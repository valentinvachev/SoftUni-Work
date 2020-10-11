function solve() {
    let btnChoose = document.getElementById("dropdown");
    let menuDropDown = document.getElementById("dropdown-ul");
    let box = document.getElementById("box");

    btnChoose.addEventListener('click',(e)=>{
        if (menuDropDown.hasAttribute("style") && menuDropDown.style.display !== 'none') {
            menuDropDown.style.display = 'none';
            box.style.backgroundColor = 'black';
            box.style.color = 'white';
        } else {
            menuDropDown.style.display = 'block';
        }
    });

    menuDropDown.addEventListener('click',paintBox);

    function paintBox(e) {
        if (e.target.localName === 'li') {
            box.style.backgroundColor = e.target.textContent;
            box.style.color = 'black';
        }
    }
}