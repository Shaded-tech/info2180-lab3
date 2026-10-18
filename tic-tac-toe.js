document.addEventListener("DOMContentLoaded", function () {
    let squares = document.querySelectorAll("#board div");

    let currentPlayer = "x";
    let board = [];

    squares.forEach(function (square) {
        square.classList.add("square");

        square.addEventListener('click', function () {
            if (square.textContent !== "") return;

            square.textContent = currentPlayer;

            square.classList.add(currentPlayer);

            currentPlayer = currentPlayer === "x" ? "o" : "x";

        });
    });
});
