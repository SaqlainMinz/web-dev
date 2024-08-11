// document.querySelectorAll("button")[0].addEventListener("click",function(){
//     alert("i got clicked 1")
// })
// document.querySelectorAll("button")[1].addEventListener("click",function(){
//     alert("i got clicked 2")
// })
// document.querySelectorAll("button")[2].addEventListener("click",function(){
//     alert("i got clicked 3")
// })
// document.querySelectorAll("button")[3].addEventListener("click",function(){
//     alert("i got clicked 4")
// })
// document.querySelectorAll("button")[4].addEventListener("click",function(){
//     alert("i got clicked 5")
// })
// document.querySelectorAll("button")[5].addEventListener("click",function(){
//     alert("i got clicked 6")
// })
// document.querySelectorAll("button")[6].addEventListener("click",function(){
//     alert("i got clicked 7")
// })

//pressed by mouse
var noOfDrum = document.querySelectorAll(".drum").length;
for (var i = 0; i < noOfDrum; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    makeSound(this.innerHTML);
    activeButton(this.innerHTML);
  });
}

//press by keyboard
document.addEventListener("keydown", function (event) {
  makeSound(event.key);
  activeButton(event.key);
});

//play sound
function makeSound(key) {
  switch (key) {
    case "w":
      var crash = new Audio("./sounds/crash.mp3");
      crash.play();
      break;
    case "a":
      var kickBass = new Audio("./sounds/kick-bass.mp3");
      kickBass.play();
      break;
    case "s":
      var snare = new Audio("./sounds/snare.mp3");
      snare.play();
      break;
    case "d":
      var tom1 = new Audio("./sounds/tom-1.mp3");
      tom1.play();
      break;
    case "j":
      var tom2 = new Audio("./sounds/tom-2.mp3");
      tom2.play();
      break;
    case "k":
      var tom3 = new Audio("./sounds/tom-3.mp3");
      tom3.play();
      break;
    case "l":
      var tom4 = new Audio("./sounds/tom-4.mp3");
      tom4.play();
      break;

    default:
      break;
  }
}
function activeButton(currentKey) {
  var animation = document.querySelector("."+currentKey);
    animation.classList.add("pressed");
    setTimeout(function(){
        animation.classList.remove("pressed")
    },100);

}
