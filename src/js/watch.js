const HOURSE = document.getElementById("hourse");
const MINUTES = document.getElementById("minutes");
const SECONDS = document.getElementById("seconds");

function refresh() {
  let currentTime = new Date();
  HOURSE.innerText = `${currentTime.getHours()}`;
  MINUTES.innerText = `${currentTime.getMinutes()}`;
  SECONDS.innerText = `${currentTime.getSeconds()}`;
}
setInterval(refresh, 500);
