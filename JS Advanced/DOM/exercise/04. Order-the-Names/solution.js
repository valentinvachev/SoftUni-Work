function solve() {

    let button = document.getElementsByTagName('button')[0];
    button.addEventListener('click',()=>{
        let name = document.getElementsByTagName('input')[0].value;
        
        if (name.trim()!=='') {
            let numOfLi = name.toUpperCase().charCodeAt(0)-65;
            let li = document.querySelectorAll('ol li')[`${numOfLi}`];
            let nameToAdd = name.charAt(0).toUpperCase()+name.substring(1).toLowerCase();
            if (li.textContent !== '') {
                li.textContent += ', '+nameToAdd;
            } else {
                li.textContent += nameToAdd;
            }
            
            
        }
    });
}