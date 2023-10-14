//while loop

//for loop
// for(initilization ; condition check ; increment / decrement){
//     //statements
// }

//while loop
/*
initilization
while(condition check){
    //statements
    //increment/decrement
} 
*/

//Program - 1 (print 1 to 3)
let a = 1;
while(a<=3){
    console.log(a);//1 //2 //3
    a++; //2 //3 //4
}

//Program - 2 (print 1 to 5)
let b = 1;
while(b<=5){ 
    console.log(b); //1 //2 //3 //4 //5
    b++; //2 //3 //4 //5 //6
}

//Program - 3 (print hello 3 times)
let c = 1;
while(c<=3){
    console.log('Hello'); //1 //2 //3
    c++; //2 //3 //4
}

//Program - 4 (1 to 5 in reverse)
let d = 5;
while(d>=1){
    console.log(d); //5 //4 //3 //2 //1
    d--; //4 //3 //2 //1 //0
}

//Program - 5 (table of 2)
let e = 2;
while(e<=20){
    console.log(e); //2 //4 //6 //8 //10 //12 //14 //16 //18 //20
    e = e + 2; //4 //6 //8 //10 //12 //14 //16 //18 //20 //22
}

//Program - 5 (table of 5 in reverse)
let f = 50;
while(f>=5){
    console.log(f); //50 //45 ------------//5
    f = f - 5; //45 //40 ---------0
}

//break with while loop

//Program - 1
let g = 1;
while(g <= 5){
    if(g == 3){
        break; //true
    }
    console.log(g); //1 //2
    g++; //2 //3
}  


let h = 1;
while(h <= 5){
    console.log(h); //1 //2 //3
    if(h == 3){
        break; //true
    } 
    h++; //2 //3
}


let i = 10;
while(i >= 5){
    console.log(i); //10 //9 //8 //7 //6 
    if(i == 6){
        break; //true
    } 
    i--; //9 //8 //7 
}


//continue with while loop

//Program - 1
let k = 1;
while(k <= 5){
    if(k == 2){
        k++;
        continue;
    }
    console.log(k); //1 //3 //4 //5
    k++; //2 //4 //5 //6
}

let l = 1;
while(l <= 5){
    if(l == 3){
        l++;
        continue;
    }
    console.log(l); //1 //2 //4 //5
    l++; //2 //3 //4 //6
} 