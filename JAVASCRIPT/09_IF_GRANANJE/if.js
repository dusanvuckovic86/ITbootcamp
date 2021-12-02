console.log("IF naredba grananja")

if(true) {
    console.log("Uslov je ispunjen")
}

console.log("Neki kod...")

//Operatori poredjenja: 
//==, !=,<,>,>=;<=

let a = 5;
let b = 7;

if(a==b){
    console.log("a i b su jednake vrednosti"); //da je a=7 izvrsio bi se kod u konzoli
}

if(a!=b){
    console.log("a i b nisu jednake vrednosti");

}
a=4;
b=4;
if(a<b){
    console.log("a je strogo manje od b");

}

if(a<=b){
    console.log("a je manje ili jednako b")
}

// a = 5;
// b = "3";
// c = a + b;
a = 5;
b ="5";
c = a + b;
console.log(c);
if (a==b){
    console.log("a i be su jednake vrednosti");
}

if(a===b){
    console.log("a i be su jednaki po vrednoszi i po tipu");
}

a=7;
b="7";

if(a !== b){
    console.log("a i b nisu jednaki bilo po tipu, bilo po vrednosti ");
}


a = "7";
b = "7";
 if (a !== b) {
     console.log("a i b nisu jednaki bilo po tipu, bilo po vrednosti ");
 }



 let x =3;
 let y =4;
 let z =5;

 if (x+y == z){
     console.log("x+y je jednako z")
 }



 if(x = z+2){
     console.log("hello") //ne radi se jer se if sluzi da proveri tacnost a ovo je dodela vrednosti jer je jedan znak jednakosti
 }

