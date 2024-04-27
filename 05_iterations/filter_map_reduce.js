//forEach doesnt return anything

const coding=["js","py","ruby"]

// coding.forEach( (item) => {
//     console.log(item)    // js
//                         //py
//                         //ruby
   
// })


//trying to return values from foreach
const values=coding.forEach( (item) => {
    //console.log(item)    // js
                        //py
                        //ruby
    return item
})
//console.log(values);     //undefined



//******************************FILTER:returns values that are true based on condition */
// const myNums=[1,2,3,4,5,6,7,8,9,10]

// const newNums=myNums.filter( (num)=> num>4)
// console.log(newNums);                              //[ 5, 6, 7, 8, 9, 10 ]

//const newNums=myNums.filter( (num)=>{num>4} )
//console.log(newNums);                              //[]        //since {} scope is used give return

//const newNums=myNums.filter( (num)=>{
//      return num>4
// } )
//console.log(newNums);                //[ 5, 6, 7, 8, 9, 10 ]


//Getting same op using foreach
// const myNums=[1,2,3,4,5,6,7,8,9,10]
// const newNums=[]
// myNums.forEach( (num) => {
//         if(num>4){
//             newNums.push(num)
//         }
// })
// console.log(newNums);     //[ 5, 6, 7, 8, 9, 10 ]

///*********EXAMPLE */
const book=[
    { title:"Book 1", genre:"History", publish:1986, edition:1996} ,
    { title:"Book 2", genre:"Science", publish:1996, edition:2006} ,
    { title:"Book 3", genre:"History", publish:2000, edition:2005} ,
    { title:"Book 4", genre:"Science", publish:2005, edition:2019} 

]

let userbooks=book.filter(  (bk) => bk.genre==="History")
//console.log(userbooks);

/*
[
  { title: 'Book 1', genre: 'History', publish: 1986, edition: 1996 },
  { title: 'Book 3', genre: 'History', publish: 2000, edition: 2005 }
]
*/

 userbooks=book.filter(  (bk) => {
    return bk.genre==="Science"
})
//console.log(userbooks);
/*
[
  { title: 'Book 2', genre: 'Science', publish: 1996, edition: 2006 },
  { title: 'Book 4', genre: 'Science', publish: 2005, edition: 2019 }
]
*/

userbooks=book.filter(  (bk) => {
    return bk.genre==="Science" && bk.publish>=1996
})

//console.log(userbooks);
/*
[
  { title: 'Book 2', genre: 'Science', publish: 1996, edition: 2006 },
  { title: 'Book 4', genre: 'Science', publish: 2005, edition: 2019 }
]
*/


