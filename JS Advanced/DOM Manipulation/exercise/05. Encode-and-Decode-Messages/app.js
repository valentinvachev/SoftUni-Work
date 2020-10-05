function encodeAndDecodeMessages() {
    let textAreaToEncode = document.getElementsByTagName('textarea')[0];
    let textAreaToDecode = document.getElementsByTagName('textarea')[1];

    document.getElementsByTagName('button')[0].addEventListener('click', encode);
    document.getElementsByTagName('button')[1].addEventListener('click', decode);
    
    
    function encode() {
        let text = textAreaToEncode.value;
        let newText = '';
        for (let i = 0; i <= text.length - 1; i++) {
            newText += String.fromCharCode(text.charCodeAt(i)+1);
        }

        textAreaToEncode.value = '';
        textAreaToDecode.value = newText;
    }

    function decode() {
        let text = textAreaToDecode.value;

        let newText = '';
        for (let i = 0; i <= text.length - 1; i++) {
            newText += String.fromCharCode(text.charCodeAt(i)-1);
        }
        textAreaToDecode.value = newText;
    }

}