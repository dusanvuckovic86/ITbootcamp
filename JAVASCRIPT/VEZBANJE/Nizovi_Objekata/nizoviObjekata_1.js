///////////////////////////////////////////

let student1 = {
    ime: "Petar",
    prezime: "Peric",
    godinaStudija: 1,
    polozeniIspiti: [6,6,6,6],

    prosek: function () {
        let brojac = 0;
        for (let i = 0; i < this.polozeniIspiti.length; i++) {
            if (this.polozeniIspiti[i] == 6 || this.polozeniIspiti[i] == 10) {
                brojac++;
            }
        }
        return (brojac == 0) ? true : false
    },

    srednjaOcena: function () {
        let sum = 0;

        for (let i = 0; i < this.polozeniIspiti.length; i++) {
            sum += this.polozeniIspiti[i]

        }
        return sum / this.polozeniIspiti.length;
    },

    ekstra: function () {
        for (let i = 0; i < this.polozeniIspiti.length; i++) {
            if (this.polozeniIspiti[i] == 7 || this.polozeniIspiti[i] == 8 || this.polozeniIspiti[i] == 6) {
                return true

            }

        }
        return false
    },

    ekstraStudent: function () {
        let brojac9 = 0;
        let brojac10 = 0;
        if (this.ekstra() == false) {

            for (let i = 0; i < this.polozeniIspiti.length; i++) {
                if (this.polozeniIspiti[i] == 9) {
                    brojac9++
                }
            };
            for (let i = 0; i < this.polozeniIspiti.length; i++) {
                if (this.polozeniIspiti[i] == 10) {
                    brojac10++
                }
            };
        }
        return brojac10 > brojac9 * 2 ? true : false

    },

    kida: function () {
        let brojac = 0;
        for (let i = 0; i < this.polozeniIspiti.length; i++) {
            if (this.polozeniIspiti[i] == 9) {
                brojac++;
            }
        };
        return brojac

    },

    razbija: function () {
        for (let i = 0; i < this.polozeniIspiti.length; i++) {
            if (this.polozeniIspiti[i] == 7 || this.polozeniIspiti[i] == 8 || this.polozeniIspiti[i] == 6 || this.polozeniIspiti[i] == 9) {
                return true
            }
        };
        return false
    },

    studentRazbija: function () {
        let brojac = 0;
        for (let i = 0; i < this.polozeniIspiti.length; i++) {
            if (this.polozeniIspiti[i] == 10) {
                brojac++;
            }
        };
        return brojac
    },

    
    aljkav: function () {
        let rez =0;
      this.polozeniIspiti.forEach(element => {
          if (element == 7 || element==8 || element==9 || element==10){
              rez = 1;
          }
      })
      return rez;
    },



};
let n = student1.kida()
console.log(n)

/////////////////////////////////////////


