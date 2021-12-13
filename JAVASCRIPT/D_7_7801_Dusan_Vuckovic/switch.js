console.log('Switch');



//Prvi zadatak

//Za uneti redni broj dana ispisati koji je to dan u nedelji (1. dan je ponedeljak).

let dan = "5";

switch (dan) {
    case "1":
        console.log(`Danas je ponedeljak`);
        break;
    case "2":
        console.log(`Danas je utorak`);
        break;
    case "3":
        console.log(`Danas je sreda`);
        break;
    case "4":
        console.log(`Danas je cetvrtak`);
        break;
    case "5":
        console.log(`Danas je petak`);
        break;
    case "6":
        console.log(`Danas je subota`);
        break;
    case "7":
        console.log(`Danas je nedelja`);
        break;
    default:
        console.log(`Pogresan unos`)

}


//drugi zadatak

//Za unetu ocenu učenika (ceo broj od 1 do 5) ispisati njegov uspeh te školske godine (nedovoljan, …, odličan).

let ocena = 4;

switch (ocena) {
    case 1:
        console.log(`Ocena je neovoljan ${ocena}`);
        break;
    case 2:
        console.log(`Ocena je doovoljan ${ocena}`);
        break;
    case 3:
        console.log(`Ocena je dobar ${ocena}`);
        break;
    case 4:
        console.log(`Ocena je vrlodobar  ${ocena}`);
        break;
    case 5:
        console.log(`Ocena je odlican ${ocena}`);
        break;
    default:
        console.log(`Pogresan unos`);
}

//Treci zadatak

//Za uneti paran broj manji od 10 ispitati da li je uneti broj nula, dvojka, četvorka, šestica, osmica ili je unos pogrešan.

let broj3 = 4;

switch (broj3) {
    case 0:
        console.log(`Uneti broj je broj ${broj3}`);
        break;
    case 2:
        console.log(`Uneti broj je broj ${broj3}`);
        break;
    case 4:
        console.log(`Uneti broj je broj ${broj3}`);
        break;
    case 6:
        console.log(`Uneti broj je broj ${broj3}`);
        break;
    case 8:
        console.log(`Uneti broj je broj ${broj3}`);
        break;
    default:
        console.log(`Unos je pogresan`);

}


//Cetvrti zadatak 

//Za uneta dva broja i karakter napraviti kalkulator koji vrši množenje ta dva broja ukoliko je uneto slovo ’m’, deljenje ukoliko je uneto slovo ’d’, sabiranje ukoliko je uneto slovo ’s’ ili oduzimanje ukoliko je uneto slovo ’o’.

let br1 = 3;
let br2 = 4;
let operacija = "m";

switch (operacija) {
    case "m":
        console.log(br1 * br2);
        break;
    case "d":
        console.log(br1 / br2);
        break;
    case "s":
        console.log(br1 + br2);
        break;
    case "o":
        console.log(br1 - br2);
        break;
    default:
        console.log(`Pogresan unos, operaciju nije moguce izvrsiti`)
}

//Peti zadatak

//Za preuzeti dan sa računara ispisati još koliko dana je preostalo do vikenda.

let dan5 = new Date();
let danPC = dan5.getDay();


switch (danPC) {
    case 1:
        console.log(`Ostalo je jos 4 dana do vikenda`);
        break;
    case 2:
        console.log(`Ostalo je jos 3 dana do vikenda`);
        break;
    case 3:
        console.log(`Ostalo je jos 2 dana do vikenda`);
        break;
    case 4:
        console.log(`Ostalo je jos 1 dana do vikenda`);
        break;
    case 5:
        console.log(`Ostalo je jos 0 dana do vikenda`);
        break;
    default:
        console.log(`Vikend je`);

}

//Sesti zadatak

//Preuzeti redni broj meseca sa računara i ispisati koji je to mesec u godini.

let mesec = new Date();
let mesecPC = mesec.getMonth();

switch (mesecPC) {
    case 0:
        console.log(`Januar`);
        break;
    case 1:
        console.log(`Februar`);
        break;
    case 2:
        console.log(`Mart`);
        break;
    case 3:
        console.log(`April`);
        break;
    case 4:
        console.log(`Maj`);
        break;
    case 5:
        console.log(`Jun`);
        break;
    case 6:
        console.log(`Jul`);
        break;
    case 7:
        console.log(`Avgust`);
        break;
    case 8:
        console.log(`Septembar`);
        break;
    case 9:
        console.log(`Oktobar`);
        break;
    case 10:
        console.log(`Novembar`);
        break;
    case 11:
        console.log(`Decembar`);
        break;
    default:
        console.log(`Greska u proracunu`)
}

//Sedmi zadatak

//Preuzeti redni broj meseca sa računara i ispisati koliko taj mesec ima dana. Ukoliko je u pitanju mesec februar, preuzeti i godinu sa računara, ispitati da li je godina prestupna i na osnovu toga ispisati broj dana meseca februara.

let mesec7 = new Date();
let mesecSaPc = mesec7.getMonth();
// let mesecSaPc = 1;

let godina = new Date();
let godinaSaPc = godina.getFullYear();
// let godinaSaPc = 2020;

if (godinaSaPc % 4 == 0 && (godinaSaPc % 100 != 0 || godinaSaPc % 400 == 0)) {
    godinaSaPc = 13;
}


switch (mesecSaPc) {
    case 0:
    case 2:
    case 4:
    case 6:
    case 7:
    case 9:
    case 11:
        console.log(`Mesec ima 31 dan`);
        break;
    case 3:
    case 5:
    case 8:
    case 10:
        console.log(`Mesec ima 30 dana`);
        break;
    case 1:
        switch (godinaSaPc) {
            case 13:
                console.log(`Mesec ima 29 dana`);
                break;
            default:
                console.log(`Mesec ima 28 dana`);
        }
    default:
        console.log(`Greska u proracunu`);
}


//Osmi zadatak

//Na osnovu unete boje na engleskom jeziku obojiti tekst paragrafa u crveno, zeleno ili plavo. Ukoliko nije uneta ni jedna od ove tri boje, tekst paragrafa obojiti u žuto.


let boja = "red";

switch (boja) {
    case "red":
        document.body.innerHTML += `<p style='color:red;'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi eum, aspernatur obcaecati, ipsum non dolor sed deleniti dolore laboriosam molestias ab tempore impedit, accusantium quis earum odio sunt iusto vel minima vero. Debitis, perferendis quo.</p>`;
        break;
    case "blue":
        document.body.innerHTML += `<p style='color:blue'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi eum, aspernatur obcaecati, ipsum non dolor sed deleniti dolore laboriosam molestias ab tempore impedit, accusantium quis earum odio sunt iusto vel minima vero. Debitis, perferendis quo.</p>`;
        break;
    case "green":
        document.body.innerHTML += `<p style='color:green'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi eum, aspernatur obcaecati, ipsum non dolor sed deleniti dolore laboriosam molestias ab tempore impedit, accusantium quis earum odio sunt iusto vel minima vero. Debitis, perferendis quo.</p>`;
        break;
    default:
        document.body.innerHTML += `<p style='color:yellow'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi eum, aspernatur obcaecati, ipsum non dolor sed deleniti dolore laboriosam molestias ab tempore impedit, accusantium quis earum odio sunt iusto vel minima vero. Debitis, perferendis quo.</p>`;


}




