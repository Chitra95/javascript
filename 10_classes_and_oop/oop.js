//Object Literal
//  const user={
//     username:"hitesh",
//     loginCount:8,
//     signedIn:true,

//     getUserDetails:function(){
//         console.log("Got user details from database");
//         console.log(`Username: ${this.username}`);
//         console.log(this);
//     }
//  }

//  console.log(user.username);
//  console.log(user["username"]);

//  console.log(user.getUserDetails());

 /*
 hitesh
hitesh
Got user details from database
Username: hitesh
{
  username: 'hitesh',
  loginCount: 8,
  signedIn: true,
  getUserDetails: [Function: getUserDetails]
}
undefined
 */


//---------------Chontructor function
// const promiseOne=new Promise()
const date=new Date()

function User(username,email,password){
  this.username=username;
  this.email=email;
  this.password=password;

  this.greeting=function(){
    console.log(`Welcome ${this.username}`);
  }

  return this
}

const userOne= new User("hitesh","h@gmail.com","123")
console.log(userOne)
console.log(userOne.greeting())
console.log(userOne.constructor)

/*User {
  username: 'hitesh',
  email: 'h@gmail.com',
  password: '123',
  greeting: [Function (anonymous)]
}
Welcome hitesh
undefined
[Function: User]*/


// const userTwo=new User("h","h@gmail.com","123")
// console.log(userTwo)

/* User { username: 'hitesh', email: 'h@gmail.com', password: '123' }
User { username: 'h', email: 'h@gmail.com', password: '123' } */

