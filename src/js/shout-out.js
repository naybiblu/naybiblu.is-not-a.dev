const send = document.getElementById("send");
const msg = document.getElementById("message");
      
send.addEventListener("submit", async (event) => {
  if (!msg.value) return alert("MESSAGE! GIVE ME A MESSAGE!!!");
  event.preventDefault()
  fetch("https://naypi.is-not-a.dev/api/e-mail", {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
    cache: 'no-cache',
    credentials: 'same-origin', 
    body: JSON.stringify({ content: msg.value }),
  })
    .then(res => res.json());
    .then(res => {
      alert("Nice one! The message has been sent!");
      window.location.href = "https://naybiblu.is-not-a.dev";
    })
    .catch(err => alert("Oh, no! A wild error appeared! Please use evade.\n" + err));
});
