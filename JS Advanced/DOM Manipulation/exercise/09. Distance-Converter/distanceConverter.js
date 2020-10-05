function attachEventsListeners() {
    let input = document.getElementById("inputDistance");
    let btnConvert = document.getElementById('convert');
    let inputValue = document.getElementById("inputUnits");
    let outputValue = document.getElementById("outputUnits");
    let output = document.getElementById("outputDistance");


    let converted = {
        km: (n) => n*1000,
        m: (n) => n,
        cm: (n) => n*0.01,
        mm: (n) => n*0.001,
        mi: (n) => n*1609.34,
        yrd: (n) => n*0.9144,
        ft: (n) => n*0.3048,
        in: (n) => n*0.0254,
    };

    let parser = {
        km: (n) => n/1000,
        m: (n) => n,
        cm: (n) => n/0.01,
        mm: (n) => n/0.001,
        mi: (n) => n/1609.34,
        yrd: (n) => n/0.9144,
        ft: (n) => n/0.3048,
        in: (n) => n/0.0254,
    };

    btnConvert.addEventListener('click',handleClick);

    function handleClick(e) {
        let metersInput = converted[inputValue.value](Number(input.value));
        let metersOutput = parser[outputValue.value](metersInput);
        output.removeAttribute('disabled');
        output.value = metersOutput;
    }
}