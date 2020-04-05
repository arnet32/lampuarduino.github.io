// const statuslamp = document.getElementById("status").value;
const btn1On = document.getElementById("btn1_on");
const btn1Off = document.getElementById("btn1_off");
const btn2On = document.getElementById("btn2_on");
const btn2Off = document.getElementById("btn2_off");
const btn3On = document.getElementById("btn3_on");
const btn3Off = document.getElementById("btn3_off");
const btn4On = document.getElementById("btn4_on");
const btn4Off = document.getElementById("btn4_off");

const database = firebase.database();
btn1On.addEventListener("click", (e) => {
  e.preventDefault();
  database.ref().set({
    Relay: "ON",
  });
});

btn1Off.addEventListener("click", (e) => {
  e.preventDefault();
  database.ref().set({
    Relay: "OFF",
  });
});

btn2On.addEventListener("click", (e) => {
  e.preventDefault();
  database.ref().set({
    Relay2: "ON",
  });
});

btn2Off.addEventListener("click", (e) => {
  e.preventDefault();
  database.ref().set({
    Relay2: "OFF",
  });
});

btn3On.addEventListener("click", (e) => {
  e.preventDefault();
  database.ref().set({
    Relay3: "ON",
  });
});

btn3Off.addEventListener("click", (e) => {
  e.preventDefault();
  database.ref().set({
    Relay3: "OFF",
  });
});

btn4On.addEventListener("click", (e) => {
  e.preventDefault();
  database.ref().set({
    Relay4: "ON",
  });
});

btn4Off.addEventListener("click", (e) => {
  e.preventDefault();
  database.ref().set({
    Relay4: "OFF",
  });
});
