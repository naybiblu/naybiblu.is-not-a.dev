var body = document.body.style;
var buttons = document.getElementsByClassName("button");
var up = document.getElementById("up");
var down = document.getElementById("down");
var placeholder = document.getElementById("logo");
var center = document.getElementById("initial");
var exit = document.getElementById("exit");
var main = document.getElementById("main");
    
const menu = ["about<br>me.", "blog<br>spot.", "shout<br>out."];
const links = [
  "https://facebook.com/justcallmesupernyvhie",
  "https://naybiblu.is-not-a.dev",
  ""
];
let index = 0;
    
placeholder.addEventListener("click", async () => { 
  if (body.backgroundColor === "") {
    center.innerHTML = `<a href=${links[0]}>${menu[0]}</a>`;
    body.backgroundColor = "black";
    center.style.color = "white";
    center.style.backgroundColor = "black";
    center.style.borderColor = "white";
    for (var i of buttons) i.style.opacity = "1";
   }
});
    
exit.addEventListener("click", async() => {
  if (exit.style.opacity === "") return;
    body.backgroundColor = "";
    center.innerHTML = "naybi<br>blu.";
    center.style.color = "";
    center.style.backgroundColor = "";
    center.style.borderColor = "";
    for (var i of buttons) i.style.opacity = "";
});
    
up.addEventListener("click", () => {
   if (up.style.opacity === "") return;
   main.style.animation = "fadeOutUp 0.5s";
   setTimeout(async() => {
     center.innerHTML = `<a href=${links[index]}>${menu[index]}</a>`;
     main.style.animation = "";
   }, 300);
   if (index > 0) {
     --index;
   } else {
     index = menu.length - 1;
   }
});
    
down.addEventListener("click", async () => {
   if (down.style.opacity === "") return;
   main.style.animation = "fadeOutDown 0.5s";
   setTimeout(async() => {
     center.innerHTML = `<a href=${links[index]}>${menu[index]}</a>`;
     main.style.animation = "";
   }, 300);
   if (index !== menu.length - 1) {
     ++index;
   } else {
     index = 0;
   }
});