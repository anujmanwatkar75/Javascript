/* 
for(initialization ;  condition check ; increment / decrement){
    //statements
}*/

//Program - 1 ( 1 to 3)
for(let i = 1 ; i <= 3 ; i++){
    console.log(i);
}

//Program - 2 (1 to 5)
for(let i = 1 ; i <= 5 ; i++){ //2 //3 //4 //5 //6
    console.log(i); //1 //2 //3 //4 //5
}

//Program - 3 (3 times Hello)
for(let i = 1 ; i <= 3 ; i++){
    console.log(`Hello`);
}

//Program - 4 (5 in reverse)
for(let i = 5 ; i >= 1 ; i--){ //4 //3 //2 //1 //0
    console.log(i); //5 //4 //3 //2 //1
}

//Program - 5 (table of 2)
for(let i = 2 ; i <= 20; i = i+2){ //4 //6 //8 //10 //12 //14 //16 //18 //20 22
    console.log(i); //2 //4 //6 //8 //10 //12 //14 //16 //18 //20
}

//Program - 6 (table of 5 in reverse)
for(let i = 50 ; i >= 5 ; i = i-5){
    console.log(i);
}
//yesterday revise


//break statement with for

//Program - 1
for(let i = 1 ; i <= 5 ; i++){ //2 //3
    if(i == 3){
        break; //true
    } 
    console.log(i); //1 //2
}

for(let i = 1 ; i <= 5 ; i++){ //2 //3 //4
    console.log(i); //1 //2 //3 
    if(i == 3){
        break; //true
    }
}

//program - 2
for(let i = 5 ; i >= 1 ; i--){ //4 //3
    if(i == 3){
        break; //true
    }
    console.log(i); //5 //4
}

for(let i = 5 ; i >= 1 ; i--){ //4 //3
    console.log(i); //5 //4 //3
    if(i == 3){
        break; //true
    }
}


//continue with for

//Program - 1
for(let i = 1 ; i <= 5 ; i++){ //2 //3 //4 //5 //6
    if(i == 3){
        continue; //will iterate to loop
    }
    console.log(i); //1 //2 //4 //5
}

for(let i = 5 ; i >= 1 ; i--){ //4 //3 //2 //1 //0
    if(i == 3){
        continue;
    }
    console.log(i); //5 //4 //2 //1
}


