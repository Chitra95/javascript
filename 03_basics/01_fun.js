//fuction definition

function sayMyName(){
    console.log("C");
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("R");
    console.log("A");
}


//sayMyName    fn reference

//function call
// sayMyName();                //C
                                //H
                                //I
                                //T
                                //R
                                //A

//Function add 2 no
// function addTwoNumbers(n1,n2){
//     console.log(n1+n2);

// }

// const result=addTwoNumbers(2,3);
// console.log( "result:",result);  //5
//                                 //result: undefined   //bcz fn didnt return anything



//fn return
// function addTwoNumbers(n1,n2){
//     let result=n1+n2
//     return result

// }
// const result=addTwoNumbers(2,3);
// console.log( "result:",result);    //result: 5






// fn return
// function addTwoNumbers(n1,n2){
//     return n1+n2

// }
// const result=addTwoNumbers(2,3);
// console.log( "result:",result);    //result: 5



 //*******************************
//New function
// function loginUserMessage(username){
//     return `${username} just logged in`
// }

//loginUserMessage("Chitra")   // 
 //console.log(loginUserMessage("Chitra"));    //Chitra just logged in
// console.log(loginUserMessage(""));      // just logged in
// console.log(loginUserMessage());   //undefined just logged in




//Checking before execution using if          ntg is passed

// function loginUserMessage(username){
//     if(username===undefined){                           //if(!username){}
//         console.log("Plz enter username");
//         return                                       //next lines will nt be executed
//     }

//     return `${username} just logged in`
// }

// console.log(loginUserMessage());            //Plz enter username
                                            //undefined




//giving default value
function loginUserMessage(username="sam"){
    return `${username} just logged in`
}
// console.log(loginUserMessage());                //sam just logged in
// console.log(loginUserMessage('Chitra'));        //Chitra just logged in




/************************  Lect 20  ****************************** */

// function calculateCartPrice(num1){
//     return num1
// }
// console.log(calculateCartPrice(2));      //2




// function calculateCartPrice(num1){
//     return num1
// }
// console.log(calculateCartPrice(200,400,600));   //200



//passing multiple value soln     rest operator
// function calculateCartPrice(...num1){
//     return num1
// }
// console.log(calculateCartPrice(200,400,600));     //[ 200, 400, 600 ]  *array*



// function calculateCartPrice(val1,val2,...num1){
//     return num1
// }
// console.log(calculateCartPrice(200,400,600,1000,2000));   //[ 600, 1000, 2000 ]   ssince val1=200  val2=400




/************* Passing Object into fn************** */
// const user={
//     username:"chitra",
//     price:99
// }

// function handleObject(anyobj){
//     console.log(`username is ${anyobj.username} and price is ${anyobj.price}`)   //username is chitra and price is 99
// }

// handleObject(user)




// const user={
//     username:"chitra",
//     pricessss:99
// }

// function handleObject(anyobj){
//     console.log(`username is ${anyobj.username} and price is ${anyobj.price}`)   //username is chitra and price is undefined bcz pricessss
// }

// handleObject(user)




//Passing direct object into function

function handleObject(anyobj){
    //console.log(`username is ${anyobj.username} and price is ${anyobj.price}`)   //username is sam and price is 300
}

handleObject({
    username:"sam",
    price:300
})



/**************************passing array into fn */

const myNewArray=[200,400,800,8000]
function returnSecondValue(getArray){
    return getArray[1]
}
//console.log(returnSecondValue(myNewArray));   //400
console.log(returnSecondValue([1,2,3,4]));       //2








