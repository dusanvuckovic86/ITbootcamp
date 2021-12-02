console.log("Pozdrav iz JS datoteke");

let a =3, b=6;
console.log(a*b);
console.log("Pera"*"Peric");
console.log("pera"+"peric");


b= b/a;
console.log(a, b);

a=b*a+a;
console.log(a, b);

b=(a-2*b)/b;
console.log(a,b)


// a= a+10; //9+10=19
// console.log(a);
a+=10
console.log(a);

b/=a;
console.log(b);

// a=a+1;
//a+=1
a++;
console.log(a);

++a;
console.log(a);


let c=5;
console.log(c++);// Prvo se iskoristi stara vrednost promenljive u izrazu pa se onda vrednost promenljive poveca
console.log(c);

let d=3;
console.log(++d);
console.log(d);

c=4;
d=3;
x=(c++)*(--d);//4*2=8
console.log(c,d,x)//c=5, d=2, x=8

console.log(7%2); // 7=3*2+1
console.log(9%2);//9=4*2+1

console.log(180%60);//180=3*60+0 po moduli 60 moguci reziltati su 0,1,2....,59

// profesor otvori stranicu 56%13=4 -> (0,1,2....12)
console.log(365%7);

console.log(4**3);

c=3;
d=(c**3)+1; // (3**3)+1=27+1=28 ,    3 na treci


