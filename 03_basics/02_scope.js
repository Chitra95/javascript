// //declaring variables
// let a=10;
// const b=20;
// var c=30;

// console.log(a);     //10
// console.log(b);     //20
// console.log(c);     //30


//using scope and understanding

// if(true){
//     let a=10;
//     const b=20;
//     var c=30;
// }

// console.log(a);    //ReferenceError: a is not defined
// console.log(b);     //ReferenceError: b is not defined
// console.log(c);             //30  //var is accessible evn outside scope


//example for var:accessible outside
// var c=300;
// if(true){

//     var c=30; or
//     c=20
//     console.log(c)   //30
// }
// console.log(c)//30


//example for let: not accesible outside
// let c=300;
// if(true){

//   let c=30;
//     c=20
//     console.log("inner",c)   //inner 20
// }
// console.log("outer",c)      //outer 300


/***********************************Nested scopess */
   
// function one() {
//     const username="chitra"

//     function two(){
//         const website="youtube"
//         console.log(username);  //accessible since parent ka h   //chitra
//     }
//     //console.log(website);   //1st error not accessible    child mai present h

//     //two() //after called its fn is executed            //if commented ntg is executed
// }

//one() 

if(true){
    const username="chit";

    if(username==="chit"){
        const website="  youtube";
        //console.log(username+website);      //chit  youtube
    }
    //console.log(website);    //cant access out of scope declaration    //ReferenceError: website is not defined
}
//console.log(username);   //cant access out of scope declaration     //ReferenceError: username is not defined



//********interesting****** */


// function addOne(num){
//     return num+1
// }
//console.log(addOne(5))   //6



// const addTwo=function(num){
//     return num+2
// }
//console.log(addTwo(10))   //12




//****decalaring function aftr calling */

// console.log(addOne(5))   //6 //no problm
// function addOne(num){
//     return num+1
// }   



// console.log(addTwo(10))   //not allowed to use variable before declaration
// const addTwo=function(num){
//     return num+2
// }

//ReferenceError: Cannot access 'addTwo' before initialization