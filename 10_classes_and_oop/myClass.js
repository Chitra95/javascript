class User{
    constructor(username,email,password){
        this.username=username;
        this.email=email;
        this.password=password;

    }

    encryptPassword(){
        return `${this.password}abc`
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const chai=new User("chai","chai@chai.com","123")
console.log(chai);   //User { username: 'chai', email: 'chai@chai.com', password: '123' }
console.log(chai.encryptPassword());  //123abc
console.log(chai.username);    //chai
console.log(chai.changeUsername());   //CHAI

//if "class" syntax absent thn "functions" use krte
function User1(username,email,password){
    this.username=username;
    this.email=email;
    this.password=password;

}

User1.prototype.encryptPassword=function(){
    return `${this.password}abc`
}

User1.prototype.changeUsername=function(){
    return `${this.username.toUpperCase()}`
}

const Tea=new User1("tea","t@tea.com","abc")
console.log(Tea);   //User1 { username: 'tea', email: 't@tea.com', password: 'abc' }
console.log(Tea.username);            // tea
console.log(Tea.changeUsername());   //TEA
console.log(Tea.encryptPassword());  //abcabc

