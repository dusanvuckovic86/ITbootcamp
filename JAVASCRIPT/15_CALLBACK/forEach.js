let a = [2, -4, -8, 3, 8, 9];


//imenovane funkcije ali se retko koriste


// function ispis(element){
//     console.log(`Element niza je: ${element}.`)
// }

// a.forEach(ispis);



a.forEach(element => console.log(`Element niza je: ${element}.`))

//foreacs petlja ne postoji samostalno vec mora da se doda naziv niza ispred
//Prihvata callback funkciju


//odrediti zbir celobrojnog niza

let zbir = niz => {
    let suma = 0;
    niz.forEach(el => {
        suma += el;
    });
    return suma;
};

console.log(zbir(a))



let zbirParnih = niz => {
    let suma = 0;
    niz.forEach(el => {
        if (el % 2 == 0) {
            suma += el;
        }

    });
    return suma;
};

console.log(zbirParnih(a))



//zbir elemenata parnih indeksa
//el element niza moze da se nazove razlicito samo se menja svuda u kodu ali smisleno da objasnjavaju sta je iskorisceno u kodu

let zbirElParnihIndex = niz => {
    let suma = 0;
    niz.forEach((element, index) => {
        if (index % 2 == 0) {
            suma += element;
        }
    });
    return suma;
};

console.log(zbirElParnihIndex(a))


//treci zadatak

//Odrediti proizvod elemenata celobrojnog niza.


let niz3 = [1, 2, 3, 4];

let proizvodElem = niz => {
    let proizvod = 1;

    niz.forEach(element => {
        proizvod *= element;
    })
    return proizvod;

};
console.log(proizvodElem(niz3));



// cetvrti zadatak

//Odrediti srednju vrednost elemenata celobrojnog niza.

let niz4 = [1, 2, 3, 4];

let srVr = niz => {
    let suma = 0;
    let brojac = 0;
    niz.forEach(element => {
        suma += element;
        brojac++;
    });
    return suma / brojac;
}

console.log(srVr(niz4))


//peti zadatak

//Odrediti maksimalnu vrednost u celobrojnom nizu.

let niz5 = [1, 2, 3, 4, 8, 5];

let maksVrednost = niz => {
    let max = niz[0]; // radi i kad je samo 0
    niz.forEach(element => {
        if (max < element) {
            max = element;
        }

    });
    return max;
}
console.log(maksVrednost(niz5))



//sesti zadatak

//Odrediti minimalnu vrednost u celobrojnom nizu.

let niz6 = [1, 2,-6, 9, 3, 4];

let minVrednost = niz => {
    let min = niz[0];
    niz.forEach(element => {
        if (min > element) {
            min = element;
        }
    });
    return min;
}
console.log(minVrednost(niz6))


//sedmi zadatak

//Odrediti indeks maksimalnog elementa celobrojnog niza.

let niz7 = [1, 2,-6, 9, 3, 4];

let maxIndex = niz=>{
    let max = 0;
    let maxIndex = 0;

    niz.forEach((element, i)=>{
        if (max <element){
            max = element;
            maxIndex = i;
        }
    });
    return maxIndex
}

console.log(maxIndex(niz7))



// let indexMax = niz =>{
//     let max = 0;
//     let indexMaks = 0;
//     niz.forEach((element, index) => {          //moze da se upise (i) umesto index
//         if (element > max){
//             max = element;
//             indexMaks = index;
//         }
//     })
//     return indexMaks;
// }
// console.log(indexMax(niz7))



// Osmi zadatak

//Odrediti indeks minimalnog elementa celobrojnog niza.

let temperatura = [1, 2,0,0,2,1,2,0,2,2];



let indexMax = niz => {
    let max = niz[0];
    let imax = 0;
    niz.forEach((el, i) => {
        if(el > max) {
            max = el;
            imax = i;
        }
    });
    return imax;
}

console.log(indexMax(a));

function maxEl(niz) {
    let max = niz[0];
    for(let i = 1; i < niz.length; i++) {
        if(niz[i] > max) {
            max = niz[i];
        }
    }
    return max;
}

function minEl(niz) {
    let min = niz[0];
    for(let i = 1; i < niz.length; i++) {
        if(niz[i] < min) {
            min = niz[i];
        }
    }
    return min;
}

let indexSvojstvo = (niz, svojstvo) => {
    let s = svojstvo(niz);
    let index;
    niz.forEach((el, i) => {
        if(el == s) {
            index = i;
        }
    });
    return index;
}

console.log(indexSvojstvo(a, maxEl));
console.log(indexSvojstvo(a, minEl));











// function maksEl (niz){
//     let maks = niz[0];
    
//     for (let i = 1; i < niz.length; i++) {
//         if (niz[i] > maks) {
//             maks = niz[i];
//         }
//         return maks
//     }

// }
// function minEl (niz){
//     let min = niz[0];
    
//     for (let i = 1; i < niz.length; i++) {
//         if (niz[i] < min) {
//             min = niz[i];
//         }
//         return min;
//     }

// }

// let indexMaxCallback = niz => {
//     let max = maxEl(niz);
//     let indexmax;
//     niz.forEach((element, i)=>{
//         if(element == max){
//             indexmax=i;
//         }
//     });
//     return indexmax;
// }

// let indexMinCallback = niz => {
//     let min = minEl(niz);
//     let indexmin;
//     niz.forEach((element, i)=>{
//         if(element == min){
//             indexmin=i;
//         }
//     });
//     return indexmin;
// }

// let indexSvojstvo