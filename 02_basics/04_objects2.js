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

// const obj3={obj1,obj2}

// console.log(obj3);              //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }      



const obj3=Object.assign(obj1,obj2)
console.log(obj3);                 // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }