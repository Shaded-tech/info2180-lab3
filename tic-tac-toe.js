document.addEventListener("DOMContentLoaded", function () {
    let squares = document.querySelectorAll("#board div");

    let currentPlayer = "X";
    let board = [];

    let winningCombos = [
        [0, 1, 2],  // top row
        [3, 4, 5],  // middle row
        [6, 7, 8],  // bottom row
        [0, 3, 6],  // left column
        [1, 4, 7],  // middle column
        [2, 5, 8],  // right column
        [0, 4, 8],  // diagonal
        [2, 4, 6]   // diagonal
    ];

    function checkWinner() {
        for (let i = 0; i < winningCombos.length; i++) {
            let combo = winningCombos[i];
            let a = combo[0];
            let b = combo[1];
            let c = combo[2];

            if (board[a] && board[a] === board[b] && board[b] === board[c]) {
                return board[a];
            }
        }
        return null;
    }

    squares.forEach(function (square) {
        square.classList.add("square");

        square.addEventListener("mouseenter", function () {
            square.classList.add("hover");
        });

        square.addEventListener("mouseleave", function () {
            square.classList.remove("hover");
        });

        square.addEventListener("click", function () {
            if (square.textContent !== "") return;

            let squareArray = Array.from(squares);
            let index = squareArray.indexOf(square);

            square.textContent = currentPlayer;
            square.classList.add(currentPlayer);
            board[index] = currentPlayer;

            let winner = checkWinner();
            if (winner) {
                let statusDiv = document.querySelector("#status");
                statusDiv.textContent = "Congratulations! " + winner + " is the Winner!";
                statusDiv.classList.add("you-won");
                return;
            }

            currentPlayer = currentPlayer === "X" ? "O" : "X";
        });
    });
});
