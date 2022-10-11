var trigger = document.getElementById("gif");
var bStyle = document.body.style;
var desc = document.getElementById("desc");
var audio = new Audio("./../../resources/easter-eggs/easter-egg-1.mp3");

trigger.addEventListener("click", async () => {
  if (bStyle.backgroundColor === "") {
    bStyle.backgroundColor = "#00008b"
    await audio.play();
  } else {
    bStyle.backgroundColor = "";
    await audio.load();
  }

  var interval = setInterval(async() => {
    if (audio.currentTime >= 10) {
      desc.innerHTML = "Eh, paano kung...";
    }

    if (audio.ended === true) {
      bStyle.backgroundColor = "";
      desc.innerHTML = "It's not magic.<br>Just an <ins>imaginary page</ins>.";
      clearInterval(interval);
    }
  }, 100);
});
