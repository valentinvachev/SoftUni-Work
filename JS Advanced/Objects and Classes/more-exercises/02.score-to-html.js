function createHTML(input) {

  

const html = [];

html.push('<table>\n<tr><th>name</th><th>score</th></tr>\n');



JSON.parse(input).forEach(element => {
        html.push(`<tr><td>${convert(element.name)}</td><td>${convert(element.score)}</td></tr>\n`);
    });

html.push('</table>');

console.log(html.join(''));

function convert(w) {
        let converter = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            '\'': '&#39;'
        };
        let arrayWords = (w+'').split('');
        for (let i=0;i<=arrayWords.length-1;i++) {
            if (converter.hasOwnProperty(arrayWords[i])) {
                arrayWords[i] = converter[arrayWords[i]];
            }
        }

        return arrayWords.join('');
    }
}



