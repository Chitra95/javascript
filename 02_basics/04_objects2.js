// //creating singleton constructor obj
// const tinderUser=new Object();
// console.log(tinderUser);                                //{}

//creating obj literals
const tinderUser={}
// console.log(tinderUser);                                    //{}

//adding values in obj
tinderUser.id='123abc'
tinderUser.name="sammy"
tinderUser.isLoggedIn=false

// console.log(tinderUser);                                  { id: '123abc', name: 'sammy', isLoggedIn: false }

//nested objects
const regularUser={
    email:"c@gmial.com",
    fullname:{
        userfullname:{
            firstname:'Chitra',
            lastname:'kundaram'
        }
    }
}

// console.log(regularUser.fullname);     //{ userfullname: { firstname: 'Chitra', lastname: 'kundaram' } }   



//Merging 2 obj
const obj1={1:'a',2:'b'}
const obj2={3:'a',4:'b'}

//const obj3={obj1,obj2}

// console.log(obj3);              //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }      


//Object.assign(target,source)
// const obj3=Object.assign(obj1,obj2)
// console.log(obj3);                 // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

//const obj3=Object.assign({},obj1,obj2)
// console.log(obj3);                      //  { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

//Spread Operator 
const obj3={...obj1,...obj2}
// console.log(obj3);                      //  { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }


//When values come from db in the from on array of objects
const users=[
    {
        id:1,
        email:'h@gmail.com'
    },
    {
        id:2,
        email:'h@gmail.com'
    },
    {
        id:3,
        email:'h@gmail.com'
    }
]

//To access
//console.log(users[0].email);  //h@gmail.com


//************ some other important concepts
//console.log(tinderUser);       // { id: '123abc', name: 'sammy', isLoggedIn: false }

//to get all keys
//console.log(Object.keys(tinderUser));       //[ 'id', 'name', 'isLoggedIn' ]

//to get all values
//console.log(Object.values(tinderUser));    //[ '123abc', 'sammy', false ]

//to get all entries
//console.log(Object.entries(tinderUser));   //[ [ 'id', '123abc' ], [ 'name', 'sammy' ], [ 'isLoggedIn', false ] ]


//to check it hasOwnProperty or nt
//console.log(tinderUser.hasOwnProperty('isLoggedIn'));       //true
//console.log(tinderUser.hasOwnProperty('isLog'));         //false




/*********************************************************Object destructuring and json api */
//obj create
const course={
    coursename:"Js in hindi",
    price:"999",
    courseInstructor:"hit"
}
 
// to access    course.courseInstructor
//but now extracting value
//const {jisko extract krna h}=kaha se extract krna h
const {courseInstructor}=course
//console.log(courseInstructor);    //hit

//Rename your key name and using it 
const {courseInstructor:instructor}=course
//console.log(instructor);     //hit

//using this obj destructuring in react
// const navbar=({company})=>{                                 // instead of writing {props.company}

// }
// navbar(company="chitra")


/*********************** JSON API**/
// {
//     "name":"chitra",
//     "course":"js",       //json
//     "price":"999"

// }

//     google     https://randomuser.me/


//    json formatter to understand your api               https://jsonformatter.org/


