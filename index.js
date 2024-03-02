var len = document.getElementsByClassName("drum").length;
// mouse
for (var i = 0; i < len; i++) {
  document
    .getElementsByTagName("button")
    [i].addEventListener("click", function () {
      let buttonChar = this.innerHTML;
      makeSound(buttonChar);
    });
}
// keyboard
document.addEventListener("keypress", function (event) {
  makeSound(event.key);
});

// Sound making..
function makeSound(buttonChar) {
  switch (buttonChar) {
    case "l":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;

    case "k":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    case "w":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "space":
      console.log(buttonChar);
      break;

    default:
      console.log(buttonChar);
      break;
  }
}
