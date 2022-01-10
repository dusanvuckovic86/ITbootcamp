let dan1 = {
    datum: "2021/06/25",
    kisa: true,
    oblacno: false,
    sunce: false,
    temperature: [2, 5, 6, 7, 8, 5, 7, 4],

    sumaT: function () {
        let suma = 0;
        for (let i = 0; i < this.temperature.length; i++) {
            suma += this.temperature[i]
        }
        return suma
    },
    srednjaT: function () {
        let suma = 0;

        for (let i = 0; i < this.temperature.length; i++) {
            suma = this.sumaT
        }
        return suma / this.temperature.length
    }

}

let dan2 = {
    datum: "2021/07/25",
    kisa: true,
    oblacno: false,
    sunce: false,
    temperature: [20, 25, 30],
    sumaT: function () {
        let suma = 0;
        for (let i = 0; i < this.temperature.length; i++) {
            suma += this.temperature[i]
        }
        return suma
    },
    srednjaT: function () {
        let suma = 0;

        for (let i = 0; i < this.temperature.length; i++) {
            suma = this.sumaT()
        }
        return suma / this.temperature.length
    }

}




let dan3 = {
    datum: "2021/08/25",
    kisa: false,
    oblacno: true,
    sunce: false,
    temperature: [7, 8, 7, 5, 6, 9],
    sumaT: function () {
        let suma = 0;
        for (let i = 0; i < this.temperature.length; i++) {
            suma += this.temperature[i]
        }
        return suma
    },
    srednjaT: function () {
        let suma = 0;

        for (let i = 0; i < this.temperature.length; i++) {
            suma = this.sumaT
        }
        return suma / this.temperature.length
    }
}
let dan4 = {
    datum: "2021/09/25",
    kisa: false,
    oblacno: false,
    sunce: true,
    temperature: [2, 5, 6, 7, 8, 5, 7, 4],
    sumaT: function () {
        let suma = 0;
        for (let i = 0; i < this.temperature.length; i++) {
            suma += this.temperature[i]
        }
        return suma
    },
    srednjaT: function () {
        let suma = 0;

        for (let i = 0; i < this.temperature.length; i++) {
            suma = this.sumaT
        }
        return suma / this.temperature.length
    }

}

let nizDana = [dan1, dan2, dan3, dan4];


/// Napraviti arrow funksiju koja ispisuje datum u kome je najviše puta izmerena temperatura. Ukoliko ima više takvih datuma:
// Ispisati prvi od njih
// Ispisati poslednji od njih

let max = arr => {
    let maks = arr[0].temperature.length
    arr.forEach(element => {
        if (maks < element.length) {
            maks = element.length
        }
    })
    return maks
}
console.log(max(nizDana))

let datumNjviseMerenja = arr => {
    let niz = [];
    arr.forEach(element => {
        if (max(arr) == element.temperature.length) {
            niz.push(element)

        }
    })

    console.log(`prvi datum sa najvise merenja je ${niz[0].datum}`)
    console.log(`poslednji datum sa najvise merenja je ${niz[niz.length - 1].datum}`)
}

datumNjviseMerenja(nizDana)


//Napraviti arrow funksiju koja prebrojava i ispisuje koliko je bilo kišnih dana, koliko je bilo sunčanih dana i koliko je bilo oblačnih dana


let kSo = (arr) => {
    let brojac1 = 0;
    let brojac2 = 0;
    let brojac3 = 0;
    arr.forEach(element => {
        if (element.kisa == true) {
            brojac1++
        }
        if (element.oblacno == true) {
            brojac2++
        }
        if (element.sunce == true) {
            brojac3++
        }

    })
    console.log(`Kisovito je bilo ${brojac1} dana, oblacno ${brojac2} dana, suncano ${brojac3} dana`)
}

kSo(nizDana)


//Napraviti arrow funkciju koja računa i vraća koliko je bilo dana sa natprosečnom temperaturom

let arSr = arr => {
    let suma = 0;
    let brojac = 0;

    arr.forEach(element => {
        suma += element.sumaT();
        brojac += element.temperature.length
    })
    return suma / brojac
}
console.log(arSr(nizDana))

let temperaturaNatprosecno = arr => {
    let brojac = 0;
    arr.forEach(element => {
        if (arSr(arr) < element.srednjaT()) {
            brojac++
        }
    })
    return brojac
}

console.log(temperaturaNatprosecno(nizDana))




let visine = [
    { ime: "Pera", visina: 165, pol: "M" },
    { ime: "Laza", visina: 192, pol: "M" },
    { ime: "Milka", visina: 164, pol: "Z" },
    { ime: "Mika", visina: 205, pol: "M" },
    { ime: "Sonja", visina: 178, pol: "Z" },
    { ime: "Milica", visina: 169, pol: "Z" }
];

// Nadji najviseg i da je muskog pola

let najvisi = (arr, pol) => {
    let maks = arr[0].visina;
    let niz = [];
    arr.forEach(element => {
        if (maks < element.visina && element.pol == pol) {
            niz.push(element) // sve muskarce ubacuje u novi niz, poslednji u nizu je najvisi
            maks = element.visina;
            
        }
        
       
    }) 
    console.log(niz[niz.length -1].ime)
}
najvisi(visine, "M")

