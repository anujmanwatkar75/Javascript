//3. Logical Operator ==> boolean ==> true/false
//a. AND ==> &&
//b. OR ==> ||
//c. NOT ==> !

/* 
1. && - AND ====> (mulitiplication)

                     true && true => true
                     false && true => false
                     true && false => false
                     false && false => false

2. || - OR ====> (addition)

                    true || true => true
                    false || true => true
                    true || false => true
                    false || false => false
                    
3. ! - NOT ====> (//true ==> !true ==> false
                  //false ==> !false ==> true)
                  
                    true => false
                    false => true
*/

//1. && => AND
console.log(5 == 5 && 6 == 6);
console.log(5 != 5 && 6 == 6);
console.log(5 == 5 && 6 != 6);
console.log(5 != 5 && 6 != 6);

//2. || => OR
console.log(6 == 6 || 7 == 7);
console.log(6 != 6 || 7 == 7);
console.log(6 == 6 || 7 != 7);
console.log(6 != 6 || 7 != 7);

//3. ! => NOT
// console.log(!8 == 8);
console.log(!(9 == '9'));
console.log(!(10 === '10'));
