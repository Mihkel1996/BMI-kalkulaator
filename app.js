
function calc(){

    var Vanus = document.getElementById("Sisestavanus").value;
    console.log(Vanus)
    var Kaal = document.getElementById("Sisestakaal").value;
    var Kõrgus = document.getElementById("Sisestakorgus").value;
    var BMI = Kaal / (Kõrgus * 2);

    if (Vanus > 20 && Vanus <= 65 ) {

        if (BMI < 16) 
            alert(`Sinu BMI on ${BMI}. Olete ohtlikult alakaaluline.`);
        if (BMI >= 16 && BMI < 18.5) 
            alert(`Sinu BMI on ${BMI}. Olete alakaaluline.`);
        if (BMI >= 18.5 && BMI < 25.1) 
            alert(`Sinu BMI on ${BMI}. Teie kaal on normaalne.`);
        if (BMI >= 25.1 && BMI < 30.1) 
            alert(`Sinu BMI on ${BMI}. Olete ülekaaluline.`);
        if (BMI >= 30 && BMI < 35.1)
            alert(`Sinu BMI on ${BMI}. Olete rasvunud.`);
        if (BMI >= 35.1 && BMI <= 40.1)
            alert(`Sinu BMI on ${BMI}. Olete tugevalt rasvunud.`);
        if (BMI > 40.1)
            alert(`Sinu BMI on ${BMI}. Olete eluohtlikult rasvunud.`)
    } 
    else
        alert(`Vabandust, aga selle kalkulaatori kasutamiseks pead olema 20-65 aastat vana. Kalkulaator annab vaid selles vanusevahemikus õige tulemuse.`)
}