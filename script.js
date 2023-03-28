const hours1 = document.querySelector("#hours");
const minutes1 = document.querySelector("#minutes");
const seconds1 = document.querySelector("#seconds");
const milliseconds1 = document.querySelector("#milliseconds");

const startbtn = document.querySelector("#startbtn");
const stopbtn = document.querySelector("#stopbtn");
const resumebtn = document.querySelector("#resumebtn");
const restartbtn = document.querySelector("#restartbtn");

let interval;
let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let isStop = false;

startbtn.addEventListener("click", () => {
  clearInterval(interval);
  let hours = 0;
  let minutes = 0;
  let seconds = 0;
  let milliseconds = 0;

  hours1.textContent = "00";
  minutes1.textContent = "00";
  seconds1.textContent = "00";
  milliseconds1.textContent = "000";

  restartbtn.style.display = "block";
  interval = setInterval(() => {
    if (!isStop) {
      milliseconds += 10;
      if (milliseconds === 1000) {
        seconds++;
        milliseconds = 0;
      }
      if (seconds === 60) {
        minutes++;
        seconds = 0;
      }
      if (minutes === 60) {
        hours++;
        minutes = 0;
      }
      hours1.textContent = formatTime(hours);
      minutes1.textContent = formatTime(minutes);
      seconds1.textContent = formatTime(seconds);
      milliseconds1.textContent = formatTime(milliseconds);
    }
  }, 10);

  startbtn.style.display = "none";
  stopbtn.style.display = "block";
});

stopbtn.addEventListener(
  "click",
  (stopTimer = () => {
    isStop = true;
    stopbtn.style.display = "none";
    resumebtn.style.display = "block";
  })
);
resumebtn.addEventListener(
  "click",
  (resumeTimer = () => {
    isStop = false;
    stopbtn.style.display = "block";
    resumebtn.style.display = "none";
  })
);
restartbtn.addEventListener(
  "click",
  (restartTimer = () => {
    isStop = false;

    restartbtn.style.display = "none";
    stopbtn.style.display = "none";
    startbtn.style.display = "block";
    resumebtn.style.display = "none";
    clearInterval(interval);
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    let milliseconds = 0;

    hours1.textContent = "00";
    minutes1.textContent = "00";
    seconds1.textContent = "00";
    milliseconds1.textContent = "000";
  })
);

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

function formatMilliseconds(time) {
  return time < 100 ? `${time}`.padStart(3, "0") : time;
}
