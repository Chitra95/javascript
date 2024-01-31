const name="Chitra";
const repoCount=2;

// console.log(name + repoCount + " Value"); // outdated way of concatenation strings

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}` ); // new way of using string interpolation

 const gameName=new String("Chitra");
//  // to access any key
//  console.log(gameName[0]); // C

//  //to access prototype
//  console.log(__proto__); //{}

//  //to know length
//  console.log(gameName.length);

//  //toUpperCase
//  console.log(gameName.toUpperCase()); //CHITRA  **remember original string is not changed

//  //to  know character at given position
//  console.log(gameName.charAt(2)); //i

//  //to know position of character
//  console.log(gameName.indexOf('t')); //3



// //substing(start,end)
// const newString=gameName.substring(0,4)
// console.log(newString);      //Chit

// //slice(start,end)
// const anotherString=gameName.slice(-6,4)
// console.log(anotherString); //Chit


//trim
// const newStringOne="           Chitra         ";
// console.log(newStringOne)               //       Chitra
// console.log(newStringOne.trim())        //Chitra

// //replace
// const url="https://hitesh.com/hitesh%20chau"
// console.log(url.replace('%20','-'))           //https://hitesh.com/hitesh-chau

// //includes
// console.log(url.includes('hitesh')); //true
// console.log(url.includes('shhdg'));   //false

// //split
// const gameName1="chitra-lekha-kundaram"
// console.log(gameName1.split('-'));   //[ 'chitra', 'lekha', 'kundaram' ]