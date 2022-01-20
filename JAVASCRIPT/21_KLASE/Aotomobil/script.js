

import Auto from "./auto.js";

let a1 = new Auto("Citroen C4","crna", false);  
// nakon ovoga a1 je objekat sa sledecim poljima
//a1._marka (vrednost "Citroen C4")
//a1._boja (vrednost "crna")
//a1._imaKrov (vrednost false)

console.log(a1)
console.log(typeof a1)

let a2 = new Auto ("Skoda Oktavia", "plava", true, 4)
console.log(a2);

console.log(a2._marka);
console.log(a2._boja);
console.log(a2._imaKrov);



let a3 = new Auto("Fiat", "bela", false, 4);
console.log(a3);

let a4 = new Auto("     ", "bela", false, 1);
console.log(a4);

console.log(a3._marka);
console.log(a3._boja);
console.log(a3._imaKrov);

a3._brojVrata = 3; // objektu mozemo da dodajemo proizvoljno nova polja 

console.log(a3);

a1.sviraj()
a1.vozi(50);


// U klasi pisemo polja(u konstruktoru)  i metode, mozemo dodavati proizvoljne metode. Svi objekti imace polja i metode navedene u klasi. Poljima se pristupa bez zagrade a1._brojVrata =4; a metode se zovu sa zagradama a1.sviraj() a izmedju zagrada se navode parametri ako ih ima

//a1._marka="        Audi A4"; //ovako ne ukloni razmake ispod da
// a1.postaviMarku("    Audi A4")
// console.log(a1);
// console.log(a1.dohvatiMarku());

let a5 = new Auto ("    Audi A4", "plava", false, 3);
console.log(a5)


//seteri
a1.marka ="    Audi A4"
console.log(a1.marka);//geter 

a3.stampaj()