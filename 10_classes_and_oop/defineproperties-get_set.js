//GETTER SETTER USING DEFINE PROPERTIES

function User(email,password){
    this._email=email;
    this._password=password;

    Object.defineProperty(User,"email",{
        get:function(){
            return this._email.toUpperCase()
        },
        set:function(value){
            this._email=value
        }
    })

    Object.defineProperty(User,"password",{
        get:function(){
            return this._password.toUpperCase()
        },
        set:function(value){
            this._password=value
        }
    })
}
const chai=new User("c@c.com","abcd")
console.log(chai);
console.log(chai._email);
console.log(chai._password);

/*
User { _email: 'c@c.com', _password: 'abcd' }
c@c.com
abcd
*/