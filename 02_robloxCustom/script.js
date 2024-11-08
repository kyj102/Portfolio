//1. 웹 브라우저에게 클릭할 이벤트 대상을 알려준다.
// querySelector()
//addEventListener()

//2. 클릭했을때, css로 정의해 놓은 가상클래스를 원하는 요소에 적용시킨다.
// classlist
// add() 혹은 remove()
// button의 기본속성 // 기본속성을 무력화하는 방해요소가 필요함
// => preventDefault

//2_1. 가상클래스 = filledA & filledB 를 적용한다.

// const femaleBtn = document.querySelector("#femalebtn");
// 많은양의 데이터를 처리해야할 때 : getElementById

const femaleBtn = document.getElementById("femalebtn");

const maleBtn = document.getElementById("malebtn");

femaleBtn.addEventListener("click", (event) => {
  event.preventDefault();
  femaleBtn.querySelector("i").classList.toggle("filledA");
  maleBtn.querySelector("i").classList.remove("filledB");
});

maleBtn.addEventListener("click", (event) => {
  event.preventDefault();
  maleBtn.querySelector("i").classList.toggle("filledB");
  femaleBtn.querySelector("i").classList.remove("filledA");
});
