function solve() {
   let input = document.getElementById('searchField');
   let button = document.getElementById('searchBtn');
   let tableBody = document.getElementsByTagName('tbody')[0];

   button.addEventListener('click',handleClick);

   function handleClick(e) {
      let text = input.value.toLowerCase();
      input.value = '';

      Array.from(tableBody.children).forEach(tr=>{

         if (tr.innerText.toLowerCase().includes(text)) {
            tr.classList.add('select');
         } else {
            tr.classList.remove('select');
         }
         
      });
   }
}