let student2 = {
    ime: "Marija",
    prezime: "Maric",
    godinaStudija: 3,
    polozeniIspiti: [7, 7, 7, 7, 7, 8, 8],

    prosek: function () {
        let brojac = 0;
        for (let i = 0; i < this.polozeniIspiti.length; i++) {
            if (this.polozeniIspiti[i] == 6 || this.polozeniIspiti[i] == 10) {
                brojac++;
            }
        }
        return (brojac == 0) ? true : false
    },

    srednjaOcena: function () {
        let sum = 0;

        for (let i = 0; i < this.polozeniIspiti.length; i++) {
            sum += this.polozeniIspiti[i]

        }
        return sum / this.polozeniIspiti.length;
    },

    ekstra: function () {
        for (let i = 0; i < this.polozeniIspiti.length; i++) {
            if (this.polozeniIspiti[i] == 7 || this.polozeniIspiti[i] == 8 || this.polozeniIspiti[i] == 6) {
                return true

            }
        }
        return false
    },

    ekstraStudent: function () {
        let brojac9 = 0;
        let brojac10 = 0;
        if (this.ekstra() == false) {

            for (let i = 0; i < this.polozeniIspiti.length; i++) {
                if (this.polozeniIspiti[i] == 9) {
                    brojac9++
                }
            };
            for (let i = 0; i < this.polozeniIspiti.length; i++) {
                if (this.polozeniIspiti[i] == 10) {
                    brojac10++
                }
            };
        }
        return brojac10 > brojac9 * 2 ? true : false

    },

    kida: function () {
        let brojac = 0;
        for (let i = 0; i < this.polozeniIspiti.length; i++) {
            if (this.polozeniIspiti[i] == 9) {
                brojac++;
            }
        };
        return brojac

    },


    razbija: function () {
        for (let i = 0; i < this.polozeniIspiti.length; i++) {
            if (this.polozeniIspiti[i] == 7 || this.polozeniIspiti[i] == 8 || this.polozeniIspiti[i] == 6 || this.polozeniIspiti[i] == 9) {
                return true
            }
        };
        return false
    },

    studentRazbija: function () {
        let brojac = 0;
        for (let i = 0; i < this.polozeniIspiti.length; i++) {
            if (this.polozeniIspiti[i] == 10) {
                brojac++;
            }
        };
        return brojac
    },

    
    aljkav: function () {
        let rez =0;
      this.polozeniIspiti.forEach(element => {
          if (element == 7 || element==8 || element==9 || element==10){
              rez = 1;
          }
      })
      return rez;
    },



};

let d = student2.srednjaOcena()
console.log(d)
///////////////////////////////////////


let student3 = {
    ime: "Jovan",
    prezime: "Jovic",
    godinaStudija: 4,
    polozeniIspiti: [6, 6, 6, 6, 6],

    prosek: function () {
        let brojac = 0;
        for (let i = 0; i < this.polozeniIspiti.length; i++) {
            if (this.polozeniIspiti[i] == 6 || this.polozeniIspiti[i] == 10) {
                brojac++;
            }
        }
        return (brojac == 0) ? true : false
    },


    srednjaOcena: function () {
        let sum = 0;

        for (let i = 0; i < this.polozeniIspiti.length; i++) {
            sum += this.polozeniIspiti[i]

        }
        return sum / this.polozeniIspiti.length;
    },

    ekstra: function () {
        for (let i = 0; i < this.polozeniIspiti.length; i++) {
            if (this.polozeniIspiti[i] == 7 || this.polozeniIspiti[i] == 8 || this.polozeniIspiti[i] == 6) {
                return true

            }
        }
        return false
    },

    ekstraStudent: function () {
        let brojac9 = 0;
        let brojac10 = 0;
        if (this.ekstra() == false) {

            for (let i = 0; i < this.polozeniIspiti.length; i++) {
                if (this.polozeniIspiti[i] == 9) {
                    brojac9++
                }
            };
            for (let i = 0; i < this.polozeniIspiti.length; i++) {
                if (this.polozeniIspiti[i] == 10) {
                    brojac10++
                }
            };
        }
        return brojac10 > brojac9 * 2 ? true : false

    },


    kida: function () {
        let brojac = 0;
        for (let i = 0; i < this.polozeniIspiti.length; i++) {
            if (this.polozeniIspiti[i] == 9) {
                brojac++;
            }
        };
        return brojac

    },


    razbija: function () {
        for (let i = 0; i < this.polozeniIspiti.length; i++) {
            if (this.polozeniIspiti[i] == 7 || this.polozeniIspiti[i] == 8 || this.polozeniIspiti[i] == 6 || this.polozeniIspiti[i] == 9) {
                return true
            }
        };
        return false
    },

    studentRazbija: function () {
        let brojac = 0;
        for (let i = 0; i < this.polozeniIspiti.length; i++) {
            if (this.polozeniIspiti[i] == 10) {
                brojac++;
            }
        };
        return brojac
    },

    aljkav: function () {
        let rez =0;
      this.polozeniIspiti.forEach(element => {
          if (element == 7 || element==8 || element==9 || element==10){
              rez = 1;
          }
      })
      return rez;
    },

};

let e = student3.aljkav()
console.log(e)
/////////////////////////////////////////////


