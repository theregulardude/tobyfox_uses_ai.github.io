let currentPlayer = "X";
let gameStarted = false;
let gameOver = false;
let move = 0;

const button = document.getElementById("startButton");
const restart = document.getElementById("restartButton");
const endgame = document.getElementById("endButton");
const message = document.getElementById("message");
const cells = document.querySelectorAll(".cell");

restartButton.style.display = "none";
endButton.style.display = "none";

function checkWinner(){
    const winnerCombination = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ];

winnerCombination.forEach(function(combination){
    const a = cells[combination[0]].textContent.trim();
    const b = cells[combination[1]].textContent.trim();
    const c = cells[combination[2]].textContent.trim();

        if (a !== "" && a === b && a === c) {
            message.textContent="Player "+ a +" Wins!";
            gameOver= true;
            restartButton.style.display= "inline-block";
            return;
        }
    });
}

button.addEventListener("click",function() {
    button.disabled = true;
    button.style.display = "none";
    message.textContent = "Loading...";

    setTimeout(function() {
        message.textContent ="Let's Play!";
        gameStarted = true;

        setTimeout(function() {
            message.textContent = "Player X's Turn";
            endButton.style.display="inline-block";
        }, 2000);
    }, 2000);
});

cells.forEach(function(cell) {
    cell.addEventListener("click", function() {
        if (gameStarted === false) {
            return;
        }

        if (gameOver === true){
            return;
        }

        if (cell.textContent.trim() !=="") {
            return;
        }

        cell.textContent= currentPlayer;
        move++;
        
        if (currentPlayer ==="X") {
            cell.classList.add ("X");
        }else {
            cell.classList.add ("O");
        }

    checkWinner();
        if (gameOver === true){
            return;
        }

        if(move === 9){
            message.textContent="Draw";
            gameOver = true;
            restartButton.style.display= "inline-block";
            return;
        }

        if (currentPlayer ==="X") {
            currentPlayer = "O";
        }else {
            currentPlayer="X";
        }
        message.textContent = "Player " + currentPlayer + "'s Turn";
    });
});

restartButton.addEventListener("click", function() {
    currentPlayer="X";
    gameStarted= true;
    gameOver = false;
    move=0;

    cells.forEach(function(cell){
        cell.textContent="";
        cell.classList.remove("X","O");
    });

    button.disable=true;
    message.textContent="Player X's Turn!";
    restartButton.style.display="none";
});

endButton.addEventListener("click", function() {
    currentPlayer = "X";
    gameStarted = false;
    gameOver = false;
    moves = 0;

    cells.forEach(function(cell) {
        cell.textContent= "";
        cell.classList.remove("X","O");
    });

    button.disabled = false;
    message.textContent = "Ready to Play?";
    button.style.display= "inline-block";
    button.display = false;
    restartButton.style.display ="none";
    endButton.style.display="none";
});