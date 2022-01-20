



let lista = document.getElementById("lista");
let unos = document.getElementById("unos");
// let btnDodaj = document.getElementById("dugme");


unos.addEventListener("keyup", x => {
    x.preventDefault();

    if (x.keyCode == 13) {
        let unosValue = unos.value;
        unosValue = unosValue.trim()

        if (unosValue == "" || unosValue == null) {
            alert("Morate uneti tekst zadatka");
        }
        else {
            let listItem = document.createElement("li");
            listItem.innerText = unosValue;
    
            let radioPozicija = document.querySelector("input[name=pozicija]:checked")
            //console.log(radioPozicija.value)
    
            if (radioPozicija.value == "pocetak") {
                lista.prepend(listItem)
            }
            else {
                lista.appendChild(listItem); //na kraj liste
            }
    
            unos.value = ""; // da mi isprazni tekst iz input polja  nakon dodavanja elementa
        }
    
    }

    

});



lista.addEventListener("click", e => {
    // console.log("Kliknuto na UL")
    // console.log(e.target)
    // console.log(e.target.tagName)// vraca tag na koji je kliknuto


    if (e.target.tagName == "LI") {
        e.target.remove();
    }
});





let tekst = "    Neki    tekst    ";
console.log(tekst)
console.log(tekst.trim())// trim funkcija sklanja praznine sa pocetka i sa kraja stringa

tekst = "        ";
console.log(tekst);
console.log(tekst.trim())