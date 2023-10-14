//Conditional Statement
//// single input ==> multiple outcome
//if
//if - else
//if - else if - else
//switch case

/*
numT > 0 && numT <= 5  -----> 5% discount
numT > 5 && numT <=10 ------> 10% discount
numT > 10 ------------------> 20% discount

syntax ==> if
if(condition){
    //statement
}
*/

//program 1 ====> (if) - Number Of Ticket
let numT = 11;

if(numT > 0 && numT <= 5){
    console.log("5% discount");
}
if(numT > 5 && numT <= 10){
    console.log("10% discount");
}
if(numT > 10){
    console.log("20% discount");
}

//Program 2 ====> (if - else)
if(10>2){
    console.log('hello');
}
else{
    console.log('bye');
}

//Program 3 ====> (if - else if - else)
let numT2 = -17;

if(numT2 > 0 && numT2 <= 5){
    console.log("5% discount");
}
else if(numT2 > 5 && numT2 <= 10){
    console.log("10% discount");
}
else if(numT2 > 10){
    console.log("20% discount");
}
else{
    console.log("incorrect input");
}

//Program 4 ====> (if) - Marks
let marks = 90;

if (marks >= 90){
    console.log("Grade A");
}
if (marks >= 75){
    console.log("Grade B");
}
if (marks >= 65){
    console.log("Grade C");
}

//Program 5 ====> (if - else if - else)
let MarksObtained = 76;

if(MarksObtained >= 90){
    console.log("Grade A");
}
else if(MarksObtained >= 75){
    console.log("Grade B");
}
else if(MarksObtained >= 65){
    console.log("Grade C");
}
else{
    console.log("Please try again");
}

//Program 6 ====> (if - else) - Greater Number
let a = 15;
let b = 1022;

if(a > b){
    console.log("a is greater");
}
else{
    console.log("b is greater");
}

//Program 7 ====> (if - else if - else) -  Greatest Number

let x1 = 1000000;
let x2 = 13222;
let x3 = 120;

if(x1 > x2 && x1 > x3){
    console.log("x1 is greater");
}
else if(x2 > x1 && x2 > x3){
    console.log("x2 is greater");
}
else{
    console.log("x3 is greater");
}

//Program 7 ====> (if - else)
let q = 1000000;
let w = 500000000;

if(q > w){
    console.log("q is greater");
}
else{
    console.log("w is greater");
}

//ternary operator
/*
consition ? if true()execute : else false()execute
q > w ? console.log("q is greater"):console.log("w is greater")
*/
q > w ? console.log("q is greater"):console.log("w is greater")