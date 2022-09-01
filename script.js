'use strict';
// const score= Number(document.querySelector('.score').textContent);
// console.log(score);

function displayMessage(message) {
    document.querySelector('.message').textContent = message;
}

let score = 20;
let highScore = 0;
let secrectNumber = Math.trunc(Math.random() * 20) + 1; //get number between 1-20, trunc is to get Integer
document.querySelector('.number').textContent = '?';
document.querySelector('.check').addEventListener('click', function () {

    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
    if (!guess) {
        displayMessage('No Number!');
    }
    // when the guess is correct
    else if (guess === secrectNumber) {
        displayMessage('Congratulations!');
        document.querySelector('.number').textContent = secrectNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        highScore = Math.max(highScore, score);
        document.querySelector('.highscore').textContent = highScore;
    }
    // when the guess is too high
    else if (guess !== secrectNumber) {
        if (score > 1) {
            displayMessage(guess > secrectNumber ? 'Too High!' : 'Too Low!');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('You Lose The Game');
            document.querySelector('.score').textContent = 0;
        }
    }
    // when the guess is too low
    // else if (guess<secrectNumber){
    //     if (score>1){
    //         document.querySelector('.message').textContent='Too Low!';
    //         score--;
    //         document.querySelector('.score').textContent=score;
    //     }
    //     else {
    //         document.querySelector('.message').textContent='You Lose The Game';
    //         document.querySelector('.score').textContent=0;
    //     }
    // }
})

// again function without reload the page
document.querySelector('.again').addEventListener('click', function () {
    // window.location.reload()
    score = 20;
    secrectNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = "?";
    displayMessage('Start guessing...');
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.guess').value = '';
    document.querySelector('.number').style.width = '15rem';

})