// function ispisKonzola (niz){
//     let rezultat = "";
//     for(let i = 0; i<niz.length; i++){
//         rezultat += niz[i]+ " ";
//     }
//     console.log(rezultat)
// }



// function ispisHTML (niz){
//     let rezultat = "";
//     for(let i = 0; i<niz.length; i++){
//         rezultat += niz[i]+ " ";
//     }
//     document.body.innerHTML += `<div>${rezultat}</div>`;
// }


// let brojevi =[1,2,3,4,5]
// ispisKonzola(brojevi)
// ispisHTML(brojevi)



///Preko imenovanih funkcija

function ispisKonzola(poruka) {
    console.log(poruka)
}
function ispisStranica(poruka) {
    document.body.innerHTML += `<div>${poruka}</div>`;
}
function ispisNiza(niz, callback) {
    let rezultat = "";
    for (let i = 0; i < niz.length; i++) {
        rezultat += niz[i] + " ";
    }
    callback(rezultat);
}
let brojevi = [1, 2, 3, 4, 5]

ispisNiza(brojevi, ispisKonzola);
ispisNiza(brojevi, ispisStranica);



//isti zadatak samo pozivamo anonimne funkcije

ispisNiza(brojevi, function (poruka) {
    console.log(poruka);
});


ispisNiza(brojevi, function (poruka) {
    document.body.innerHTML += `<div>${poruka}</div>`;
});

//isti zadatak samo pozivamo arow funkcije

ispisNiza(brojevi, poruka => { console.log(poruka) });
ispisNiza(brojevi, poruka => { document.body.innerHTML += `<div>${poruka}</div>`; })


// oderediti broj maksimalnih elemenata i minimalnih elemenata u nizu

let temperatura = [1, 2,0,0,2,1,2,0,2,2];

function maksEl (niz){
    let maks = niz[0];
    
    for (let i = 1; i < niz.length; i++) {
        if (niz[i] > maks) {
            maks = niz[i];
        }
        return maks
    }

}
function minEl (niz){
    let min = niz[0];
    
    for (let i = 1; i < niz.length; i++) {
        if (niz[i] < min) {
            min = niz[i];
        }
        return min;
    }

}



///svojstvo je callback funkcija , stavlamo ga kao parametar ali se to ne izvrsava dok ne pozovemo funkciju


function brSvojstvoNiz(niz,svojstvo) {
    let s = svojstvo(niz);
    let brojac = 0;
   
    for (let i = 0; i < niz.length; i++) {
        if (niz[i] == s) {
            brojac++;
        }
    }
    return brojac;
}









///////////////////////

function brMin(niz) {
    let min = niz[0];
    let brojac = 0;
    for (let i = 1; i < niz.length; i++) {
        if (niz[i] < min) {
            min = niz[i];
        }
    }
    for (let i = 0; i < niz.length; i++) {
        if (niz[i] == min) {
            brojac++;
        }
    }
    return brojac;
}