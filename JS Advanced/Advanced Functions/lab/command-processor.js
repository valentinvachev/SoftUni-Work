function solution() {
    let text = '';

    function append(string) {
        text+=string;
    }
    function removeStart(n) {
       text = text.split('').splice(n).join('');
    }

    function removeEnd(n) {
      text = text.split('').slice(0,text.length-n).join('');

    }

    function print() {
        console.log(text);
    }

    return {
        append: append,
        removeStart: removeStart,
        removeEnd: removeEnd,
        print: print
    };
}