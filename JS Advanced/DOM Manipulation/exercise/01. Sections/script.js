function create(words) {
   let content = document.getElementById('content');

   let fragment = document.createDocumentFragment();

   words.forEach(element => {
      let div = document.createElement('div');
      let p = document.createElement('p');
      p.style.display = 'none';
      p.textContent = element;
      div.appendChild(p);
      fragment.appendChild(div);

      div.addEventListener('click',()=>{
         p.style.display = 'block';
      });
   });

   content.appendChild(fragment);
}