const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");

document.addEventListener("keydown", function(event) {
    performJump();
});

function performJump() {
    if (!dino.classList.contains("animateJump")) {
        dino.classList.add("animateJump");
    }
    setTimeout(function() {
        dino.classList.remove("animateJump");
    }, 500);
}

let isAlive = setInterval(function() {
    // Dino's position
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("bottom"));

    // Cactus's position
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("right"));

    // Collision detection
    if (cactusLeft > 0 && cactusLeft < 60 && dinoTop < 60) {
        alert("Game Over!");
    }
}, 10);
