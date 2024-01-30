/* Conversion to number */
let score=true;
//console.log(typeof score);
//console.log(score);

let valueInNumber=Number(score);
//console.log(typeof valueInNumber);
//console.log(valueInNumber);


//values of datatypes aftr converting them to number
//"33"  => 33
//"33abc" => NaN
//null => 0
//undefined => NaN
//true => 1; false=>0





/* Conversion to boolean */
let isLoggedIn=1;
let booleanIsLoggedIn=Boolean(isLoggedIn);
//console.log(booleanIsLoggedIn);

//1=>true; 0=>false
//"" => false
//"chitra"=> true





/* Conversion to string */
let someNumber=33;
let stringNumber=String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);

//33=> 33




/*******************OPERATIONS******************/

let value=3
let negValue=-value
// console.log(negValue);

// console.log(2+3);
// console.log(2-3);
// console.log(2*3);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);


/***********CONCATENATION OF STRINGS *************/
let str1="hello"
let str2=" chitra"
let str3=str1+str2;
// console.log(str3);


// console.log("1"+2); //12
// console.log(1+"2"); //12

//dont use this
// console.log("1"+2+2); //122
// console.log(1+2+"2"); //32
// console.log((3+4)*5%3); //2
// console.log(true) //true
// console.log(+true) //1
// // console.log(true+) //error
// console.log(+"") //0   since ""=> denotes false


//wrong way
// let num1,num2,num3
// num1=num2=num3=2+2;

let gameCounter=100;
console.log(gameCounter);
gameCounter++;
console.log(gameCounter);


let gameCounter1=100;
console.log(gameCounter1);
--gameCounter1;
console.log(gameCounter1);
