//******** CALL STACK

// function one(){
//     console.log("1");
// }
// function two(){
//     console.log("2");
// }
// function three(){
//     console.log("3");
// }
// one()
// two()
// three()

/** OUTPUT
1
2
3
 */

//call stack 
// one()   enterInToCallSTack execute  remove
// two()   enterInToCallSTack execute  remove
// three()   enterInToCallSTack execute  remove




function one(){
    console.log("1");
    two()
}
function two(){
    console.log("2");
    three()
}
function three(){
    console.log("3");
}
one()
two()
three()


//CAllSTACK
// one() 1 two() 2 three() 3    delete this from callStack
// two() 2 three() 3     delete this from call callStack
// three() 3

// output
// 1 2 3
// 2 3
// 3

/************
 OUTPUT
1
2
3
2
3
3
 *  ******/