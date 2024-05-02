const form=document.querySelector("form")

//event listener for form in submit
form.addEventListener("submit",function(e){
  e.preventDefault() //so that put and get method if takes place form is submitted 
  //we are taking values we dont want to submit
  
  //taking values from form  dom-select.value we get string value,parseInt
  const height=parseInt(document.querySelector("#height").value);
  const weight=(document.querySelector("#weight").value);
  const results=document.querySelector("#results")

  if(height === '' || height <0 || isNaN(height) ){
    //if all these false values are true we will enter into loop
    results.innerHTML=`Please enter valid height ${height} `
  } else if(weight === '' || weight <0 || isNaN(weight) ){
    //if all these false values are true we will enter into loop
    results.innerHTML=`Please enter valid weight ${weight} `
  }else{
    const bmi=(weight/((height*height)/10000)).toFixed(2)  //toFixed() itne decimals hi chahiye


    //toshow results
    // results.innerHTML=`<span>${bmi}</span>`
  
    if(bmi<18.8){
      results.innerHTML=`<span>Your bmi is:${bmi} and You are Under Weight.</span>`
    }else if(bmi>=18.6 && bmi<=24.9){
      results.innerHTML=`<span>Your bmi is: ${bmi} and You are Normal Weight.</span>`
    }else if(bmi>24.9){
      results.innerHTML=`<span>Your bmi is:${bmi} and You are Overweight.</span>`
    }
  }
})

//'' empty quotes is false

//parseInt     "123a" convert 123 but NaN
//"abc"   NaN
//"123"   convert to 123    since we get values in string from form

//Note height != NaN     newway:   isNaN() true:value not a number 
//isNaN(123)  false    ye number h
//isNaN('123') false   ye convert hoga number mai
//isNaN("HELLO") true    ye number nhi h