document.body.style.background = "black";

const word = document.createElement("div");
word.innerText = "فريدة";

word.style.color = "white";
word.style.fontSize = "80px";
word.style.position = "absolute";
word.style.top = "40%";
word.style.left = "50%";
word.style.transform = "translateX(-50%)";

document.body.appendChild(word);
