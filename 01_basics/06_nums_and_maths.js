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


