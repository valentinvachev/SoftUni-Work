function convertToJSON(input) {

    let forJSON = [];

    input.slice(1).forEach(element => {
     forJSON.push(element.split("|").filter(e=>e.trim()!=="").reduce((acc,curr,index)=>{
        if (index===0) {
            acc.Town = curr.trim();
        } else if (index===1) {
            acc.Latitude = Number(Number(curr.trim()).toFixed(2));
        } else {
            acc.Longitude = Number(Number(curr.trim()).toFixed(2));
        }
        return acc;
      },{}));
  });


  return JSON.stringify(forJSON);
}






