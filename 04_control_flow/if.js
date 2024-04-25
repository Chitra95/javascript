//if 
//***********Syntax:
//if (condition) {
    
//}

//*************Comparison operator:   <,>,<=,>=,==,!=,===,!==
//2=='2'   //true
//2==='2'   //false

// const userLoggedIn=true
// if(userLoggedIn){
//     console.log("yes logged in");  //yes logged in
// }


// const temperature=41
// if(temperature<50){
// console.log("less than 50");
// }else{
//     console.log("greater than 50");
// }

//*************scope in if */
// const score=200
// if(score>100){
//     const power="fly";
//     console.log(`user power: ${power}`);  //user power: fly
// }
// console.log(`user power: ${power}`);  //ReferenceError: power is not defined         cant access outside scope


//*********Short end notation
// const balance=1000
// if(balance>500) console.log("test");   //test

// if(balance>500) console.log("test"), console.log("test 2");   //dont write this way
// //test
// //test 2


//***********nested if */
// const balance=1000
// if(balance<500){
//     console.log("less than 500");
// }else if(balance<750){
//     console.log("less than 750");
// }else if(balance<900){
//     console.log("less than 900");
// }else{
//     console.log("less than 1200");   //less than 1200
// }



//*************REAL LIFE EXAMPLES */
const userLoggedIn=true
const debitcard=true
const loggedInFromGoogle=false
const loggedInFromEmail=true

// if(userLoggedIn && debitcard){
//     console.log("Allowed to buy course");    //since both true       Allowed to buy course
// }
// if(loggedInFromGoogle || loggedInFromEmail){
//     console.log("user logged in");           //anyone is true        user logged in
// }