const score=400     //js knows automactically it is a number
console.log(score)         //400 
 
const balance=new Number(100); // to define explicitly
console.log(balance)     //[Number: 100]

//string and string methods on number
console.log(balance.toString());    //100
console.log(balance.toString().length);  //3

//number methods
console.log(balance.toFixed(2));  //100.00

//precision on numbers
const otherNumber=23.8966
console.log(otherNumber.toPrecision(3)); //23.9

const otherNumber1=123.8966
console.log(otherNumber1.toPrecision(3)); //124       // 1123.8966 => 1.12e+3

//toLocaleString
const hundred=10000000
console.log(hundred.toLocaleString()) //10,00,000

const hundred1=1000000
console.log(hundred1.toLocaleString('en-IN')) //10,00,000


//in browser console
// NUMBER 
// NUMBER.MAX_VALUE
// NUMBER.MIN_VALUE
// NUMBER.MAX_SAFE_INTERGER



/*********************************MATHS************* */
// console.log(Math)

// console.log(Math.abs(-4)) //4    only -ve to positive hota h

// console.log(Math.round(5.3)); //5
// console.log(Math.round(5.6)); //6
// console.log(Math.round(5.5)); //6

// console.log(Math.ceil(6.3)); //7 
// console.log(Math.ceil(6.5)); //7
// console.log(Math.ceil(6.6)); //7

// console.log(Math.floor(6.3)); //6
// console.log(Math.floor(6.5)); //6
// console.log(Math.floor(6.6));//6

// console.log(Math.max(4,5,8,2));  //8
 // console.log(Math.min(4,5,8,2)); //2

// console.log(Math.random())  //0.0 to 0.9
// console.log(Math.random()*6)  //0.0 to 5.9
// console.log((Math.random()*6)+1)  // 1.0 to 6.9
// console.log(Math.floor(Math.random()*6)+1)  //1 to 6


const min=10
const max=20
console.log(Math.random()*(max-min+1)) //0.0 to 10.9
console.log(Math.random()*(max-min+1)+min) //10.0 to 20.9
console.log(Math.floor(Math.random()*(max-min+1)+min)) //10 to 20 
