//Reduce() mostly used in shoppping cart

//function in reduce
//function(accumulator,currentvalueOfArray){
    //        return accumulator+currentvalueOfArray
    //           },startValue

// const myNums=[1,2,3]
// const myTotal=myNums.reduce( function(acc,currval){
//     return acc+currval
// },0)

// //console.log(myTotal);       //6






// const myNums=[1,2,3]
// const myTotal=myNums.reduce( function(acc,currval){
//     console.log(`acc:${acc}  and currentvalue:${currval}`);  /**
//                                                                      acc:0  and currentvalue:1
//                                                                     acc:1  and currentvalue:2
//                                                                     acc:3  and currentvalue:3 */


//     return acc+currval
// },0)


// //console.log(myTotal);       //6



//Using Arrow fn in reduce

const myNums=[1,2,3]
const myTotal=myNums.reduce( (acc,curr)=>acc+curr,0)
console.log(myTotal);       //6

//Example
const shopppingCart=[
    {
        course:'py',
        price:999
    },
    {
        course:'ruby',
        price:1000
    },
    {
        course:'js',
        price:2000
    }

]

const priceToPay=shopppingCart.reduce( (acc,item) => acc+item.price  ,  0)  //item is obj here to access use "." notation
console.log(priceToPay);   //3999