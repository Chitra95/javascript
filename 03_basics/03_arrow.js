//declaring obj
// const user={
//     username:'chitra',
//     price:999,
//     welcomeMessage:function(){
//         console.log(`${this.username},welcome to website`);
//         console.log(this)
//     }
// }



//user.welcomeMessage                 //

//user.welcomeMessage()
/**
 
chitra,welcome to website
{
  username: 'chitra',
  price: 999,
  welcomeMessage: [Function: welcomeMessage]
}
 
 */


// user.username="sam"
//user.welcomeMessage()

/***
 sam,welcome to website
{
  username: 'sam',
  price: 999,
  welcomeMessage: [Function: welcomeMessage]
}
 */







/******* this in node environment*/
// console.log(this)  //{}

// function chai(){
//     console.log(this);   
// }
// chai()

/***                    <ref *1> Object [global] {
  global: [Circular *1],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },            */



//   function chai(){
//     let username="sai"
//     console.log(this);   
// }
// chai()

/*****<ref *1> Object [global] {
  global: [Circular *1],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },*/



  
//   function chai(){
//     let username="sai"
//     console.log(this.username);   //undefined       //this works in obj not in fn
// }
// chai()


// const chai=function(){
//     let username="sai"
//     console.log(this.username);   //undefined       //this works in obj not in fn
// }
// chai()





/*****************************ARROW FN */
//          ()=>{}

// const chai=()=>{
//     let username="chan";
//     console.log(this.username);           //undefined
//     console.log(this);              //{}
// }
// chai()


//Explicit arrow fn
// const addTwo=(n1,n2)=>{
//     return n1+n2
// }
// console.log(addTwo(3,4));       //7


//Implicit arrow fn
// const addTwo=(n1,n2)=> n1+n2
// console.log(addTwo(3,4));   //7


//other way used in react
// const addTwo=(n1,n2)=> (n1+n2)
// console.log(addTwo(3,4));  //7


//Returning a object
// const addTwo=(n1,n2)=>{name:"chit"}   //undefined
// console.log(addTwo(3,4)); 

// const addTwo=(n1,n2)=>({name:"chit"} )
// console.log(addTwo(3,4));                   //{ name: 'chit' }




// //***************arrow fn in loops***************
// const myArray=[1,2,3]

// myArray.forEach(function(){})   //classic fn

// myArray.forEach(()=>{})  //arrow fn

// myArray.forEach(()=>())  //arrown fn


//*************************IIFE Immediately invoked fn expressions */
// function chai(){
//     console.log(`DB CONNECTED`);      //DB CONNECTED
// }
// chai()

//*******NAMED IIFE******  ()();
// (function chai(){
//     console.log(`DB CONNECTED`);      //DB CONNECTED
// })();

/****ARROW FN IIFE         no named iife **/
// (
//     ()=>{
//         console.log(`DB conn`);    //DB conn
//     }
// )();

//Value pass in iife

(
    (name)=>{
        console.log(`DB conn ${name}`);    //DB conn venu
    }
)('venu');