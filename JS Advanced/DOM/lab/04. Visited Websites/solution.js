function solve() {
  let links = Array.from(document.getElementsByTagName('a'));
  
  links.forEach(l=>{
    l.addEventListener('click',()=>{
      let pCount = l.nextElementSibling;
      pCount.textContent = pCount.textContent.split(' ').map((e,index)=>{
        if (index===1) {
          e  = Number(e)+1;
          return e;
        } else {
          return e;
        }
      }).join(' ');
    });
  });
}