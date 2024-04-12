const timer = document.getElementById("timer");
const BTN_START = document.getElementById("btn-start");
const BTN_STOP = document.getElementById("btn-stop");
const BTN_RESET = document.getElementById("btn-reset");

let startTime = 0;
let elapsedTime = 0;
let isRunning = false;
let timeerId;

function updateTime() {
  elapsedTime = Date.now() - startTime;
  let minutes = Math.floor(elapsedTime / (60 * 1000));
  let seconds = Math.floor((elapsedTime - minutes * 60 * 1000) / 1000);
  let milliseconds = elapsedTime - minutes * 60 * 1000 - seconds * 1000;

  minutes = minutes.toString().padStart(2, "0");
  seconds = seconds.toString().padStart(2, "0");
  milliseconds = milliseconds.toString().padStart(3, "0");

  timer.textContent = `${minutes} : ${seconds} : ${milliseconds}`;
}

function startTimer() {
  if (!isRunning) {
    isRunning = true;
    startTime = Date.now() - elapsedTime;
    timeerId = setInterval(updateTime, 10);
  }
}

function stopTimer() {
  if (isRunning) {
    isRunning = false;
    clearInterval(timeerId);
  }
}

function resetTimer() {
  stopTimer();
  elapsedTime = 0;
  timer.textContent = " 00 : 00 : 000";
}

BTN_START.addEventListener("click", startTimer);
BTN_RESET.addEventListener("click", resetTimer);
BTN_STOP.addEventListener("click", stopTimer);
