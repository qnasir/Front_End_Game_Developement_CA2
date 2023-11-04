// Get the canvas element and its 2d context
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

// Define the ball properties
var ball = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    radius: 20,
    dx: 2, // horizontal speed
    dy: -2, // vertical speed
    colors: ["red", "blue", "green"],
    currentColor: 0,
};

// Function to draw the ball
function drawBall() {
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
    ctx.fillStyle = ball.colors[ball.currentColor];
    ctx.fill();
    ctx.closePath();
}

// Function to update the animation
function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawBall();

    // Check for collisions with the canvas boundaries
    if (ball.x + ball.dx > canvas.width - ball.radius || ball.x + ball.dx < ball.radius) {
        ball.dx = -ball.dx;
    }
    if (ball.y + ball.dy > canvas.height - ball.radius || ball.y + ball.dy < ball.radius) {
        ball.dy = -ball.dy;
    }

    // Randomly change the ball color every 1 second
    if (Date.now() - lastColorChangeTime >= 1000) {
        ball.currentColor = Math.floor(Math.random() * ball.colors.length);
        lastColorChangeTime = Date.now();
    }

    ball.x += ball.dx;
    ball.y += ball.dy;

    requestAnimationFrame(update);
}

var lastColorChangeTime = Date.now();
update(); // Start the animation