//while
// while (condition) {
    
// }

let i=0; //initialization
while (i<=10) {                        //condition
console.log(`Value of i:${i}`);    
i=i+2                                 //increment
}

/**
 Value of i:0
Value of i:2
Value of i:4
Value of i:6
Value of i:8
Value of i:10 
 */


//**************while loop on array */

const myArray=["flask","batman","spiderman"]
let arr=0;
while (arr<myArray.length) {
    console.log(myArray[arr]);
    arr=arr+1;
}
/**  
 * 
 flask
batman
spiderman
 */




//********DO WHILE LOOP */

//SYNTAX
// do {
    
// } while (condition);

// let score=1
// do {
//     console.log(`Score is: ${score}`);
//     score++;
// } while (score<=10);

/****
 Score is: 1
Score is: 2
Score is: 3
Score is: 4
Score is: 5
Score is: 6
Score is: 7
Score is: 8
Score is: 9
Score is: 10
 */



let score=11
do {
    console.log(`Score is: ${score}`);
    score++;
} while (score<=10);

//Score is: 11    ek baar execute hoga hi

//hello