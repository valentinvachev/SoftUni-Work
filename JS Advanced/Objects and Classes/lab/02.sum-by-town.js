function totalSumOfTowns(input) {
    let data = {};

    for (let i=0;i<=input.length-2;i+=2) {
        data.hasOwnProperty(input[i]) ? data[input[i]] += Number(input[i+1]) : data[input[i]] = Number(input[i+1]);
        }

  console.log(JSON.stringify(data));

}


totalSumOfTowns(['Sofia','20','Varna','3','Sofia','5','Varna','4']);