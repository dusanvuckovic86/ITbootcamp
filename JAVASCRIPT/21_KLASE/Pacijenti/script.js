import Pacijent from "./pacijent.js";


let p1 = new Pacijent("Petar Peric", 1.90, 95);
let p2 = new Pacijent("Marija Maric", 1.70, 60);
let p3 = new Pacijent("Jovan Jovic", 2.10, 105);
let p4 = new Pacijent("Ana Antic", 1.60, 45);

let bmi = p1.bmi()
console.log(bmi)

let kritican = p1.kritican()
console.log(kritican)



let nizPacijenti = [p1, p2, p3, p4];




let tabelaHtml = document.getElementById("tabela")


let tabela = document.createElement("table");
tabela.style.border = "1px solid black"

let redovi1 = document.createElement("tr")
let heder1 = document.createElement("th")
heder1.style.border = "1px solid black"
heder1.style.padding = "10px"
heder1.innerText = `Ime`

let heder2 = document.createElement("th")
heder2.style.border = "1px solid black"
heder2.style.padding = "10px"
heder2.innerText = `Visina`

let heder3 = document.createElement("th")
heder3.style.border = "1px solid black"
heder3.style.padding = "10px"
heder3.innerText = `Tezina`

let heder4 = document.createElement("th")
heder4.style.border = "1px solid black"
heder4.style.padding = "10px"
heder4.innerText = `Kritican BMI`


redovi1.appendChild(heder1);
redovi1.appendChild(heder2);
redovi1.appendChild(heder3);
redovi1.appendChild(heder4);
tabela.appendChild(redovi1)

nizPacijenti.forEach(pacijent => {

    let redovi = document.createElement("tr")

    let kolone1 = document.createElement("td")
    kolone1.innerText = `${pacijent.ime}`;
    kolone1.style.border = "1px solid black"
    kolone1.style.padding = "10px"

    let kolone2 = document.createElement("td")
    kolone2.innerText = `${pacijent.visina}`;
    kolone2.style.border = "1px solid black"
    kolone2.style.padding = "10px"

    let kolone3 = document.createElement("td")
    kolone3.innerText = `${pacijent.tezina}`;
    kolone3.style.border = "1px solid black"
    kolone3.style.padding = "10px"

    let kolone4 = document.createElement("td")
    kolone4.innerText = `${pacijent.kritican()}`;
    kolone4.style.border = "1px solid black"
    kolone4.style.padding = "10px"

    redovi.appendChild(kolone1)
    redovi.appendChild(kolone2)
    redovi.appendChild(kolone3)
    redovi.appendChild(kolone4)
    tabela.appendChild(redovi)


})
tabelaHtml.appendChild(tabela)






















let tabelica =
    `<table border="1">
<tr>
<th>Ime pacijenta</th>
<th>Visina</th>
<th>Tezina</th>
<th>Kritican BMI</th>
</tr>`;

nizPacijenti.forEach(pacijent => {
    tabelica +=
        `<tr>
    <td>${pacijent.ime}</td>
    <td>${pacijent.visina}</td>
    <td>${pacijent.tezina}</td>
    <td>${pacijent.kritican()}</td>
    </tr>`;
})

tabelica += `</table>`;
tabelaHtml.innerHTML += tabelica;









//Ispisati podatke o pacijentu sa najmanjom težinom.

let btnMinTez = document.getElementById("minTez");
let spanMinTezRez = document.getElementById("minTezRez");
btnMinTez.addEventListener("click", () => {
    let min = nizPacijenti[0]; //poziva geter za tezinu, min ovde cuva sve podatke o pacijentu
    nizPacijenti.forEach(p => {
        if (min.tezina > p.tezina) {// min.tezina uzima tezinu(visinu, ime) pacijenta sa indeksom iz pretpostavke let min = nizPacijenti[0]
            min = p
        }
    });

    spanMinTezRez.innerHTML = min.stampajListu();

    //console.log(min)
    //min.stampaj() // drugi nacin posto je to metoda
})


//Ispisati podatke o pacijentu sa najvećim bmi vrednošću.


let btnMaxBmi = document.querySelector("#maxBmi")
let maxBmiRez = document.querySelector("#maxBmiRez")

// btnMaxBmi.addEventListener("click", () => {


//     let maxBMI = nizPacijenti[0]; // pretpostavka da prvi pacijent ima maksimalni bmi
//     for (let i = 1; i < nizPacijenti.length; i++) {
//         if (maxBMI.bmi() < nizPacijenti[i].bmi()) {
//             maxBMI = nizPacijenti[i];

//         }

//     }
//     maxBmiRez.innerHTML = maxBMI.stampajListu()


// });

btnMaxBmi.addEventListener("click", () => {
    console.log("test")
})


