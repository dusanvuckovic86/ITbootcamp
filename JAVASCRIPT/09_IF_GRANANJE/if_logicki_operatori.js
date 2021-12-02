console.log(`Logicki operatori`);


// prioritet
//negacija
//and
//or
// if(!true && true)-> false
//if(!true && true || false)-> false && true || false-> false || false-> false


let pol = "m";
let god = 27;

if (pol == "m" && god >= 18 ){
    console.log(`Osoba je muskog pola i punoletna je`);
}
else if (pol == "m" && god < 18 && god>=0) {
    console.log(`Osoba je muskog pola i maloletna je`);
}
else if (pol == "z" && god>= 18){
    console.log(`Osoba je zenskog pola i punoletna je`);
}
else if (pol == "z" && god < 18 && god>=0){
    console.log(`Osoba je zenskog pola i maloletna je`);
}
else {
console.log(`Pogresan unos`);
}




pol = "m";

if (pol=="z" || pol=="Z" || pol == "ž" || pol == "Ž"){
    document.body.innerHTML =`<img src="asets/z.jpg">`;
}
else if (pol=="m" || pol=="M"){
    document.body.innerHTML =`<img src="asets/m.jpg">`;
}
else {
    document.body.innerHTML =`<p> Pogresan unos</p>`;
}


//////////////

pol = "m";
god = 15;

if ((pol=="z" || pol=="Z" || pol == "ž" || pol == "Ž") && god>=18){
    console.log("Osoba je zenskog pola i punoletna je");
}
else if ((pol=="z" || pol=="Z" || pol == "ž" || pol == "Ž") && god < 18 && god >= 0){
    console.log("Osoba je zenskog pola i maloletna je");
}
else if ((pol=="m" || pol=="M") && god>=18){
    console.log (`Osoba je muskog pola i punoletna je`);
}
else if ((pol=="m" || pol=="M") && god<18 && god>=0){
    console.log (`Osoba je muskog pola i maloletna je`);
}
else {
    console.log(`Pogresan unos`);
}