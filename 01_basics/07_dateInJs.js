// let myDate=new Date()
// console.log(myDate); //2024-02-01T07:46:38.599Z
// console.log(myDate.toString()) //Thu Feb 01 2024 13:19:37 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString()) //Thu Feb 01 2024
// console.log(myDate.toISOString()) //2024-02-01T07:49:37.919Z
// console.log(myDate.toJSON()) //2024-02-01T07:49:37.919Z
// console.log(myDate.toLocaleDateString()) //1/2/2024
// console.log(myDate.toLocaleString()) //1/2/2024, 1:19:37 pm

/*******imp***********/
// console.log(typeof myDate) //object


let myCreatedDate=new Date(2023,0,23)  //=>year,month jan,date
// console.log(myCreatedDate);    //2023-01-22T18:30:00.000Z
// console.log(myCreatedDate.toDateString()); //Mon Jan 23 2023

let myCreatedDate2=new Date(2023,0,23,5,3)  //=>year,month jan,date,hour,min
// console.log(myCreatedDate2.toLocaleString()) //23/1/2023, 5:03:00 am

let myCreatedDate3=new Date("2023-01-13")  //year,month,date
// console.log(myCreatedDate3.toLocaleString())  //13/1/2023, 5:30:00 am


let myCreatedDate4=new Date("01-14-2023") //month,date,year
// console.log(myCreatedDate4.toLocaleString()) 

/***************Timestamp****** */  //you get in milliseconds
let myTimeStamp=Date.now()
// console.log(myTimeStamp); //1706774860323    =>gives value in seconds

/*getTime() */
// console.log(myCreatedDate4.getTime()) //1673634600000 => will get this in seconds so that we can compare in quiz and poll games


/*********for getting value in seconds */
// console.log(Date.now()) //milliseconds   1706775250249
// console.log(Date.now()/1000) // for seconds in decimal  1706775250.263
// console.log(Math.floor(Date.now()/1000)) // for seconds  1706775250

/********other operations***** */
let newDate=new Date()
console.log(newDate);  //2024-02-01T08:18:17.027Z
console.log(newDate.getMonth()); //1 =>feb   0=jan,1=feb
console.log(newDate.getDate()); //1
console.log(newDate.getMonth()+1);  //2 i.e feb so that user is not confused


/**********imp for cutomizing acc to u********** */
newDate.toLocaleString('default',{
    weekday:"long"
})


