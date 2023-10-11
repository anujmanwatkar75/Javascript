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


/* 
# Comparison Operator
1. < , > , <= , >=
2. != , == => value
3. !== , ===  => value and type
4. entity < entity => boolean (true or false)
*/

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