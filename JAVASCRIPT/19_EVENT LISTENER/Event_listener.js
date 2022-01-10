


//1. dohvati element na koji zelis da postavis osluskivac

let pKlikni = document.getElementById("klikni")


//2. Na element postavljamo osluskivac

pKlikni.addEventListener("click", () => {
    console.log("Jednom kliknuto");
});


////////////////////////

let pKlikniDva = document.getElementById("dvaKlika");
pKlikniDva.addEventListener("dblclick", () => {
    console.log("Dva puta kliknuto")
});

/////////////////////

let res = 0;

let spanRes = document.getElementById("res");
let btnPlus = document.getElementById("plus");
btnPlus.addEventListener("click", () => {
    res++;
    // console.log(res)
    spanRes.innerHTML = res;
    if (res < 0){
        spanRes.style.color= "blue"
    }
    else{
        spanRes.style.color= "red"
    }
});

let btnMinus = document.getElementById("minus");
btnMinus.addEventListener("click", ()=>{
    res--;
    spanRes.innerHTML = res;
    if (res < 0){
        spanRes.style.color= "blue"
    }
    else{
        spanRes.style.color= "red"
    }
});

//////////////////////////////
let btnHello = document.getElementById("hello");
let inputIme = document.getElementById("ime");
let pHelloIspis = document.getElementById("helloIspis");

btnHello.addEventListener("click", () =>{
    let inputImeValue = inputIme.value;
    pHelloIspis.innerHTML = `Hello ${inputImeValue}`
});

////////////////////////////////////////////
//dohvatiti sve vrednosti izDOM-a

///////////////////////////////////
let inputGodinaRodjenja = document.getElementById("godRodj");
let inputPol = document.querySelectorAll("input[name='pol']");
let btnPosalji = document.getElementById("posalji");
let pIspis = document.getElementById("ispis");


btnPosalji.addEventListener("click", (e) => {
    e.preventDefault(); /// da se ne relouduje stranica
    let date = new Date();
    let tekucaGodina = date.getUTCFullYear();

    let inputGodinaRodjenjaValue = inputGodinaRodjenja.value;
    inputGodinaRodjenjaValue = parseInt(inputGodinaRodjenjaValue)// da se promeni sa stringa na broj, jer se polje uvek preuzima ka string bez obzira sto smo stavili input number

    
    console.log(inputGodinaRodjenjaValue)
    console.log(typeof inputGodinaRodjenjaValue);

    let god = tekucaGodina - inputGodinaRodjenjaValue;
    pIspis.innerHTML = `Korisnik ima ${god} godina`;

    let checkedPol = document.querySelector(`input[name="pol"]:checked`);
    console.log(checkedPol)

    let checkedPolValue = checkedPol.value// vraca vrednost iz html taga
if(checkedPolValue == "z"){
    pIspis.innerHTML += " i zenskog je pola"
}
else if(checkedPolValue == "m"){
    pIspis.innerHTML += " i muskog je pola"
}
else {
    pIspis.innerHTML += " i neodredjenog je pola"
}
});

