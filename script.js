"use strict";

let mainValue = Math.floor(Math.random((document.getElementById('guessNum').textContent)) * 20 + 1)
// document.getElementById('guessNum').innerHTML = mainValue
let score = 20;
let highScore = 0

const textMessage = function(message){
    return document.querySelector(".message").innerHTML = message
}



document.getElementById('btnCheck').addEventListener('click', function(){
    
    const guessValue = Number(document.querySelector(".guess").value)
    
    if(!guessValue) {
        textMessage("Please Choice A Number")
    }

    if(guessValue > mainValue){
        textMessage("Your Guess Is Too High")
    }else if(guessValue < mainValue){
        textMessage("Your Guess Is Too Low")
        
    } else {
        textMessage("Congratulations! You Win The Game")
        document.getElementById('guessNum').innerHTML = mainValue
        document.querySelector('.score').textContent = score
        document.querySelector('body').style.backgroundColor = "green"
        document.getElementById("guessNum").style.width = "30rem"
        
        if(score > highScore){
            highScore = score
            document.querySelector(".highscore").textContent = highScore
        }

    }

    if(guessValue > mainValue || guessValue < mainValue){
        // score - 1
        document.querySelector('.score').textContent = score - 1
        score--
    }
    
    if(score < 0){
        score = 0
        document.querySelector('.score').textContent = score
        textMessage("You Loose The Game")
    }
})

document.querySelector('.again').addEventListener('click', function(){
    score = 20
    document.querySelector('.score').textContent = score
    document.querySelector('.number').innerHTML = "?"
    document.querySelector('body').style.backgroundColor = "#222"
    document.getElementById("guessNum").style.width = "15rem"
    mainValue = Math.floor(Math.random((document.getElementById('guessNum').textContent)) * 20 + 1)
    textMessage("Start Guessing...")


})