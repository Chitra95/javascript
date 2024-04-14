//declaring arrays
const myArr=[0,1,2,3,4,5]
// const myheros=['shakktiman','naagraj']

// const myArr2=new Array(1,3,5,6)
// console.log(myArr[0]);  //1 

//array methods
//myArr.push(6)
// //console.log(myArr);
// myArr.push(7)
// console.log(myArr); //[0, 1, 2, 3,4,5, 6, 7]

// myArr.pop()
// console.log(myArr); //[ 0, 1, 2, 3, 4,5, 6 ]

// myArr.unshift(9)
// console.log(myArr);       //[9, 0, 1, 2,3, 4, 5, 6]



// myArr.shift()
// console.log(myArr);    // [ 0, 1, 2,3, 4, 5, 6]

// const chit=[1,2,3,4,5]
// chit.unshift(0)    //[ 0, 1, 2, 3, 4, 5 ]
// console.log(chit);
// chit.shift()      //[ 1, 2, 3, 4, 5 ]
// console.log(chit);


//Question type methods
// console.log(myArr.includes(9))  //false
// console.log(myArr.indexOf(9))   //-1
// console.log(myArr.indexOf(3))   //3

// const newArr=myArr.join()
// console.log(myArr); //[ 0, 1, 2, 3, 4, 5 ]
// console.log(newArr);   //0,1,2,3,4,5
// console.log( typeof newArr);   //string


console.log("A",myArr);  //A [ 0, 1, 2, 3, 4, 5 ]

const myn1=myArr.slice(1,3)
console.log(myn1);   //[ 1, 2 ]
console.log("B" ,myArr);  //B [ 0, 1, 2, 3, 4, 5 ]

const myn2=myArr.splice(1,3)
console.log(myn2);  //[ 1, 2, 3 ]
console.log("C" ,myArr);  //C [ 0, 4, 5 ]  //originaln array is changed