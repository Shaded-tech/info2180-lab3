document.addEventListener("DOMContentLoaded", function () {
    let squares = document.querySelectorAll("#board div");

    console.log(squares.length);

    squares.forEach(function (square) {
        square.classList.add("square");
    });
});
