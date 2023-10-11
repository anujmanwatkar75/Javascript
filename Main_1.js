// Variables => let, var, const

//Program 1 
let a = 10;  //keyword variablename = value
console.log(a);
a = 20;
console.log(a);

//Program 2
const b = 100;
console.log(b);
// b = 20;
// console.log(b);

//var
var c = 1;
console.log(c);
c = 2;
console.log(c);

//Program 3
//Arithematic Problem => + , - , * , / , %
let x = 5;
let y = 2;
console.log(x+y);
console.log(x-y);
console.log(x*y);
console.log(x/y);
console.log(x%y);

let d = 10;
let f = 2;
console.log(d+f);
console.log(d-f);
console.log(d*f);
console.log(d/f);
console.log(d%f); //DRY => do not repeat yourself

//Program 4
//Functions => function fun_name (parameter){ //code here}
function Calculator(w,e){
    console.log(w+e);
    console.log(w-e);
    console.log(w*e);
    console.log(w/e);
    console.log(w%e);
}
Calculator(4,2);

//Program 5
//Types of Function
//1. Function without parameter and without return type
function addA(){
    console.log(2+3);
}
addA()

//2. Function with parameter and without return type
function addB(j,k){
    console.log(j+k);
}
addB(90,10);

//3. Function with parameter and with return type 
// To reuse we use with and with eg. 100, 100+2 = 102
function addC(y,u){
    return y + u;
}
let a1 = addC(5,15);
console.log(a1);
console.log(a1+a1);

