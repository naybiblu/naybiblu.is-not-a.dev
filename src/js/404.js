var trigger = document.getElementById("gif");
var bStyle = document.body.style;
var desc = document.getElementById("desc");
var img = document.getElementById("img");
const caloocan = "https://media.discordapp.net/attachments/941264858131869776/1028989778496069682/IMG_20221010_191738.jpg";
const def = img.src;
const orig = desc.innerHTML;
var audio = new Audio("./../../resources/easter-eggs/easter-egg-1.mp3");

trigger.addEventListener("click", async () => {
  if (bStyle.backgroundColor === "") {
    bStyle.backgroundColor = "#00008b";
    img.src = caloocan;
    await audio.play();
  } else {
    bStyle.backgroundColor = "";
    await audio.load();
    img.src = def;
    desc.innerHTML = orig;
  }

  var interval = setInterval(async() => {
    if (audio.currentTime >= 10) {
      desc.innerHTML = "Eh, paano kung...";
    }

    if (audio.ended === true) {
      bStyle.backgroundColor = "";
      desc.innerHTML = orig;
      img.src = def;
      clearInterval(interval);
    }
  }, 100);
});
