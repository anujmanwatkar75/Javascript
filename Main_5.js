// ternary operator

let a = 10;
let b = 50;

// if(a > b){
//     console.log("a is greater");
// }
// else{
//     console.log("b is greater");
// }
a > b ? console.log("a is greater") : console.log("b is greater");

/*
let age = 17;
let q1 = age >= 18 ? console.log("can vote") : console.log("cannot vote"); //cannot vote
console.log(q1); //undefined
*/

let age = 17
let q1 = age >= 18 ? "can drive" : "cannot drive"
console.log(q1)


// switchcase
//program - 2 (switch case without break)

let city = "indore"
switch(city){
    case "pune":
        console.log("MH");
    case "indore":
        console.log("MP");
    case "jaipur":
        console.log("RJ");
    case "kanpur":
        console.log("UP");
    default:
        console.log("Incorrect City");
}

//program - 2 (switch case with break)

let city2 = "jaipur"
switch(city2){
    case "pune":
        console.log("MH");
        break;
    case "indore":
        console.log("MP");
        break;
    case "jaipur":
        console.log("RJ");
        break;
    case "kanpur":
        console.log("UP");
        break;
    default:
        console.log("Incorrect city");
}


//Program - 3

let city3 = "nagpur";
switch(city3){
    case "pune":
    case "nagpur":
        console.log("MH");
        break;
    case "indore":
    case "bhopal":
        console.log("MP");
        break;
    case "jaipur":
    case "udaipur":
        console.log("RJ");
        break;
    case "kanpur":
    case "lucknow":
        console.log("UP");
        break;
    default:
        console.log("Incorrect City");
}

//Program - 4 (greatest of three number using switch)

let greatest = true
let a1 = 1000;
let b2 = 20000;
let c3 = 300000;

switch(greatest){
    case a1 > b2 && a1 > c3:
        console.log("a1 is greatest among three");
        break;
    case b2 > a1 && b2 > c3:
        console.log("b2 is greatest among three");
        break;
    default:
        console.log("c3 is greatest among three");
}