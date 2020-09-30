function solve() {

   let buttonArray = Array.from(document.getElementsByClassName('add-product'));
   let textArea = document.getElementsByTagName("textarea")[0];
   let buttonCheckOut = document.getElementsByClassName("checkout")[0];
   let checkoutList = document.getElementsByClassName("checkout-list")[0];

   let cart = new Set();
   let totalAmountCart = 0;


   buttonArray.forEach(element => {
        element.addEventListener('click',addProduct);
   });


   buttonCheckOut.addEventListener('click',finalizeCart);

   function finalizeCart(e) {
      textArea.textContent += `You bought ${Array.from(cart).join(', ')} for ${totalAmountCart.toFixed(2)}.`;
      Array.from(document.getElementsByTagName('button')).forEach(b=>{
         b.disabled = true;
      });
   }

   
        
        function addProduct(e) {
          let currentDiv = e.target.parentNode;
          let nameProduct = currentDiv.previousElementSibling.childNodes[1].textContent;
          let priceProduct = currentDiv.nextElementSibling.textContent;
          let li = document.createElement("li");
          li.textContent = `Added ${nameProduct} for ${priceProduct} to the cart.\n`;
          let button = document.createElement("button");
          button.classList.add("remove-product");
          li.appendChild(button);
          checkoutList.appendChild(li);
            

          textArea.textContent += `Added ${nameProduct} for ${priceProduct} to the cart.\n`;

          totalAmountCart+=Number(priceProduct);
          cart.add(nameProduct);  
        }
}