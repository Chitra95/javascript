//2ways of declaring a obj 1.literals  2.contructors
//constuctor     Object.create        in this singleton is form

//Object literals

//declaring symbol
const mySym=Symbol("key1")

//declaring obj
const jsUser={
    name:"Chitra",
    age:18,
    [mySym]:"mykey1",
    email:"ck@gmail.com",
    isLoggedIn:false,
    lastLoggedDays:["Mon","Sat"],
    location:"Bhiwandi"
}

//accessing obj
// console.log(jsUser.name);                //Chitra

//other way of accessing
// console.log(jsUser["name"]);                //Chitra

//  console.log(jsUser[mySym]);                    //mykey1

//  console.log(typeof jsUser[mySym]);             //string
//  console.log(typeof mySym);                     //symbol

//to change value
// jsUser.age=20

//print
// console.log(jsUser);

//freezing obj so tht you wont change any value
// Object.freeze(jsUser)

//trying to change value
// jsUser.age=21

//print
// console.log(jsUser);  

/* 
{
  name: 'Chitra',
  age: 20,                                             // obj freeze before adding age 21
  email: 'ck@gmail.com',
  isLoggedIn: false,
  lastLoggedDays: [ 'Mon', 'Sat' ],
  location: 'Bhiwandi',
  [Symbol(key1)]: 'mykey1'
}
*/



//Adding function in obj
jsUser.greeting=function(){
    console.log("hello js user");
}

//print
console.log(jsUser.greeting);                         //[Function (anonymous)]

console.log(jsUser.greeting());   //hello js user
                                //undefined


jsUser.greetingTwo=function(){
    console.log(`hello js user,${this.name}`);
}

console.log(jsUser.greetingTwo());  //hello js user,Chitra
                                     //undefined
