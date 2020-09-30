function toggle() {
   let button = document.getElementsByClassName('button')[0];
   let div =  document.getElementById("extra");
   
   if (div.style.display === "none" || !div.hasAttribute("style") ) {
    button.textContent = "Less";
    div.style.display = "block";
   } else {
     button.textContent = "More";
     div.style.display = "none";  
   }
}