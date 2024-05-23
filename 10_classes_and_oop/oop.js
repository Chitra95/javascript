//Object Literal
 const user={
    username:"hitesh",
    loginCount:8,
    signedIn:true,

    getUserDetails:function(){
        console.log("Got user details from database");
        console.log(`Username: ${this.username}`);
        console.log(this);
    }
 }

 console.log(user.username);
 console.log(user["username"]);

 console.log(user.getUserDetails());

 /*
 hitesh
hitesh
Got user details from database
Username; hitesh
{
  username: 'hitesh',
  loginCount: 8,
  signedIn: true,
  getUserDetails: [Function: getUserDetails]
}
undefined
 */