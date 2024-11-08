// console.log();

// 재생버튼 눌렀을때 음악 재생, 일시정지 버튼 눌렀을때 일시정지
const songs = document.querySelectorAll(".albumTable_song");
for(let song of songs) {
  const play = song.querySelector(".fa-caret-right");
  const pause = song.querySelector(".fa-pause");
  play.addEventListener("click", (e) => {
    console.log(e);
    e.target.closest("td").querySelector("audio").play();
  });
  pause.addEventListener("click", (e) => {
    e.target.closest("td").querySelector("audio").pause();
  });
}

