var arrColor = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var started = false;
level = 0;

$('div[type="button"]').click(function() {
        let userChosenColour = $(this).attr("id");
        userClickedPattern.push(userChosenColour);
        playSound(userChosenColour);
        animatePress(userChosenColour);
});

$(document).keydown(function(){
    if(!started){
        $("#level-title").text("Level " + level);
        nextSequence()
        started = true;
    }
})

function nextSequence(){
    level++
    $("#level-title").text("Level " + level);
    var randNum = Math.floor(Math.random() * 3) + 1;
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
    
}