var audio = document.getElementById("epk");
var trigger = document.getElementById("gif");
var bStyle = document.body.style;

trigger.addEventListener("click", async () => {
  audio.muted = !audio.muted;
  if (bStyle.backgroundColor === "") {
    bStyle.backgroundColor === "#00008b" 
  } else {
    bStyle.backgroundColor === "";
  }
});
