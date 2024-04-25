//for 
// //Syntax
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

// for (let i = 0; i < 10; i++) {
//     const element = i;
//     console.log(element);
    
// }

/***
 0
1
2
3
4
5
6
7
8
9
*/

// for (let i = 0; i < 10; i++) {
//     if(i==5){
//         console.log("5 is best");
//     }
//     console.log(i)
// }

/**
 0
1
2
3
4
5 is best
5
6
7
8
9
 */



//*****************for loop in for loop
for (let i = 0; i < 2; i++) {
    console.log(`Outer loop:${i}`);
    for (let j = 0; j < 10; j++) {
       console.log(`Inner loop:${j} and Outer loop:${i}`);
        
    }
    
}

/***
 * 
 Outer loop:0
Inner loop:0 and Outer loop:0
Inner loop:1 and Outer loop:0
Inner loop:2 and Outer loop:0
Inner loop:3 and Outer loop:0
Inner loop:4 and Outer loop:0
Inner loop:5 and Outer loop:0
Inner loop:6 and Outer loop:0
Inner loop:7 and Outer loop:0
Inner loop:8 and Outer loop:0
Inner loop:9 and Outer loop:0
 */



//Printing table
for (let i = 0; i <=10; i++) {
  
    for (let j = 0; j <=10; j++) {
        console.log(`${i} * ${j} = `,i*j);
        //console.log(i+"*"+j+"="+i*j);
        
    }
    
}

/***
 0 * 0 =  0
0 * 1 =  0
0 * 2 =  0
0 * 3 =  0
0 * 4 =  0
0 * 5 =  0
0 * 6 =  0
0 * 7 =  0
0 * 8 =  0
0 * 9 =  0
0 * 10 =  0
 */

//*******for loop on Array */
const myArray=["flask",'batman',"spiderman"]
console.log(myArray.length);                         //3
for (let i = 0; i < myArray.length; i++) {
   console.log(myArray[i]);
    
}

/**
 flask
batman
spiderman
 */

