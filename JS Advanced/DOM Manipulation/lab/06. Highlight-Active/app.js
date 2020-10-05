function focus() {
    let mainDiv = document.getElementsByTagName('div')[0];

    mainDiv.addEventListener('focus',(e)=>{
        if (e.target.localName === 'input') {
            e.target.parentNode.classList.add('focused');
        }
    });

    mainDiv.addEventListener('blur',(e)=>{
        if (e.target.localName === 'input') {
            e.target.parentNode.classList.remove('focused');
        }
    });
}