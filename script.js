/******************************************
/* Ryan Reynolds isn't here - but his magic hair changing JS code is!
/*******************************************/


document.getElementById("red").onclick = partyRed;
document.getElementById("mint").onclick = partyMint;
document.getElementById("yellow").onclick = partyYellow;
document.getElementById("blue").onclick = partyBlue;

function partyRed() {
  document.querySelector("body").style.backgroundColor = "rgba(122,10,10,1)";
  document.querySelector("body").style.color = "white";
  document.querySelector("#og").style.display = "none";
  document.querySelector("#blueImg").style.display = "none";
  document.querySelector("#yellowImg").style.display = "none";
  document.querySelector("#mintImg").style.display = "none";
  document.querySelector("#redImg").style.display = "block";
}

function partyMint() {
  document.getElementById("body").style.backgroundColor = "rgba(69,152,99,1)";
  document.getElementById("body").style.color = "white";
  document.querySelector("#og").style.display = "none";
  document.querySelector("#yellowImg").style.display = "none";
  document.querySelector("#blueImg").style.display = "none";
  document.querySelector("#redImg").style.display = "none";
  document.querySelector("#mintImg").style.display = "block";
}

function partyYellow() {
  document.getElementById("body").style.backgroundColor = "rgba(220,189,37,1)";
  document.getElementById("body").style.color = "white";
  document.querySelector("#og").style.display = "none";
  document.querySelector("#mintImg").style.display = "none";
  document.querySelector("#blueImg").style.display = "none";
  document.querySelector("#redImg").style.display = "none";
  document.querySelector("#yellowImg").style.display = "block";
}

function partyBlue() {
  document.getElementById("body").style.backgroundColor = "rgba(12,135,191,1)";
  document.getElementById("body").style.color = "white";
  document.querySelector("#og").style.display = "none";
  document.querySelector("#redImg").style.display = "none";
  document.querySelector("#mintImg").style.display = "none";
  document.querySelector("#yellowImg").style.display = "none";
  document.querySelector("#blueImg").style.display = "block";
}
