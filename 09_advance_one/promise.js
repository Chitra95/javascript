//Syntax of Promise:

/*
Promise(function(resolve,reject){
do async task
db calls
Cryptography
network request
})
*/

// ____________________________________________________________________Way1
//Creating promise
// const promiseOne=new Promise(function(resolve,reject){
// setTimeout(function(){
//     console.log("Async task is completed");
//     resolve()
// },1000)
// })

// //consuming promise
// promiseOne.then(function(){
//     //console.log("Promise Consumed");
// })

/* OUtput
Async task is completed
Promise Consumed
*/


// ____________________________________________________________________Way2
// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("async task 2");
//         resolve()
//     },1000)
// }).then(function(){
//     console.log("async 2 resolved");
// })

/* OUtput
async task 2
async 2 resolved
*/


// ____________________________________________________________________Way3
// const promiseThree=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("promise3");
//         resolve({username:"Chitra",password:"123"})
//     },1000)
// })
// promiseThree.then(function(user){
//     console.log(user);
// console.log(user.username);
// })

/* output
promise3
{ username: 'Chitra', password: '123' }
Chitra
 */


// ____________________________________________________________________Way4
// const promiseFour=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error=false
//         if(!error){
//         resolve({username:"Sai",password:"123"})
            
//         }else{
//             reject("ERROR:SOMETHING WENT WRONG")
//         }
//     },1000)
// })

// //Chaining
// promiseFour
// .then((user)=>{
//     console.log(user)
//     return user.username
// })
// .then((username)=>{
//     console.log(username);
// })
// .catch(function(error){
//     console.log("E:",error);
// })
// .finally(()=>{
//     console.log("promise is either resolved or rejected");
// })
/*
op if error false
{ username: 'Sai', password: '123' }
Sai
promise is either resolved or rejected

op if error true
E: ERROR:SOMETHING WENT WRONG
promise is either resolved or rejected
*/


// ____________________________________________________________________Way5
const promiseFive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false
        if(!error){
        resolve({username:"Sai",password:"123"})
            
        }else{
            reject("ERROR:SOMETHING WENT WRONG")
        }
    },1000)
})

// async function consumePromiseFive(){
//    // await promiseFive() //()is not used for consuming promise bcz it is object
//    const response=await promiseFive
//    console.log(response);
// }
// consumePromiseFive()

// /*op
// if error false
// { username: 'Sai', password: '123' }

// if error true ----use try catch
// */

async function consumePromiseFive(){
   try {
    const response=await promiseFive
    console.log(response);
   } catch (error) {
    console.log("There is e",error);
   }
    
 }
 consumePromiseFive()
 
 /*op
 if error false
 { username: 'Sai', password: '123' }
 
 if error true ----use try catch
 There is e ERROR:SOMETHING WENT WRONG
 */