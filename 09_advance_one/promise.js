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



 //________________________________LEARNING FETCH()___________________________
//  async function getAllUsers(){
//     const response=await fetch("https://jsonplaceholder.typicode.com/users")
//     const data=response.json()
//     console.log(data);
//  }
//  getAllUsers()

//  /*
//  output
//  Promise { <pending> }   //bcz time lagta h fetch hone mai
//   */



//-------------Using try n catch
async function getAllUsers(){
try {
    const response=await fetch("https://jsonplaceholder.typicode.com/users")
    // console.log(response);
    const data=await response.json()
    console.log(data);
} catch (error) {
    console.log("E:",error);
}
 }
 getAllUsers()

 /*
 output
response bhi aya
data bhi aya
  */


//------------------------USING .then().catch()
fetch("https://jsonplaceholder.typicode.com/users")
.then((response)=>{
    return response.json()
})
.then( (data)=>{
    console.log(data);
})
.catch( (error)=>console.log(error))

/*
  {
    id: 10,
    name: 'Clementina DuBuque',
    username: 'Moriah.Stanton',
    email: 'Rey.Padberg@karina.biz',
    address: {
      street: 'Kattie Turnpike',
      suite: 'Suite 198',
      city: 'Lebsackbury',
      zipcode: '31428-2261',
      geo: [Object]
    },
    phone: '024-648-3804',
    website: 'ambrose.net',
    company: {
      name: 'Hoeger LLC',
      catchPhrase: 'Centralized empowering task-force',
      bs: 'target end-to-end models'
    }
  }
]

{ username: 'Sai', password: '123' }
 */



//Fetch priority queue mai jata h isiliye pehle execute hota h