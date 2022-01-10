//3. Izmeniti objekte u prethodnom zadatku tako da svaki objekat sadrži i polje plate koje je niz neto plata koje je svaka osoba zaradila u poslednjih 5 godina.
// Napisati funkciju koja ispisuje podatke o osobi koja ima najveću razliku između svoje minimalne i maksimalne plate.


let visine = [
    { ime: "Pera", visina: 189, pol: "M", plate: [30000, 50000, 50000, 50000, 500000],
    razlikaPlata: function () {
        let razlika;
        for (let i = 0; i < this.plate.length; i++) {
            razlika = this.plate[this.plate.length - 1] - this.plate[0]
        }
        return razlika
    }},
    { ime: "Laza", visina: 192, pol: "M", plate: [20000, 50000, 50000, 50000, 500000], 
    razlikaPlata: function () {
        let razlika;
        for (let i = 0; i < this.plate.length; i++) {
            razlika = this.plate[this.plate.length - 1] - this.plate[0]
        }
        return razlika
    } },
    { ime: "Milka", visina: 164, pol: "Z", plate: [15000, 50000, 50000, 50000, 500000],
    razlikaPlata: function () {
        let razlika;
        for (let i = 0; i < this.plate.length; i++) {
            razlika = this.plate[this.plate.length - 1] - this.plate[0]
        }
        return razlika
    } },
    { ime: "Mika", visina: 176, pol: "M", plate: [55000, 50000, 50000, 50000, 500000],

    razlikaPlata: function () {
        let razlika;
        for (let i = 0; i < this.plate.length; i++) {
            razlika = this.plate[this.plate.length - 1] - this.plate[0]
        }
        return razlika
    }

},
    { ime: "Sonja", visina: 178, pol: "Z", plate: [55000, 50000, 50000, 50000, 500000], 

    razlikaPlata: function () {
        let razlika;
        for (let i = 0; i < this.plate.length; i++) {
            razlika = this.plate[this.plate.length - 1] - this.plate[0]
        }
        return razlika
    }

},
    {
        ime: "Milica", visina: 166, pol: "Z", plate: [55000, 50000, 50000, 50000, 500000],
        razlikaPlata: function () {
            let razlika;
            for (let i = 0; i < this.plate.length; i++) {
                razlika = this.plate[this.plate.length - 1] - this.plate[0]
            }
            return razlika
        }
    },


];


let plate = arr => {
let max = arr[0].razlikaPlata()
for(let i =0; i< arr.length; i++){
    if (max < arr[i].razlikaPlata(arr)){
        max = arr[i].razlikaPlata(arr)
    }
}
console.log( arr.ime, )
}

plate(visine)