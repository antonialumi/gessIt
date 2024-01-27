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

    if (userGuess == targetNumber) {
        const feedback = `Congratulations! You guessed the number in ${atempts} attempts.`
        writeUserFeedback(feedback)
    } else if (userGuess < targetNumber) {
        document
            .getElementById('feedback')
            .innerHTML = 'Too low. Try again!';    
    } else {
        document
            .getElementById('feedback')
            .innerHTML = 'Too high. Try again!';
    }
} 