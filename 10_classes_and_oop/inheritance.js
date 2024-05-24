class User{
    constructor(username){
        this.username=username
    }

    logMe(){
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username,email,password){
    
        super(username)
        this.email=email;
        this.password=password;
    }

    addCourse(){
        console.log(`A new course is added by ${this.username}`);
    }
}

const chai=new Teacher("chai","chai@c.com","123")
console.log(chai);   //Teacher { username: 'chai', email: 'chai@c.com', password: '123' }
chai.logMe();     //Username is chai
chai.addCourse();  //A new course is added by chai

const masalaChai=new User("masalachai")
console.log(masalaChai);  //User { username: 'masalachai' }
masalaChai.logMe()   //Username is masalachai
// masalaChai.addCourse()   //--Error you cant access

console.log(chai===masalaChai);   //false
console.log(chai===Teacher);   //false
console.log(Teacher===User);    //false

console.log(chai instanceof Teacher);   //true
console.log(masalaChai instanceof User);  //true
console.log(chai instanceof User);  //true
console.log(Teacher instanceof User);   //false


