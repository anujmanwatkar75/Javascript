//loop
/*
To keep on repeating the same task
for(i = 1; i <= 100; i++){
    console.log("i");
}

//syntax => for, while
for(initialization; conditionCheck; increment/decrement){
    //statement
}
*/

// //Program - 1  (1 to 3)
for(let i = 1; i <=3; i++){ //2 //3 //4
    console.log(i); //1 //2 //3 
}
//4 break & exit the loop

//Program - 2 (1 to 5)
for(let i = 1; i <=5; i++){
    console.log(i); // 1 to 5
}

//Program - 3 (reverse 5 to 1)
for(let i = 5; i >= 1; i--){
    console.log(i); // 5 to 1
}

//Program - 4 (Hello Js 3 times)
for(let i = 1; i <=3; i++){ // 2 //3 //4
    console.log("Hello Js"); //Hello Js //Hello Js //Hello Js
}
//4 break & exit the loop

//Program - 5 (Table of 2)
for(let i = 2; i <= 20; i = i + 2){ //4 //6 //8 //10 //12 //14 //16 //18 //20 //22
    console.log(i); //2 //4 //6 //8 //10 //12 //14 //16 //18 //20
} 
//22 break & exit the loop

//Program - 6 (Table of 5 in reverse)
for(let i = 50; i >=5 ; i = i - 5){
    console.log(i); // 50 to 5
}
