function userPlay(userChoice) {
    const options = ['rock', 'paper', 'scissors'];
    const computerChoice = options[Math.floor(Math.random() * options.length)];
    const resultMessage = document.getElementById('result-message');
    const resultIcon = document.getElementById('result-icon');
    const winConditions = {rock: 'scissors', paper: 'rock', scissors: 'paper'};

    // Clear previous classes
    resultMessage.classList.remove('win', 'lose', 'draw');
    resultIcon.classList.remove('win-icon', 'lose-icon', 'draw-icon');

    if (userChoice === computerChoice) {
        resultMessage.textContent = `Both selected ${capitalize(userChoice)}. It's a draw!`;
        resultMessage.classList.add('draw');
        resultIcon.classList.add('draw-icon');
    } else if (computerChoice === winConditions[userChoice]) {
        resultMessage.textContent = `You chose ${capitalize(userChoice)}. Computer chose ${capitalize(computerChoice)}. You won! 🎉`;
        resultMessage.classList.add('win');
        resultIcon.classList.add('win-icon');
    } else {
        resultMessage.textContent = `You chose ${capitalize(userChoice)}. Computer chose ${capitalize(computerChoice)}. You lost! 😢`;
        resultMessage.classList.add('lose');
        resultIcon.classList.add('lose-icon');
    }
}

function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}
