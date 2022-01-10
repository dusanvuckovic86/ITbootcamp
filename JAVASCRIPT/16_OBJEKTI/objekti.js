console.log("Objekti");

let blog1 = {
    title: "HTML",
    content: "Ovo je blog o osnovnim HTML tagovima",
    author: "Jelena Matejic"
};

console.log(blog1);
console.log(typeof blog1);

//ispis propertija na dva nacina

console.log(blog1.title);
console.log(blog1["title"]);


// izmene propertija na dva nacina

blog1.title = "Osnove HTML-a";
console.log(blog1);

blog1["author"] = "Jelena";
console.log(blog1);


/////////////////////////


let user = {
    username: "JM",
    age: 27,
    blogs: ["If naredba grananja", "While petlja", "for petlja"],

    login: function () {
        console.log("Ulogovani ste"); // kada je funkcija u objektu to je METOD

    },
    logout: function () {
        console.log("Ulogovani ste");
    },
    logBlogs: function () {
        console.log(this); // ispisuje ceo objekat
        console.log(this.blogs); // ispisuje odredjeni properti
        this.blogs.forEach(blog => {
            console.log(blog);
        })
    }
};

console.log(user);
console.log(user.blogs);
let nasloviBlogova = user.blogs;
for (let i = 0; i < nasloviBlogova.length; i++) {
    document.body.innerHTML += `<h3>${nasloviBlogova[i]}</h3>`
}


for (let i = 0; i < user.blogs.length; i++) {
    document.body.innerHTML += `<h4>${user.blogs[i]}</h4>`
}


//Poziv metoda

user.login();
user.logout();

//poziv metoda koji u sebi sadrzi neki properti
//THIS - mora da se stavi ispred


user.logBlogs();




let dan = {
    datum: "2021/12/23",
    kisa: true,
    sunce: true,
    oblacno: true,
    vrednostiTemperatura: [1, 7, 9, 15, 10, 19, 19],
    prosecnaTemperatura: function () {
        let suma = 0;
        for (let i = 0; i < this.vrednostiTemperatura.length; i++) {
            suma += this.vrednostiTemperatura[i];
        }
        let srVr = suma / this.vrednostiTemperatura.length;
        return srVr;
    },

    natprosecnaTemp: function () {
        let brojac = 0;
        for (let i = 0; i < this.vrednostiTemperatura.length; i++) {
            if (this.vrednostiTemperatura[i] > this.prosecnaTemperatura()) {
                brojac++;
            }
        }
        return brojac
    },

    maksimalnaTemp: function () {
        let max = this.vrednostiTemperatura[0];
        for (let i = 0; i < this.vrednostiTemperatura.length; i++) {
            if (max <= this.vrednostiTemperatura[i]) {
                max = this.vrednostiTemperatura[i];
            }
        }
        let brojac = 0;
        for (let i = 0; i < this.vrednostiTemperatura.length; i++) {
            if (max == this.vrednostiTemperatura[i]) {
                brojac++;
            }
        }
        return brojac;

    },

    //cetvrti zadatak 

    ////Prima dva parametra koji predstavljaju dve temperature. Potrebno je da metoda vrati broj merenja u toku dana čija je vrednost između ove dve zadate temperature (ne uključujući te dve vrednosti).

    between: function (a, b) {
        let element = this.vrednostiTemperatura;
        let br = 0;
        element.forEach(el => {
            if (a < el && el < b) {
                br++;
            }
        });
        return br
    },

    tempIzmedju: function (a, b) {
        let brojac = 0;
        for (let i = 0; i < this.vrednostiTemperatura.length; i++) {
            if (a < this.vrednostiTemperatura[i] && b > this.vrednostiTemperatura[i]) {
                brojac++;
            }
        }
        return brojac;
    },


    //peti zadatak

    //Vraća true ukoliko je u većini dana temperatura bila iznad proseka. U suprotnom vraća false. 

    ispodIznadProseka: function () {

        if (this.vrednostiTemperatura.length / 2 > this.prosecnaTemperatura()) {

            return false;
        }
        else {
            return true;
        }

    },


    //sesti zadatak

    //Za dan se smatra da je leden ukoliko nijedna temperatura izmerena tog dana nije iznosila iznad 0 stepeni. Metod vraća true ukoliko je dan bio leden, u suprotnom metod vraća false.

    danJeLeden: function () {
        for (let i = 0; i < this.vrednostiTemperatura.length; i++) {
            if (this.vrednostiTemperatura[i] > 0) {
                return false;
            }
            else {
                return true;
            }
        }
    },


    tropskiDan: function(){
        for (let i = 0; i < this.vrednostiTemperatura.length; i++){
            if (this.vrednostiTemperatura[i]>24){
                return true;
            }
        }
        return false
    }




}

console.log(dan.prosecnaTemperatura())
console.log(dan.natprosecnaTemp())
console.log(dan.maksimalnaTemp())
console.log(dan.between(1, 10))
console.log(dan.tempIzmedju(1, 10))
console.log(dan.ispodIznadProseka())
console.log(dan.danJeLeden())
console.log(dan.tropskiDan())






