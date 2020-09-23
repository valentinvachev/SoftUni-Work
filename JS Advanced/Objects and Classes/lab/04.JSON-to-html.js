function convertJSONtoHTML(input) {

    let converter = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "\"": "&quot;",
        "\'": "&#39;"
    };

 return   JSON.parse(input).reduce((acc,curr,index,array)=>{
        if (!index) {
        acc.push("<table>\n<tr>");
        Object.keys(curr).forEach(k=>{
            acc.push(`<th>${k}</th>`);
        });   
        acc.push(`</tr>\n`);
        }
        acc.push("<tr>");
        Object.values(curr).forEach(v=>{
            acc.push(`<td>${stringConverter(v)}</td>`);
        }); 
        acc.push("</tr>\n");
        if (index===array.length-1) {
            acc.push("</table>");
        }
        return acc;
    },[]).join("");


    function stringConverter(w) {
        let arr = (w+"").split("");
        for (let i=0;i<=w.length-1;i++) {
            if (converter.hasOwnProperty(arr[i])) {
              arr[i] = converter[arr[i]];
            }
        }
        return arr.join("");
    }
}


