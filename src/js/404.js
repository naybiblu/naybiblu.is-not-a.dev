var trigger = document.getElementById("gif");
var bStyle = document.body.style;
var audio = new Audio("./../../resources/easter-eggs/easter-egg-1.mp3");

trigger.addEventListener("click", async () => {
  if (bStyle.backgroundColor === "") {
    bStyle.backgroundColor = "#00008b"
    audio.play(); 
  } else {
    bStyle.backgroundColor = "";
    audio.load();
  }
});
