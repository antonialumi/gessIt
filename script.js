const targetNumber = Math.floor(Math.random() * 100) + 1;
let atempts = 0;

function writeUserFeedback(feedback){
    document
        .getElementById('feedback')
        .innerHTML = feedback;
}

function checkGuess() {
    
    const userGuess = document.getElementById('userGuess').value;

    if (userGuess < 1 || userGuess > 100 || isNaN(userGuess)){
        alert('Please enter a valid number between 1 and 100.');
        return;
    }
    atempts++;

    let feedback = "ERROR: no user guess data"
    
    if (userGuess == targetNumber) {
        feedback = `Congratulations! You guessed the number in ${atempts} attempts.`
    } else if (userGuess < targetNumber) {
        feedback = 'Too low. Try again!' 
    } else {
        feedback = 'Too high. Try again!'
    }

    writeUserFeedback(feedback)
} 