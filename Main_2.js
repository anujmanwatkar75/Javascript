//Type
/* 
# Person
Introvert                Extrovert
less outing              More Outing
less social              More social

1. Human
Properties - Name, age, height, weight, gender  
Methods - talk(), walk()

2. Vehicle
Properties - color, model, reg no, type 
Methods - start(), stop()

3. Bank
Properties - Account name, Account no, branch name, ifsc code
Methods - deposit(), withdrawl()
*/

let a = 10;
console.log(a);
console.log(typeof a); //1, -2, 8.0, -9.0, 0

let b = true;
console.log(b);
console.log(typeof b) //true or false

let c = `anuj_1`;  // ` ` => backtick 
console.log(c);
console.log(typeof c); //"1", "a", "a1", "ASQ122", "a1@#$", " ", ' ', ` `


/***/ 

//operator
//1. arithmatic ==> +-*/%
//2.comparison operator => <,>,<=,>=,!=,==,===,!==
//3. logical operator ==> boolean ==> true/false
//a. AND ==> &&
//b. OR ==> ||
//c.  NOT ==> !

// 2. Comparison Operator
// a. < , > , <= , >=
// b. != , == => value
// c. !== , ===  => value and type
// d. entity < entity => boolean (true or false)

//boolean => true/false
//< less than
//> greaterthan
//<= less than equal to
//>= greater than equal to
//== double equal to
//=== triple equal to
//!= not equal to
//!== not double equal to

/***/

//Program 1
console.log(10 == 10);
console.log(10 == "10");
console.log(10 != 10);
console.log(10 != "10");
console.log(10 === "10");
console.log(10 !== 10);
console.log(10 === 5);
console.log(10 !== "10");
console.log(10 < 5);
console.log(10 > 5);
console.log(10 <= 5);
console.log(10 >= 5);
console.log(5 >= 10);