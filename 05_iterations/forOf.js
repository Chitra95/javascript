//*****************************************forOf on array          ARRAY  STRING  MAP(diff)  
                                                                    //obj pe kaam nhi karega

//syntax
// for (const iterator of object) {
    
// }


//Eg1
const arr=[1,2,3,4,5]
for (const num of arr) {
    //console.log(num);
}

/**
 1
2
3
4
5
 */

//*****************************************forof on strings */
const greetings="Hello World!"
for (const greet of greetings) {
    //console.log(greet);
}
/**
 H
e
l
l
o
 
W
o
r
l
d
!
 */

//**************MAPS */
const map=new Map()
map.set("IN","INDIA")
map.set("Fr","France")
map.set("Fr","France")  //no duplicate entry

//console.log(map);    //Map(2) { 'IN' => 'INDIA', 'Fr' => 'France' }

//wrong output array
for (const key of map) {
    //console.log(key);                              // [ 'IN', 'INDIA' ]
                                                    // [ 'Fr', 'France' ]
}
//right
for (const [key,value] of map) {
   // console.log(`${key}':-'${value}`);                    //IN':-'INDIA
   //console.log(key,":-",value);                                          // Fr':-'France
}

//*****for of on object wont work */
const myObj={
    game1:"NFC",
    game2:"spiderman"
}

for (const [key,value] of myObj) {
    // console.log(`${key}':-'${value}`); 
    // console.log(key,":-",value);
    
}


//ERRORR_____________TypeError: myObj is not iterable


