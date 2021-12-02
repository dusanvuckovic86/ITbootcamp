console.log("if else if radi")


let ocena = 4;
if (ocena == 5){
    console.log("Odlican 5");
}
else if (ocena == 4){
    console.log("Vrlodobar 4");
}
else if (ocena == 3){
    console.log("Dobar 3");
}
else if (ocena == 2){
    console.log("Dovoljan 2");
}
else if (ocena == 1){
    console.log("Nedovoljan 1");
}
else {
    console.log("Pogresan unos");
}

console.log("Kod ispod if else if");


/////////////////////////////

//zadatak 7
let poeni = 50 ;

if ( poeni > 50){
    console.log("Ocena 6");
}
else if (poeni > 60){
    console.log("Ocena 7");
}
else if (poeni > 70){
    console.log("Ocena 8");
}
else if (poeni > 80){
    console.log("Ocena 9");
}
else if (poeni > 90){
    console.log("Ocena 10");
}
else {
    console.log("Ucenik nije polozio ispit");
}

//zadatak 8

let danUNedelji = new Date();

let danSaPc = danUNedelji.getDay();
console.log(danSaPc);

if ( danSaPc == 0){
    console.log("Vikend");
}
if (danSaPc == 1){
    console.log("Radni dan");
}
else if (danSaPc == 2){
    console.log("Radni dan");
}
else if ( danSaPc == 3){
    console.log("Radni dan");
}
else if ( danSaPc == 4){
    console.log("Radni dan");
}
else if ( danSaPc == 5){
    console.log("Radni dan");
}
else if ( danSaPc == 6){
    console.log("Vikend");
}
else {
    console.log("Morate uneti vrednost od 0 (za nedelju) do 6(za subotu)")
}




//zadatak 9
let vreme = new Date ();
let vremeRacunar = vreme.getHours();
console.log(vremeRacunar);
if (vremeRacunar < 12){
    console.log("Dobro jutro");
}
else if (vremeRacunar < 18){
    console.log("Dobar dan");
}
else {
    console.log ("Dobro vece")
}

//zadatak 10

// let d1 = 15;
// let m1 = 7;
// let g1 = 1956;

// let di = 17;
// let m1 = 8;
// let g1 = 1956;




//zadatak 11
let vreme11 = new Date();
let vremePC = vreme11.getHours();
console.log(vremePC);
if (vremePC < 9){
    console.log("Ne radi");
}
else if (vremePC >= 17){
    console.log("Ne radi");
}
else {
    console.log("Radi");
}

//zadatak 12

// zadatak 13
// 4/2=2 cela 0 ostatak
//5/2=2 cela 1 ostatak
let k = 19;
if (k%2==0){
    console.log(`Broj ${k} je paran`)

}
else {
    console.log(`Broj ${k} je neparan`)
}


// zadatak 14
// nesto / nula je beskonacno
// nula / nesto je nula
if (k%3!=0){
    console.log(`Broj ${k} nije deljiv brojem 3`);
}
else{
    console.log(`Broj ${k} je deljiv sa brojem 3`);
}

//zadatak 15


//zadatak 16

//zadatak 17

let br1 = 5;
let br2 = 8;
let br3 = 17;

//najveci

let maks = br1;
if (maks< br2){
    maks = br2
}
if(maks < br3){
    maks = br3
}
console.log(`najveci broj je ${maks}`);

//najmanji

let min = br1;
if (min > br2)
{
    min = br2
}
if (min> br3)
{
    min = br3
}
console.log(`najmanji broj je ${min}`);

//srednji (SAMO KAD IMAMO TRI BROJA)
let srednji = br1 + br2 + br3 - maks - min;
console.log(`Srednji broj je ${srednji}`);



//zadatak 18

let s = 15.3;
console.log(s%1);
if(s%1 == 0){
    console.log(`Broj ${s} je ceo broj`)
}
else {
    console.log(`Broj ${s} nije ceo broj`)
}

//drugi nacin





