//ForEach  on array  
//[{},{},{}]  objects inside array


//ARRAY  forEACH
const coding=["js","ruby","java"]

//function fn(){}
//calback fn     function (){}
coding.forEach( function (val){
//console.log(val);
}
);


//arrow fn
coding.forEach( (val)=>{
//console.log(val);
}
)


//function refernce pass in forEach
function printMe(val){
    //console.log(val);
}

coding.forEach(printMe)   //only reference is given

//Same output for 3 fn
/**
 js
ruby
java
 */


//Other parameters in ForEach
coding.forEach( (item,index,arr)=>{
//console.log(item,index,arr);
})

/****
js 0 [ 'js', 'ruby', 'java' ]
ruby 1 [ 'js', 'ruby', 'java' ]
java 2 [ 'js', 'ruby', 'java' ]
*/




//--------------MOST IMP     OBJECTS IN ARRAY [ {} ,{}, {}  ]

const myCoding=[
    {
        name:"javascript",
        file:"js"
    },
    {
        name:"java",
        file:"java"
    },
    {
        name:"python",
        file:"py"
    }
]

//for    name
myCoding.forEach( (item)=>{
    console.log(item.name);              //item.name       item is object here to access its property use "." notation
} 
)
/***
 javascript
java
python
 */


//for   file
myCoding.forEach( (item)=>{
    console.log(item.file);
}
)

/*
js
java
py
*/