let student4 = {
    ime: "Anita",
    prezime: "Antic",
    godinaStudija: 3,
    polozeniIspiti: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],

    prosek: function () {
        let brojac = 0;
        for (let i = 0; i < this.polozeniIspiti.length; i++) {
            if (this.polozeniIspiti[i] == 6 || this.polozeniIspiti[i] == 10) {
                brojac++;
            }
        }
        return (brojac == 0) ? true : false
    },



    srednjaOcena: function () {
        let sum = 0;

        for (let i = 0; i < this.polozeniIspiti.length; i++) {
            sum += this.polozeniIspiti[i]

        }
        return sum / this.polozeniIspiti.length;
    },

    ekstra: function () {
        for (let i = 0; i < this.polozeniIspiti.length; i++) {
            if (this.polozeniIspiti[i] == 7 || this.polozeniIspiti[i] == 8 || this.polozeniIspiti[i] == 6) {
                return true
            }

        }
        return false
    },

    ekstraStudent: function () {
        let brojac9 = 0;
        let brojac10 = 0;
        if (this.ekstra() == false) {

            for (let i = 0; i < this.polozeniIspiti.length; i++) {
                if (this.polozeniIspiti[i] == 9) {
                    brojac9++
                }
            };
            for (let i = 0; i < this.polozeniIspiti.length; i++) {
                if (this.polozeniIspiti[i] == 10) {
                    brojac10++
                }
            };
        }
        return brojac10 > brojac9 * 2 ? true : false

    },

    kida: function () {
        let brojac = 0;
        for (let i = 0; i < this.polozeniIspiti.length; i++) {
            if (this.polozeniIspiti[i] == 9) {
                brojac++;
            }
        };
        return brojac

    },


    razbija: function () {
        for (let i = 0; i < this.polozeniIspiti.length; i++) {
            if (this.polozeniIspiti[i] == 7 || this.polozeniIspiti[i] == 8 || this.polozeniIspiti[i] == 6 || this.polozeniIspiti[i] == 9) {
                return true
            }
        };
        return false
    },

    studentRazbija: function () {
        let brojac = 0;
        for (let i = 0; i < this.polozeniIspiti.length; i++) {
            if (this.polozeniIspiti[i] == 10) {
                brojac++;
            }
        };
        return brojac
    },
    
    aljkav: function () {
        let rez =0;
      this.polozeniIspiti.forEach(element => {
          if (element == 7 || element==8 || element==9 || element==10){
              rez = 1;
          }
      })
      return rez;
    },



};

let ekstra = student4.razbija()
console.log(ekstra)


let studenti = [student1, student2, student3, student4];

//1. Funkciji se prosleđuje niz studenata i string koji sadrži jedan karakter, a štampa imena i prezimena svih studenata čije prezime počinje na zadato slovo.


let prvoSlovo = (arr, b) => {
    arr.forEach(element => {
        if (element.ime.charAt(0) == b) {
            console.log(`Student cije ime pocinje sa ${b} je ${element.ime} ${element.prezime}`)
        }


    });

}
prvoSlovo(studenti, "P")


//2. Funkciji se prosleđuje niz studenata i dva stringa, a štampa imena i prezimena svih studenata čije ime sadrži prvi string, a prezime sadrži drugi string.

let imePrezime = (arr, a, b) => {

    arr.forEach(element => {
        if (element.ime.includes(a) && element.prezime.includes(b)) {
            console.log(`Student cije ime sadrzi ${a} a prezime sadrzi ${b} je ${element.ime} ${element.prezime}`)
        }
    });
}

imePrezime(studenti, "a", "c")



//3. Funkciji se prosleđuje niz studenata i ceo broj između 1 i 5 koji predstavlja godinu studija, a vraća broj studenata koji se nalaze na prosleđenoj godini studija.


let godinaStudija = (arr, num) => {

    let brojac = 0;

    arr.forEach(element => {

        if (element.godinaStudija == num) {
            brojac++
        }

    });
    return brojac;

};
let istaGodinaStudija = godinaStudija(studenti, 3)
console.log(`Broj studenata na istoj godini je ${istaGodinaStudija}`)



