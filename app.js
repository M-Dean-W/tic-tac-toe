let cells = document.querySelectorAll('.row > div')


for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', cellClicked)
}

function cellClicked(event) {

   if (gameOver == 1) {
    newGame()
    return
   }

    event.target.textContent = currentPlayer;
    moves++;
    checkWin();
    
    //swap players
    if (currentPlayer === "X") {
        currentPlayer = "O";
    }
    else (currentPlayer = "X");
    
}

function checkWin() {
    if (cells[0].textContent === 'X' && cells[1].textContent === 'X' && cells[2].textContent === 'X'
    || cells[3].textContent === 'X' && cells[4].textContent === 'X' && cells[5].textContent === 'X'
    || cells[6].textContent === 'X' && cells[7].textContent === 'X' && cells[8].textContent === 'X'
    || cells[0].textContent === 'X' && cells[4].textContent === 'X' && cells[8].textContent === 'X'
    || cells[2].textContent === 'X' && cells[4].textContent === 'X' && cells[6].textContent === 'X'
    || cells[0].textContent === 'X' && cells[3].textContent === 'X' && cells[6].textContent === 'X'
    || cells[1].textContent === 'X' && cells[4].textContent === 'X' && cells[7].textContent === 'X'
    || cells[2].textContent === 'X' && cells[5].textContent === 'X' && cells[8].textContent === 'X')
    {alert(`${currentPlayer} has won the game`); gameOver++; return}
    
    
else if (cells[0].textContent === 'O' && cells[1].textContent === 'O' && cells[2].textContent === 'O'
    || cells[3].textContent === 'O' && cells[4].textContent === 'O' && cells[5].textContent === 'O'
    || cells[6].textContent === 'O' && cells[7].textContent === 'O' && cells[8].textContent === 'O'
    || cells[0].textContent === 'O' && cells[4].textContent === 'O' && cells[8].textContent === 'O'
    || cells[2].textContent === 'O' && cells[4].textContent === 'O' && cells[6].textContent === 'O'
    || cells[0].textContent === 'O' && cells[3].textContent === 'O' && cells[6].textContent === 'O'
    || cells[1].textContent === 'O' && cells[4].textContent === 'O' && cells[7].textContent === 'O'
    || cells[2].textContent === 'O' && cells[5].textContent === 'O' && cells[8].textContent === 'O')
    {alert(`${currentPlayer} has won the game`);  gameOver++; return}

else if (moves == 9) {
    alert(`We have a draw!`); gameOver++;
}
 }

 function newGame () {
    if (gameOver === 1) {
        window.location.reload();
    }
 }
// hints

//cells[0].textContent
//use if else statements

let player1 = "X"
let player2 = "O"
let currentPlayer = player1
let moves = 0
let gameOver = 0




