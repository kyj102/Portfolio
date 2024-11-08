const todayKey = 'todayCount';
const totalKey = 'totalCount';
const visitedKey = 'visited';
const initialTotal = 1234;

let todayCount = parseInt(localStorage.getItem(todayKey)) || 0;
let totalCount = parseInt(localStorage.getItem(totalKey)) || initialTotal;

if (!localStorage.getItem(visitedKey)) {
    todayCount += 1;
    totalCount += 1;
    localStorage.setItem(todayKey, todayCount);
    localStorage.setItem(totalKey, totalCount);
    localStorage.setItem(visitedKey, true);
}

document.querySelector('.today-value').textContent = todayCount;
document.querySelector('.total-value').textContent = totalCount;

const menuHome = document.querySelector("#menuHome");
const menuGame = document.querySelector("#menuGame");
const menuJukeBox = document.querySelector("#menuJukeBox");
const menuClock = document.querySelector("#menuClock");
const contentFrame = document.querySelector("#contentFrame");

const homeChange = () => {
  contentFrame.setAttribute("src", "./home.html");
  menuHome.style = "background: #fff; color: #0044ffcc";
  menuGame.style = "background: #0044ffcc; color: #fff";
  menuJukeBox.style = "background: #0044ffcc; color: #fff";
  menuClock.style = "background: #0044ffcc; color: #fff";
};
const gameChange = () => {
  contentFrame.setAttribute("src", "./game.html");
  menuHome.style = "background: #0044ffcc; color: #fff";
  menuGame.style = "background: #fff; color: #0044ffcc";
  menuJukeBox.style = "background: #0044ffcc; color: #fff";
  menuClock.style = "background: #0044ffcc; color: #fff";
};
const jukeBoxChange = () => {
  contentFrame.setAttribute("src", "./jukebox.html");
  menuHome.style = "background: #0044ffcc; color: #fff";
  menuGame.style = "background: #0044ffcc; color: #fff";
  menuJukeBox.style = "background: #fff; color: #0044ffcc";
  menuClock.style = "background: #0044ffcc; color: #fff";
};
const ClockChange = () => {
  contentFrame.setAttribute("src", "./clock.html");
  menuHome.style = "background: #0044ffcc; color: #fff";
  menuGame.style = "background: #0044ffcc; color: #fff";
  menuJukeBox.style = "background: #0044ffcc; color: #fff";
  menuClock.style = "background: #fff; color: #0044ffcc";
};

menuHome.addEventListener("click", homeChange);
menuGame.addEventListener("click", gameChange);
menuJukeBox.addEventListener("click", jukeBoxChange);
menuClock.addEventListener("click", ClockChange);