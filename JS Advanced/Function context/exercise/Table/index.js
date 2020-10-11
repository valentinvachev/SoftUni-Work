function solve(){
   let tbody = document.getElementsByTagName('tbody')[0];

   tbody.addEventListener('click',(e)=>{
      if (e.target.nodeName === 'TD') {
         if (e.target.parentNode.hasAttribute('style')) {
            e.target.parentNode.removeAttribute('style');
         } else {
            Array.from(tbody.children).forEach(e=>{
               e.removeAttribute('style');
            });
            e.target.parentNode.style.backgroundColor = '#413f5e';
         }
      }
   });
}
