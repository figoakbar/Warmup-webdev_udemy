var arrColor = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var started = false;
level = 0;

$(document).keydown(function(){
    if(!started){
        $("#level-title").text("Level " + level);
        nextSequence()
        started = true;
    }
})

$('div[type="button"]').click(function() {
        let userChosenColour = $(this).attr("id");
        userClickedPattern.push(userChosenColour);
        playSound(userChosenColour);
        animatePress(userChosenColour);
        checkAnswer(userClickedPattern.length - 1);
});

function nextSequence(){
    level++
    $("#level-title").text("Level " + level);
    var randNum = arrColor[Math.floor(Math.random() * 4)];
    var chosenColour = arrColor[randNum]; 
    gamePattern.push(chosenColour);   

    $("#" + chosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(chosenColour)
    
}

function playSound(name) {

  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColour){
    $("#" +currentColour).addClass("pressed");

    setTimeout(function() {
        $("#" +currentColour).removeClass("pressed")
    }, 100);
}

function checkAnswer(currentLevel){
    if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){
        if(gamePattern.length === userClickedPattern.length){
            setTimeout(nextSequence, 1000);
        }
    } else{
        playSound("wrong");
        $("body").addClass("game-over");
        $("#level-title").text("Game Over! Press Any Key to Restart");
        setTimeout(() => $("body").removeClass("game-over"), 200);
        startOver();
    }
}

function startOver(){
    level = 0;
    gamePattern = [];
    started = false;
}