

console.log(document);
console.log(typeof document);

console.log(document.body);
console.log(typeof document.body);


let p1 = document.getElementById("p1");
console.log(p1);
console.log(typeof p1);

let cont = document.getElementsByClassName("container")
console.log(cont);
console.log(typeof cont);


//FOR PETLJA
for (let i = 0; i < cont.length; i++) {
    console.log(cont[i]);
}

//FOE_EACH

let contNiz = Array.from(cont);
contNiz.forEach(element => {
    console.log(element);

});


let paragrafi = document.getElementsByTagName("p");
for (let i = 0; i < paragrafi.length; i++) {
    console.log(paragrafi[i]);
};

let linkovi = document.getElementsByName("link");
for (let i = 0; i < linkovi.length; i++) {
    console.log(linkovi[i]);
};



//////////////////////////

p1 = document.querySelector("#p1");

console.log(p1);

cont = document.querySelector(".container");
console.log(cont);

cont = document.querySelectorAll(".container");
console.log(cont);

for (let i = 0; i < cont.length; i++) {
    console.log(cont[i]);
}

cont.forEach(element => {
    console.log(element);
});

paragrafi = document.querySelectorAll("p");
console.log(paragrafi);

linkovi = document.querySelectorAll("[name='link']");
console.log(linkovi);


//Dohvatiti prvi div tag sa klasom „error“

let div1 = document.getElementsByClassName("error");

console.log(div1[0]);//prvi div
console.log(div1[div1.length - 1]);//poslednji div

//Dohvatiti poslednji red u tabeli.

let red = document.querySelectorAll("table tr:last-child");
console.log(red);


//Dohvatiti sve linkove na stranici.

let links = document.links
console.log(links);

links = document.getElementsByTagName("a");
console.log(links);

//Dohvatiti sve slike na stranici.
let img = document.images
console.log(img);

img = document.getElementsByTagName("img");
console.log(img);

img = document.querySelectorAll("img");
console.log(img);

// img = document.querySelectorAll("src")
// console.log(img);


p1.innerHTML = "Promenjen <span>tekst</span> paragrafa.";
p1.innerHTML += " Dodajem novu vrednost";

let sviLinkovi = document.querySelectorAll("a");

sviLinkovi.forEach(link => {

    /////////// HTML atributi
    link.href = "https://www.google.com";
    link.target = "_blank";

    ///////////////////////
    //css atributi
    link.style.color = "green";
    link.style.textDecoration = "none";

    link.style = "color: green;";// u isto vreme ponistava prethodne ako se koristi ispod prethodnih. prepisace ovo text.decoration

    ///////////////////////
    // preko metode
    link.setAttribute('name', 'link2'); // ako je link imao neku vrednost atributa ovako je menjamo
})

//1

let par = document.getElementsByTagName("p")

for(let i =0; i<par.length; i++){
    par[i].innerHTML = "Vazno!"
}


//2
let allDivs = document.querySelectorAll("div.error");

allDivs.forEach(div => {
    div.innerHTML += '<h1>Greska</h1>'
})

// //3

// //4
// let slike2 = document.getElementsByTagName("img");

// slike2.forEach(img => {
//     img.setAttribute("alt", "slicice")
// })





//10
// //Svim linkovima na stranici postaviti padding na 5px, font size na 18px i text-decoration na none.
// Parnim linkovima staviti zelenu pozadinsku boju i ljubicastu boju teksta, a neparnim linkovima plavu pozadinsku boju i belu boju teksta.

let sviLinkovi10 = document.querySelectorAll("a");

sviLinkovi10.forEach((element, i) => {
    
if (i%2==0){
    element.style.backgroundColor = "green"
    element.style.color = "purple"
    element.style.padding="5px"; 
    element.style.fontSize= "18px"; 
    element.style.textDecoration= "none";
}
else{
    element.style.backgroundColor = "blue"
    element.style.color = "white"
    element.style.padding="5px"; 
    element.style.fontSize= "18px"; 
    element.style.textDecoration= "none";
}
});

//11 zadatak

// Svim slikama na stranici koja su sa ekstenzijom .png, postaviti okvir na debljinu 2px i crvenu boju.



//12 zadatak
//Svakom linku na stranici promeniti target svojstvo na sledeći način: ako je bilo _blank, postaviti na _top, a ako je bila neka vrednost različita od _blank, ili uopšte nije bilo postavljeno, tada postaviti na _blank. 


// let allLinks = document.querySelectorAll("a");

// allLinks.forEach(link => {
//     if (link.target == "_blank"){
//         link.target = "_top"
//     }
//     else {
//         link.target = "_blank"
//     }
// })




// //13 Napraviti niz od najmanje tri imena. Proći nizom i imena ispisati:
// Svako u novom linku. Ako ime počinje na slovo „S“, link se otvara u novom tabu, a inače se otvara na istoj stranici.
// U listi kao stavke liste. Naizmenično stavke liste obojiti sa dve različite boje.
// U jednoj koloni tabele. Postaviti okvir, marginu i pading ćelijama tabele.

let nizImena = ["Sanja","Petar","Milan","Jovan","Marija"];

nizImena.forEach(ime => {
    if (ime.startsWith("S")){
document.body.innerHTML += `<a href="#" target="_blank">${ime}</a>`
    }
    else{
        document.body.innerHTML += `<a href="#">${ime}</a>`
    }
});

let lista = "<ul>";

nizImena.forEach((ime,i) => {
    if(i%2==0){
        lista += `<li style='color:red'>${ime}</li>`
    }
    else{
        lista += `<li style='color:blue'>${ime}</li>`
    }
    
})
lista += "</ul>";
document.body.innerHTML += lista


//Svim parnim paragrafima na stranici dodati klasu error, a svim neparnim paragrafima dodati klasu success

let paragrfi15 = document.querySelectorAll("p");

paragrfi15.forEach((element,i) => {
    if(i%2==0){
        element.classList.add("error")
    }
    else{
        element.classList.add("success")
    }
});

//Tekst u paragrafima naizmenično pisati veličinom 15px, veličinom 20px i veličinom od 25px.




//Svim paragrafima čiji tekst sadrži reč error, postaviti klasu na error, svim paragrafima čiji tekst sadrži reč success, postaviti klasu na success. Ostale klase paragrafa ne modifikovati.


paragrfi15.forEach(element => {
    if(element.textContent.includes("error")){
        element.classList.add("error")
    }
    if(element.textContent.includes("success")){

        element.classList.add("success")
    }
});

//Svim paragrafima koji imaju klasu error skloniti tu klasu, a svim paragrafima koji nemaju klasu error dodati tu klasu.

// paragrafi15.forEach(element => {
    
// })