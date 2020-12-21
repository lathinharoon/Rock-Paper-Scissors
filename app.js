var userScore = 0;
var compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const rock_div  = document.getElementById("r");
const paper_div  = document.getElementById("p");
const scissors_div  = document.getElementById("s");

function getComp() {
    const choices = ['r','p','s'];
    const temp = Math.floor(Math.random() * 3);
    return choices[temp];
}

function game(input) {
    const comp = getComp();
    switch (input+comp) {
        case "rr":
            result_div.innerHTML = ("Both threw Rock. It's a draw.");
            rock_div.classList.add('grey-glow');
            ssetTimeout(() =>rock_div.classList.remove('grey-glow'),500);
            break;
        case "rp":
            result_div.innerHTML =("You threw Rock, Computer threw Paper. Computer Wins.");
            compScore++;
            rock_div.classList.add('red-glow');
            setTimeout(() =>rock_div.classList.remove('red-glow'),500);
            break;
        case "rs":
            result_div.innerHTML =("You threw Rock, Computer threw Scissors. You Win!");
            userScore++;
            rock_div.classList.add('green-glow');
            setTimeout(() =>rock_div.classList.remove('green-glow'),500);
            break;
        case "pp":
            result_div.innerHTML =("Both threw Paper. It's a draw.");
            paper_div.classList.add('grey-glow');
            setTimeout(() =>paper_div.classList.remove('grey-glow'),500);
            break;
        case "pr":
            result_div.innerHTML =("You threw Paper, Computer threw Rock. You Win!");
            userScore++;
            paper_div.classList.add('green-glow');
            setTimeout(() =>paper_div.classList.remove('green-glow'),500);
            break;
        case "ps":
            result_div.innerHTML =("You threw Paper, Computer threw Scissors. Computer Wins.");
            compScore++;
            paper_div.classList.add('red-glow');
            setTimeout(() =>paper_div.classList.remove('red-glow'),500);
            break;
        case "ss":
            result_div.innerHTML =("Both threw Scissors. It's a draw.");
            scissors_div.classList.add('grey-glow');
            setTimeout(() =>scissors_div.classList.remove('grey-glow'),500);
            break;
        case "sr":
            result_div.innerHTML =("You threw Scisors, Computer threw Rock. Computer Wins.");
            compScore++;
            scissors_div.classList.add('red-glow');
            setTimeout(() =>scissors_div.classList.remove('red-glow'),500);
            break;
        case "sp":
            result_div.innerHTML =("You threw Scisors, Computer threw Paper. You Win!");
            scissors_div.classList.add('green-glow');
            setTimeout(() =>scissors_div.classList.remove('green-glow'),500);
            userScore++;
            break;
        default:
            break;
    }
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore; 
}

function main() {
    rock_div.addEventListener('click', function() {
        game("r")
    })

    paper_div.addEventListener('click', function() {
        game("p")
    })

    scissors_div.addEventListener('click', function() {
        game("s")
    })
}

main();