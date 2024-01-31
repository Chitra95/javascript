const accountId=1443; // value cant be changed
let accountEmail="chit@google.com"; // better practice for scope declaration
var accountPassword="12345"; /*dont use bcz of issue in block scope and functional scope*/
accountCity="Bhiwandi"; //never use this way
let accountState; // you can declare and leave no problem

// accountId=123;  // not allowed
console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);
