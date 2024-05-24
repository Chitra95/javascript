//GETTER SETTER IN CLASSES

class User{
    constructor(email,password){
        this.email=email;
        this.password=password;
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email=value
    }

    get password(){
        return `${this._password}hitesh`
    }
    set password(value){
        this._password=value
    }
}

const hitesh=new User("h@h.com","abc")
console.log(hitesh);  //User { _email: 'h@h.com', _password: 'abc' }
console.log(hitesh.email);  //H@H.COM
console.log(hitesh.password);    //abchitesh



