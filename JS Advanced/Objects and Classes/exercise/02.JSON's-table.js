function JSONToHTML(input=[]) {
    const htmlArray = [];

    htmlArray.push("<table>");

    for (const innerArray of input) {
        const object = JSON.parse(innerArray);

        htmlArray.push(' <tr>');

        for (let value of Object.values(object)) {
            htmlArray.push('  <td>'+value+'</td>');
        }
        
        htmlArray.push(' </tr>');
    }

    htmlArray.push("</table>");
    htmlArray.forEach(e=>console.log(e));
}