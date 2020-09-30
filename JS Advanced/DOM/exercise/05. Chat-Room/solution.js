function solve() {
   const elements = {
      button: document.getElementById('send'),
      messageBox: document.getElementById('chat_messages'),
      myMessage: document.getElementById('chat_input')
   };

   elements.button.addEventListener('click',sendMessage);

   function sendMessage(e) { 
     let message = elements.myMessage.value; 
     let div = document.createElement('div');
     div.classList.add('message','my-message');
     div.textContent = message;

     elements.messageBox.appendChild(div);
     elements.myMessage.value = '';
   }
}