//4. Funkciji se prosleđuje niz studenata, a ona ispisuje ime i prezime studenta sa maksimalnim prosekom. Ukoliko ima više takvih studenata, ispisati ime i prezime bilo kog takvog studenta.


let maks = arr => {

    let max = 0;
    arr.forEach(element => {

        if (max < element.srednjaOcena()) {
            max = element.srednjaOcena();
        }

    });
    return max
};

console.log(maks(studenti))

let najvisiProsek = arr => {
    let niz = [];
    arr.forEach(element => {
        if (maks(arr) == element.srednjaOcena()) {
            niz.push(element)
        }
    });
    console.log(`Najvisi prosek ima student ${niz[0].ime} ${niz[0].prezime}`)
}

najvisiProsek(studenti)



//5. Student je prosečan ako nema nijednu šesticu i nijednu desetku. Funkciji se prosleđuje niz studenata, a ona ispisuje sve prosečne studente.

let prosecanStudent = arr => {

    arr.forEach(student => {
        if (student.prosek() == true) {
            console.log(`Prosecan student je ${student.ime} ${student.prezime}`)
        }
    });

};

prosecanStudent(studenti)


//6. Student je “ekstra” ako je polagao ispite samo sa devetkama i desetkama, i pri tome je broj desetki barem duplo veći od broja devetki. Funkciji se prosleđuje niz studenata, a ona ispisuje sve ekstra studente.

let studentEkstra = arr => {

    arr.forEach(element => {
        if (element.ekstraStudent() == true) {
            console.log(`Ekstra student je ${element.ime} ${element.prezime}`)
        }
    });

}

studentEkstra(studenti)

//7. Student “kida” ako je polagao ispite samo sa devetkama i desetkama, a broj devetki je manji od godine studije na kojoj se student nalazi. Funkciji se prosleđuje niz studenata, a ona ispisuje sve studente koji kidaju.

let studentKida = arr => {

    arr.forEach(student => {
        if (student.ekstra() == false && student.kida() < student.godinaStudija) {
            console.log(`${student.ime} ${student.prezime} je student koji kida`)
        };
    });
};

studentKida(studenti)


//8. Student “razbija” ako je sve ispite položio sa ocenom deset. Pri tome, broj desetki ne sme biti manji od broja 5 * (godina_studija - 1). (Dakle, ne može student na trećoj godini da razbija ako je položio jedan ispit, kao što nijedan student prve godine još ne može da razbija, jer još nije položio sve ispite iz tekuće godine). Funkciji se prosleđuje niz studenata, a ona ispisuje sve studente koji razbijaju.

let studentRazbija = arr => {
    arr.forEach(element => {
        if (element.razbija() == false && element.studentRazbija() > 5 * (element.godinaStudija - 1)) {
            console.log(`${element.ime} ${element.prezime} je student koji razbija`)
        }
    });
};

studentRazbija(studenti)

//9. Student je “aljkav” ako nijedan ispit nije položio sa ocenom većom od 7. Funkciji se prosleđuje niz studenata, a ona prebrojava sve aljkave studente.

let aljkavStudent = arr => {
    arr.forEach(element => {
        if(element.aljkav() == 0){
            console.log(`Student ${element.ime} ${element.prezime} je aljkav`)
        }
    })
}
aljkavStudent(studenti)

//10. Student se “bruka” ako nije student prve godine, a broj položenih ispita je manji od broja 3 * (godina_studija - 1), i pri tome nijedna ocena nije veća od 7. Funkciji se prosleđuje niz studenata, a ona prebrojava sve studente koji se brukaju.


let studentBruka = arr => {
    arr.forEach( student => {
        if (student.polozeniIspiti.length < 3*(student.godinaStudija - 1) && student.godinaStudija > 2 && student.aljkav() == 0){
            console.log(`Student ${student.ime} ${student.prezime} j se bruka`)
        }
    })
}

studentBruka(studenti)