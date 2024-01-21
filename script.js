const targetNumber = Math.floor(Math.random() * 100) + 1;
let atempts = 0;

function checkGuess() {
    
    const userGuess = document.getElementById('userGuess').value;

    if (userGuess < 1 || userGuess > 100 || isNaN(userGuess)){
        alert('Please enter a valid number between 1 and 100.');
        return;
    }
    atempts++;

    if (userGuess == targetNumber) {
        document.getElementById('feedback').innerHTML = `Congratulations! You guessed the number in ${atempts} attempts.`;
        } else if (userGuess < targetNumber) {
            document.getElementById('feedback').innerHTML = 'Too low. Try again!';    
        } else {
            document.getElementById('feedback').innerHTML = 'Too high. Try again!';
        }
} 