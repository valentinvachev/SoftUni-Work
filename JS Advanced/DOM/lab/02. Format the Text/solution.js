function solve() {  
  let getElement = document.getElementById('input');
  let output = document.getElementById('output');
  const arr = getElement.textContent.split('.').filter(e=>e!=='');

  let counter = 0;
  let innerArr = [];

  for (let i=0;i<=arr.length-1;i++) {
    innerArr.push(arr[i]);
    counter++;
    if (counter%3===0 || i===arr.length-1) {
      let newP = document.createElement('p');
      newP.textContent+=innerArr.join('.')+'.';
      output.appendChild(newP);
      innerArr = [];
    }  
  }
}