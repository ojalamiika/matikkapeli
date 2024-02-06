const numerot = document.getElementById('numerot')
const button = document.querySelector('button')
let userInput= document.querySelector('input')
const answers = document.getElementById('answers')
let inputValue;
let random1 = 0;
let random2 = 0;
let correctAnswer = 10;
let rightAnswers = 0
let wrongAnswers = 0
let attempts=0;

button.addEventListener('click', () => {
    inputValue = userInput.value
    console.log(inputValue)
    if(inputValue == correctAnswer){
        rightAnswers++
        alert('oikein')
    }
    else{
        wrongAnswers++
    }
    userInput.value = ""
    random1 = getRandomArbitrary(1,10)
    random2 = getRandomArbitrary(1,10)
    correctAnswer = Math.floor(random1) + Math.floor(random2)
    numerot.innerHTML = Math.floor(random1) + " + " + Math.floor(random2)
    console.log(correctAnswer)
    answers.innerHTML = "Oikeita vastauksia: " + (rightAnswers) + ", vääriä vastauksia: " + (wrongAnswers-1)
})

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}