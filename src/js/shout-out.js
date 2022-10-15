const send = document.getElementById("send");
const msg = document.getElementById("message");
      
send.addEventListener("click", async () => {
  if (!msg.value) return alert("MESSAGE! GIVE ME A MESSAGE!!!");
  fetch("https://naypi.is-not-a.dev/api/e-mail", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    mode: 'no-cors', 
    body: JSON.stringify({ content: msg.value })
  }).catch(err => {
  if (err) return alert("Oh, no! A wild error appeared! Please use evade move. " + err);
  alert("Nice one! The message has been sent!");
  window.location.href = "https://naybiblu.is-not-a.dev";
  });
});
