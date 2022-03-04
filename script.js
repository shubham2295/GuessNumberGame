//generating random number
let randomNumber = Math.trunc(Math.random() * 20);
console.log(randomNumber);
let score = 20;
let highscore = 0;

//Utility functions
const selectElement = function (selector) {
  return document.querySelector(selector);
};

const setText = function (selector, message) {
  selectElement(selector).textContent = message;
};

const getValue = function (selector) {
  return selectElement(selector).value;
};

//get user input
//document.querySelector('.input').value = 17;
let currentNumber = Number(getValue(".input"));
//console.log(typeof currentNumber)

//game brain

//action on chceck button click

const checkButton = selectElement(".check");

checkButton.addEventListener("click", function () {
  if (score > 1) {
    currentNumber = Number(getValue(".input"));
    if (!currentNumber) {
      setText(".instructions", "❌ Not a number.....");
    } else if (currentNumber === randomNumber) {
      setText(".instructions", "✨ Hurray you've crack the code.....");
      selectElement("body").style.backgroundColor = "#4CAF50";
      if (score > highscore) {
        highscore = score;
      }
      setText(".highscore", highscore);
      setText(".box", randomNumber);
    } else if (currentNumber !== randomNumber) {
      setText(
        ".instructions",
        currentNumber > randomNumber ? "📈 Too high....." : "📉 Too low....."
      );
      score--;
      setText(".score", score);
    }
  } else {
    setText(".instructions", "😕 You lost it.....");
    setText(".score", 0);
  }
});

//reset the game
const resetButton = selectElement(".reset");
resetButton.addEventListener("click", function () {
  if (score > highscore) {
    highscore = score;
  }
  setText(".highscore", highscore);
  randomNumber = Math.trunc(Math.random() * 20);
  console.log(randomNumber);
  setText(".instructions", "🎯 Start guessing.....");
  score = 20;
  setText(".score", score);
  selectElement("body").style.backgroundColor = "black";
  setText(".box", "?");
  selectElement(".input").value = "";
});
