function multiplyBy5(num){
    return num*5
}
multiplyBy5.power=10
console.log(multiplyBy5(12))
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype)


/*
60
10
{}
*/


function createUser(username,score){
    this.username=username
    this.score=score
}
//declaring own fn
createUser.prototype.increment=function(){
    this.score++

}

createUser.prototype.printMe=function(){
   console.log(`Price is ${this.score}`);
    
}

const chai=new createUser("Chai","25")
const tea=new createUser("Tea","250")
chai.printMe()  //Price is 25
 tea.increment()
console.log(tea);           //createUser { username: 'Tea', score: 251 }

//prototype
let myName="hitesh"
console.log(myName.length);    //6
let myName2="hitesh         "
console.log(myName2.length);   //15
console.log(myName2.trim().length);   //6


//
let Heros=["thor","spiderman"]    //array
 
//obj
let heroPower={
    thor:"hammer",
    spiderman:"sling",

    getspiderPower:function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

//Adding own function to object
Object.prototype.hitesh=function(){
    console.log(`hitesh is present in all objects`);
}

heroPower.hitesh() // hitesh is present in all objects
Heros.hitesh()    //hitesh is present in all objects



//Inheritance

const User={
    name:"chai",
    email:"c@gmail.com"
}
const Teacher={
    make:true
}
const TeachingSupport={
    isAvailable:false
}
const TASupport={
    makeAssignments:"Js assignments",
    fullTime:true,
    __proto__:TeachingSupport             //inherit
}

Teacher.__proto__=User  //inheritance
//modern syntax'
Object.setPrototypeOf(TeachingSupport,Teacher)



let anotherUser="CCC               "
String.prototype.trueLength=function(){
    console.log(`${this}`);
    console.log(`true length is ${this.trim().length}`);
}

anotherUser.trueLength()

"Chitra".trueLength()

/*
CCC               
true length is 3
Chitra
true length is 6
*/