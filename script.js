'use strict';

// // Getting The Text Element
// document.querySelector(".message").textContent

// // Setting the text content
// document.querySelector('.message').textContent = "Correct Answer"
// document.querySelector('.number').textContent = 13
// document.querySelector('.score').textContent = 20
// document.querySelector('.guess').value = 20

let mainValue = document.querySelector('.number').value = Math.floor(Math.random() * 20) + 1
// document.querySelector('.number').textContent = mainValue

let score = 20;
let highScore = 0
// console.log();

document.getElementById('btnCheck').addEventListener('click', function () {
    const guessValue = Number(document.querySelector(".guess").value)

    if (!guessValue) {
        document.querySelector('.message').textContent = "No Number"
    } else if (guessValue === mainValue) {
        document.querySelector('.message').textContent = "Correct Answer"
        document.querySelector('body').style.backgroundColor = "green"
        document.querySelector('.number').style.width = "30rem"
        document.querySelector(".number").textContent = mainValue
        
        if (score > highScore) {
            highScore = score
            document.querySelector(".highscore").textContent = highScore
        }

    } else if (guessValue < mainValue) {
        document.querySelector('.message').textContent = "Too Low"
    } else if (guessValue > mainValue) {
        document.querySelector('.message').textContent = "Too High"
    }



    if (guessValue < mainValue || guessValue > mainValue) {
        document.querySelector(".score").textContent = score - 1
        score--
    }

    if (score < 0) {
        document.querySelector('.message').textContent = "You Loose The Game"
        document.querySelector(".score").textContent = 0
    }
})

document.querySelector(".again").addEventListener("click", function () {
    score = 20;
    document.querySelector(".number").textContent = "?"
    mainValue = Math.floor(Math.random() * 20) + 1
    document.querySelector('body').style.backgroundColor = "#222"
    document.querySelector('.number').style.width = "15rem"
    document.querySelector('.message').textContent = "Start Guessing..."
    document.querySelector(".guess").value = " "
    document.querySelector(".score").textContent = score

})