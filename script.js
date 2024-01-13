const score = {
    win: 0,
    lose: 0,
    tie: 0
};
function reset() {
    score.win = 0;
    score.lose = 0;
    score.tie = 0;
    document.querySelector('.js-result').innerHTML = "";
}
updatescore();

function game(userInput) {
    const choices = ['rock', 'paper', 'scissor'];
    const randomNumber = Math.floor(Math.random() * 3);
    const computerChoice = choices[randomNumber];

    if (userInput === computerChoice) {
        document.querySelector('.js-result').innerHTML = "Tie.";
        score.tie++;
    } else if (
        (userInput === 'rock' && computerChoice === 'scissor') ||
        (userInput === 'paper' && computerChoice === 'rock') ||
        (userInput === 'scissor' && computerChoice === 'paper')
    ) {
        document.querySelector('.js-result').innerHTML = "You win.";
        score.win++;
    } else {
        document.querySelector('.js-result').innerHTML = "You lose.";
        score.lose++;
    }
    document.querySelector('.js-moves').innerHTML = `You<img src="${userInput}-emoji.png" class="move"><img src="${computerChoice}-emoji.png" class="move">Computer`;
    updatescore();
}

function updatescore() {
    document.querySelector('.js-score').innerHTML = `Wins: ${score.win}, Losses: ${score.lose}, Ties: ${score.tie}`;
}
