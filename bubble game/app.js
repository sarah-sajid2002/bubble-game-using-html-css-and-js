let score = 0;

function randomNumber() {
  let randomNum = Math.floor(Math.random() * 10);
  return randomNum;
}

function createBubble() {
  let bubbleCreation = document.querySelector(".playStation");
  let element = "";
  for (let i = 0; i < 98; i++) {
    let bubble = `<div class="bubble">${randomNumber()}</div>`;
    element += bubble;
  }
  bubbleCreation.innerHTML = element;
}

function timer() {
  let timeStart = 60;
  let timeChange = setInterval(() => {
    if (timeStart > 0) {
      timeStart--;
      document.querySelector(".timerDiv").innerText = timeStart;
    } else {
      clearInterval(timeChange);
      document.querySelector(
        ".playStation"
      ).innerHTML = `<center> <h1> TIME FINISHED! THANKS FOR PLAYING \n
        YOUR SCORE : ${score}</h1></center> `;
      clearTimeout(secondsChangeBubble);
      clearTimeout(secondsChangeHit);
    }
  }, 1000);
}

function hitBubble() {
  document.querySelector(".hitDiv").innerText = randomNumber();
}
let secondsChangeBubble = setInterval(createBubble, 2000);
let secondsChangeHit = setInterval(hitBubble, 2000);
document.querySelector(".playStation").addEventListener("click", function (e) {
  console.log(e.target.innerText);

  if (e.target.innerText === document.querySelector(".hitDiv").innerText) {
    score += 10;
    document.querySelector(".scoreDiv").innerText = score;
    document.querySelector(".playStation").style.backgroundColor = "white";
    document.querySelector(".scoreDiv").style.backgroundColor = "white";
    hitBubble();
    createBubble();
  } else {
    if (score >= 10) {
      score -= 10;
      document.querySelector(".scoreDiv").innerText = score;
    } else {
      score = 0;
      document.querySelector(".scoreDiv").innerText = score;
    }
    let changeBackground = setTimeout(() => {
      document.querySelector(".playStation").style.backgroundColor = "red";
      document.querySelector(".scoreDiv").style.backgroundColor = "red";
    }, 0);
    let removeChange = setTimeout(() => {
      document.querySelector(".playStation").style.backgroundColor = "white";
      document.querySelector(".scoreDiv").style.backgroundColor = "white";
    }, 500);
    hitBubble();
    createBubble();
  }
});

createBubble();
timer();
hitBubble();
secondsChangeBubble();
secondsChangeHit();
