//FORIN             OBJECT   ARRAY
                   // MAP pe nhi karega



 //**** FORIN on     OBJECT*/
const myObject={
    js:"javascript",
    rb:"ruby",
    cpp:"C++",
    java:"java"

}
//syntax
// for (const key in object) {
   
// }

for (const key in myObject) {
    //console.log(key);
}    
/** only key
 js
rb
cpp
java
 */

for (const key in myObject) {
  //console.log(`${key} shortcuut for ${myObject[key]}`);   //myObject[key]  can access value
}

/***
 js shortcuut for javascript
rb shortcuut for ruby
cpp shortcuut for C++
java shortcuut for java 
 */




 //**** FORIN on     ARRAy*/

 const programming=["js","rb","py","java"]
 for (const key in programming) {
   //console.log(key);
 }

 /* keys are index in array
0
1
2
3*/

//for  value in array
for (const key in programming) {
   // console.log(programming[key]);
  }

  /**
js
rb
py
java
   */


 //**** FORIN on     MAP*/  //wont work
 const map=new Map()
 map.set("IN","INDIA")
 map.set("FR","France")
// console.log(map);       //Map(2) { 'IN' => 'INDIA', 'FR' => 'France' }

 for (const key in map) {
   //console.log(key);
 }                                        //output is blank