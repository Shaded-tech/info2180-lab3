document.addEventListener("DOMContentLoaded", function () {
    let squares = document.querySelectorAll("#board div");

    let currentPlayer = "X";
    let board = [];

    squares.forEach(function (square) {
        square.classList.add("square");

        square.addEventListener("mouseenter", function () {

            square.classList.add("hover")

        });

        square.addEventListener("mouseleave", function () {

            square.classList.remove("hover")

        })

        square.addEventListener('click', function () {
            if (square.textContent !== "") return;

            square.textContent = currentPlayer;

            square.classList.add(currentPlayer);

            currentPlayer = currentPlayer === "X" ? "O" : "X";

        });
    });
});
