//Object.getOwnPropertyDescriptor()
// console.log(Math.PI)   //3.141592653589793
// Math.PI=123;
// console.log(Math.PI)   //3.141592653589793   //didnt change

// const descriptor=Object.getOwnPropertyDescriptor(Math,"PI")
// console.log(descriptor);
/* {
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false
} */

//Creating own Object :FACTORY FUNCTION
// const mynewObject=Object.create(null)

// const chai={
//     name:"ginger Chai",
//     price:"250",
//     isAvailable:true
// }
// console.log(chai); //{ name: 'ginger Chai', price: '250', isAvailable: true }
// console.log(Object.getOwnPropertyDescriptor(chai,"name"));    
/*
{
  value: 'ginger Chai',
  writable: true,
  enumerable: true,
  configurable: true
}
*/

// Object.defineProperty(chai,"name",{
//     writable:false,
//     enumerable:false
// })
// console.log(Object.getOwnPropertyDescriptor(chai,"name"));
/*
{
  value: 'ginger Chai',
  writable: false,
  enumerable: false,
  configurable: true
}
*/


// -------------
// const chai={
//     name:"ginger Chai",
//     price:"250",
//     isAvailable:true,

//     orderChai:function(){
//         console.log("chai nhi bani");
//     }
// }
// for (const [key,value] of Object.entries(chai)) {
//     console.log(`${key} : ${value}`);
// }
/*
name : ginger Chai
price : 250
isAvailable : true
orderChai : function(){
        console.log("chai nhi bani");
    }

*/


//looping fn mai bhi hua so chnaging code
const chai={
    name:"ginger Chai",
    price:"250",
    isAvailable:true,

    orderChai:function(){
        console.log("chai nhi bani");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai,"name"));
Object.defineProperty(chai,"name",{
    writable:false,
    enumerable:false  //is responsible for looping   false :it wont loop
})
//so tht we wont loop "name"


for (const [key,value] of Object.entries(chai)) {
    if(typeof value !== 'function'){
    console.log(`${key} : ${value}`);

    }

}
/* 
name : ginger Chai
price : 250
isAvailable : true
*/