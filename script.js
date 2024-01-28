const targetNumber = Math.floor(Math.random() * 100) + 1;
let atempts = 0;

function writeUserFeedback(feedback){
    document
        .getElementById('feedback')
        .innerHTML = feedback;
}

function confettiRain(){
    document
        .getElementById('confetti')
        .classList
        .add('confetti-active');
}

function showPlayAgainOption(){
    document
        .getElementById('playAgainOption')
        .classList
        .add('playAgainButton-active'); 
        
}

function playAgain(){
    location.reload();
}

function checkGuess() {
    atempts++;
    
    const userGuess = document.getElementById('userGuess').value;

    if(isNaN(userGuess)){
        alert('Please enter a valid number');
        return;
    }
    if (userGuess < 1){
        alert('Please enter a number bigger than 0');
        return;
    } 
    
    if(userGuess > 100){
        alert('Please enter a number lower or equal to 100');
        return;
    }


    let feedback = "ERROR: no user guess data"

    if (userGuess == targetNumber) {
        feedback = `Congratulations! You guessed the number in ${atempts} attempts.` 
        confettiRain();
        showPlayAgainOption();
    } else if (userGuess < targetNumber) {
        feedback = 'Too low. Try again!' 
    } else {
        feedback = 'Too high. Try again!'
    }

    writeUserFeedback(feedback)
} 