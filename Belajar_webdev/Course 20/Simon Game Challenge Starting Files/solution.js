const buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userPattern = [];
let started = false;
let level = 0;

// Start game on key press
$(document).keydown(function () {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

// User button click
$(".btn").click(function () {
  const userChosenColor = $(this).attr("id");
  userPattern.push(userChosenColor);
  playSound(userChosenColor);
  animatePress(userChosenColor);
  checkAnswer(userPattern.length - 1);
});

// Generate next color in sequence
function nextSequence() {
  userPattern = [];
  level++;
  $("#level-title").text("Level " + level);
  const randomColor = buttonColors[Math.floor(Math.random() * 4)];
  gamePattern.push(randomColor);

  $("#" + randomColor).fadeOut(100).fadeIn(100);
  playSound(randomColor);
}

// Check user input
function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userPattern[currentLevel]) {
    if (userPattern.length === gamePattern.length) {
      setTimeout(nextSequence, 1000);
    }
  } else {
    playSound("wrong");
    $("body").addClass("game-over");
    $("#level-title").text("Game Over! Press Any Key to Restart");
    setTimeout(() => $("body").removeClass("game-over"), 200);
    startOver();
  }
}

// Play sound for color
function playSound(name) {
  const audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

// Animate button press
function animatePress(color) {
  $("#" + color).addClass("pressed");
  setTimeout(() => $("#" + color).removeClass("pressed"), 100);
}

// Reset game
function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}
