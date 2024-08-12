var buttonColours = ["red", "blue", "green", "yellow"];
var gamePatttern = [];
var userClickedPattern=[];
var keyPress=false;
var level=0;
$(document).keydown(function(){
  if(keyPress===false){
    nextSequence();
    keyPress=true;
  }
 
});

function nextSequence() {
  userClickedPattern=[];
  level++;
  $("#level-title").text("Level "+level);
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePatttern.push(randomChosenColour);
  $("#" + randomChosenColour).fadeIn().fadeOut().fadeIn();
  playSound(randomChosenColour);
  
}



$(".btn").click(function(){
 var userChosenColor=$(this).attr("id");
 userClickedPattern.push(userChosenColor);
 playSound(userChosenColor);
 animatePress(userChosenColor);
checkAnswer(userClickedPattern.length-1);
});

function playSound(name){
  var audio=new Audio("./sounds/"+name+".mp3");
  audio.play();
}


function animatePress(currentColour){
  $("#"+currentColour).addClass("pressed");
  setTimeout(function(){
    $("#"+currentColour).removeClass("pressed");
  },100)
}

function checkAnswer(currentLevel){
  if(gamePatttern[currentLevel]===userClickedPattern[currentLevel]){
    console.log("sucess");
    if(gamePatttern.length===userClickedPattern.length){
      setTimeout(function(){
        nextSequence();
      },1000)
    }
  }else{
    console.log("wrong")
    var audio=new Audio("./sounds/wrong.mp3");
    audio.play();
    $("body").addClass("game-over");
    setTimeout(function(){
      $("body").removeClass("game-over");
    },200)
    $("#level-title").text("Game Over-Press Any Key To Restart")
    startOver();
  }
}
function startOver(){
  level=0;
  gamePatttern=[];
  keyPress=false;
}