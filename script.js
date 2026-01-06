// إنشاء الكلمة
const word = document.createElement("div");
word.innerText = "Farida";

word.style.position = "absolute";
word.style.top = "40%";
word.style.left = "50%";
word.style.transform = "translate(-50%, 0)";
word.style.color = "white";
word.style.fontSize = "16vw";
word.style.fontWeight = "600";
word.style.userSelect = "none";

document.body.appendChild(word);

// حركة السقوط
let y = 0;

const fall = setInterval(() => {
  y += 4;
  word.style.transform = `translate(-50%, ${y}px)`;

  if (y >= 200) {
    clearInterval(fall);
    breakWord();
  }
}, 16);

// مرحلة التكسير (بداية بسيطة)
function breakWord() {
  word.style.transition = "all 1s ease";
  word.style.letterSpacing = "0.5em";
  word.style.opacity = "0.3";
}
