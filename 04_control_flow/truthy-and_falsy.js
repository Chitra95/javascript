//its assumes true and false acc to itself

// const userEmail="h@gmail"  //true       got user email
// const userEmail=""            //false      Dont have user email
// const userEmail=[]             //true       got user email

// if(userEmail){
//     console.log("got user email");
// }
// else{
//     console.log("Dont have user email");
// }

//*********FALSY VALUES */
//   false,    0   ,   -0   ,   BigInt 0n   ,     ""  with no space  ,  null   ,   undefined   ,   NaN

//************TRUTHY VALUES */
// "0"   ,    'false'   ,        "  "       ,   []   , {}  ,   function(){}


//*******TO CHECK IF ARRAY IS EMPTY */
// const userEmail=[]
// if(userEmail.length===0){
//     console.log("array is empty");  //array is empty
// }


//******To CHECK IS OBJECT IS EMPTY */
// const emptyObj={}
// if(Object.keys(emptyObj).length===0){
//     console.log("Object is empty");    //Object is empty
// }



//**check in browser console */  
//all true
//false==0        
//false==''
//0==''



//NULLISH COALESCING OPERATOR (??)      used for null undefined

// let val1;
// val1=5??10
// console.log(val1)  //5

// val1=null??10
// console.log(val1)  //10

// val1=undefined??20
// console.log(val1)  //20


// val1=null??10??15
// console.log(val1)  //10


//TERNARY OPERATOR
//SYNTAX
//condition?true:false

//EXAMPLE
const price=100;
// price<80?console.log("less than 80"):console.log("more than 80");   //more than 80