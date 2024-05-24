// class User{
//     constructor(username){
//         this.username=username;

//     }

//     logMe(){
//         console.log(`Username is ${this.username}`);
//     }

//     createId(){
//         return `123`
//     }
// }

// const hitesh=new User("hitesh")
// console.log(hitesh);   //hitesh.createId()
// hitesh.logMe()  //Username is hitesh
// console.log(hitesh.createId()); //123




//____________useing static
class User{
    constructor(username){
        this.username=username;

    }

    logMe(){
        console.log(`Username is ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

class Teacher extends User{
    constructor(username,email){
        super(username)
         this.email=email;
    }
}

const hitesh=new User("hitesh")
console.log(hitesh);   //hitesh.createId()
hitesh.logMe()  //Username is hitesh
//console.log(hitesh.createId()); //TypeError: hitesh.createId is not a function

const iphone=new Teacher("iphone","t@t.com")
console.log(iphone);   //Teacher { username: 'iphone', email: 't@t.com' }
iphone.logMe()      //Username is iphone
// iphone.createId()   //TypeError: iphone.createId is not a function
