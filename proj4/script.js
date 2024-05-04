//Generating Random Number
let randomNumber = parseInt(Math.random() * 100 + 1);

//Taking values from html into document
const submit = document.querySelector('#subt'); //eventlistener lagana h
const userInput = document.querySelector('#guessField'); //value extract krna h
const guessSlot = document.querySelector('.guesses'); //all previous guesses dikhana h
const remaining = document.querySelector('.lastResult'); //aur kitne chances remaining h
const lowOrHi = document.querySelector('.lowOrHi'); //guess kiya hua number randomNumber se bada h ki chota h
const startOver = document.querySelector('.resultParas'); //ye vala div ,user game start krne ke baad dikhana h

//creating paragraph element using dom
const p = document.createElement('p');

//other imp things
let prevGuess = []; //to store user guesses and show them
let numGuess = 1; //total guess 10 tk h uske baad disable krte h submit button ko

let playgame = true; //this variable is alwys +nt while designing game  ki kab user ko allow karenge to play and kab nhi

//First lets check are we available to play game or not    playgame=true
if (playgame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault(); //stoppinfg to send values to server
    const guess = parseInt(userInput.value); //userInput ka value le liya aur parseInt kiya for datatype

    console.log(guess);
    validateGuess(guess); //passing this vlaue to validateGuess function
  });
}

/**********Code logic ***********/
//Creating functions

//is this a valid no. or not  'abc',-ve values (<1),more than 100 number
//sirf validation hua h msg print nhi karaye
function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please enter a valid number');
  } else if (guess < 1) {
    aler('Please enter number more than 1');
  } else if (guess > 100) {
    alert('Please enter number less than 100');
  } else {
    //if number is not -ve,less than 1 ,more than 100 then push into array
    prevGuess.push(guess);

    //if its last attempt 10th
    //to check if the game is over no of guess (numGuess)10 hogaye tho gameOver
    if (numGuess === 11) {
      displayGuess(guess); //show guess
      displayMessage(`Game Over.Random Number was ${randomNumber}`); //show this msg
      endGame(); //its time to end game
    } else {
      //ab number is less than 11
      displayGuess(guess); // display guess
      checkGuess(guess); //checking the number here,no need to display msg , will display msg in checkGuess() function mai ,"number lower or higher"
    }
  }
}

//will print a msg  'corect value','low value','high value'
function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it Right!`);
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOO low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOOO high`);
  }
}

//userInputvalue empty for next guess
//innerHtml mai will add our guess
//will reduce our number of chances
//clean our value for next guess
//update our array
//guess reamining usko bhi update krna h
function displayGuess(guess) {
  userInput.value = ''; //empty kr rhe h input place ko
  guessSlot.innerHTML += `${guess}, `; // displaying values user guessed
  numGuess++; //increasing count of guesses
  remaining.innerHTML = `${11 - numGuess}`; //displaying no of chances remaining
}

//ye use karenge to display msg
//this fn will interact directly with dom
//lowOrHi vala variable ko use karnege  //.lowOrHi is class of paragraph in div class="resultParas"
function displayMessage(message) {
  lowOrHi.innerHtml = `<h2>${message} </h2>`;
}

function endGame() {
  userInput.value = ''; //empty userInput
  userInput.setAttribute('disabled', ''); //you cant enter anything now

  //p jo humne banaya starting mai using createElement
  //classList can add other classes without removing other classes
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame"> Start New Game</h2>`;
  startOver.appendChild(p);
  playgame = false;
  newGame();
}

function newGame() {
  //taking reference of button
  const newGameButtton = document.querySelector('#newGame');

  newGameButtton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);

    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;

    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playgame = true;
  });
}
