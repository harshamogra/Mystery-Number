let randomnum = parseInt(Math.random()*100+1)
console.log(randomnum)
const guessnum = document.querySelector('#guessfield')
const submit = document.querySelector('#submit')
const guessslot = document.querySelector('.prevguess')
const remguess = document.querySelector('.remguess')
const loorhi = document.querySelector('.loworhi')
const p = document.createElement('p')
const startOver = document.querySelector('.resultspace')
let prevguess = [];
let numGuess = -1;

  remguess.innerHTML =`10`
let playgame = true;
if(playgame){
    submit.addEventListener('click',(e)=>{
       e.preventDefault();
       const guess = parseInt(guessnum.value)
       validateGuess(guess)
    })
}
function validateGuess(guess){
    if(isNaN(guess)){
        alert(`Please enter a valid number`)

    }else if(guess<1){
        alert(`Please enter a number more than 1`)
    }
    else if(guess>100){
        alert(`Please enter a number less than 100`)
    }else{
        prevguess.push(guess)
        if(numGuess===8){
            displayGuess(guess)
            displayMessage(`Game over. Random number was ${randomnum}`)
            endGame()
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
 
}

function checkGuess(guess){   
    if(guess === randomnum){
        displayMessage(`You guessed it right`)
        endGame()
   }
   else if(guess<randomnum){
    displayMessage(`The number you guessed too low`)
   }
   else if(guess>randomnum){
    displayMessage(`The number you guessed is too high`)
   }
  
}

function displayGuess(guess){
    guessnum.value ='';
    guessslot.innerHTML += `${guess}, `
    numGuess++;
    remguess.innerHTML =`${9- numGuess}`
}

function displayMessage(message){
       loorhi.innerHTML= `<h2>${message}</h2>`
}

function endGame(){
  guessnum.value =''
  guessnum.setAttribute('disabled',' ')
  p.classList.add('button')
  p.innerHTML=`<h2 id = "newgame" >Start New Game</h2>`
 startOver.appendChild(p);
 playgame = false;
 newGame()
}
function newGame(){
  const newgame = document.querySelector('#newgame')

  newgame.addEventListener('click',(e)=>{
   randomnum = parseInt(Math.random()*100+1)
   prevguess = []
   numGuess=0;
   loorhi.innerHTML=' '
   guessslot.innerHTML =''
   remguess.innerHTML = `${9-numGuess}`
   guessnum.removeAttribute('disabled')
   startOver.removeChild(p)
  playgame = true;
   remguess.innerHTML =`10`
});
}
