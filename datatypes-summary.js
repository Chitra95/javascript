/************2 types of data ******* */

//1.Primitive => Call by value
/*7types 
 String,Number,Boolean,Null,undefined,Symbol,BigInt */
//  const score=100;
//  const scoreValue=10.3
//  const isLoggedIn=false
//  const outsideTemp=null
//  let userEmail; //undefined
//  let userEmail1=undefined

//  const id=Symbol('123')
//  const id2=Symbol('123')
//  console.log(id===id2);         => //false
 
// const bigNumber=235652347634534857345n



//2.Non Primitive => call by reference
//Arrays,Objects,Functions
//array
const heros=['shaktiman','doga','hanuman'];

// objects
let myObj={
    name:'chitra',
    age:21,
}

//function
const myFunction=function(){
    console.log("hello world");
}


// console.log(typeof score);  // number
// console.log(typeof scoreValue); //number
// console.log(typeof isLoggedIn); //boolean
// console.log(typeof outsideTemp); //object
// console.log(typeof userEmail1); //undefined
// console.log(typeof id); //symbol
// console.log(typeof bigNumber); //bigint
// console.log(typeof heros); //object
// console.log(typeof myObj); //object
// console.log(typeof myFunction); //function




//+++++++++++++++++++++++++++++++++++++++
//************************MEMORY ************ */
//STACK(primitive) and HEAP(non-primitive)

/*****stacks - you get copy of variable therefore value is not changed*/
// let myYoutubename="chitradot.com"
// let anothername=myYoutubename
// //console.log(anothername); //chitradot.com
// anothername="chaiaurcode";
// console.log(myYoutubename); //chitradot.com
// console.log(anothername); //chaiaurcode



/****************heaps-non-primitive - since you got reference to original value therefor if you make changes then original value also gets change******** */
let userOne={
    email:"user@google.com",
    upi:"user@ybl"
}

let userTwo=userOne;

userTwo.email="chitra@google.com";

console.log(userOne.email); //chitra@google.com
console.log(userTwo.email); //chitra@google.com







