const choices = document.querySelectorAll('.choice');
const userChoiceDisplay = document.getElementById('user-choice');
const computerChoiceDisplay = document.getElementById('computer-choice');
const outcomeDisplay = document.getElementById('outcome');
const resetBtn = document.getElementById('reset-btn');

let userChoice;
let computerChoice;
let outcome;

choices.forEach(choice => {
    choice.addEventListener('click', (e) => {
        userChoice = e.target.getAttribute('data-choice');
        userChoiceDisplay.textContent = `Sua escolha: ${userChoice}`;
        generateComputerChoice();
        getResult();
    });
});

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    const choicesArray = ['Pedra', 'Papel', 'Tesoura'];
    computerChoice = choicesArray[randomNumber];
    computerChoiceDisplay.textContent = `Escolha do computador: ${computerChoice}`;
}

function getResult() {
    if (userChoice === computerChoice) {
        outcome = 'Empate!';
    } else if ((userChoice === 'Pedra' && computerChoice === 'Tesoura') ||
               (userChoice === 'Papel' && computerChoice === 'Pedra') ||
               (userChoice === 'Tesoura' && computerChoice === 'Papel')) {
        outcome = 'Você venceu!';
    } else {
        outcome = 'Você perdeu!';
    }
    outcomeDisplay.textContent = `Resultado: ${outcome}`;
}

resetBtn.addEventListener('click', () => {
    userChoiceDisplay.textContent = 'Sua escolha: ';
    computerChoiceDisplay.textContent = 'Escolha do computador: ';
    outcomeDisplay.textContent = 'Resultado: ';
});
