// 자세히 보기 버튼 클릭 시 토글 기능
// const toggleButton = document.getElementById('toggleInfo');
// const moreInfoBox = document.getElementById('moreInfo');

// toggleButton.addEventListener('click', function() {
//     if (moreInfoBox.style.display === 'none' || moreInfoBox.style.display === '') {
//         moreInfoBox.style.display = 'block';
//         toggleButton.textContent = '간단히 보기';
//     } else {
//         moreInfoBox.style.display = 'none';
//         toggleButton.textContent = '자세히 보기';
//     }
// });

// 1. view버튼을 클릭했을때 modal contents창이 나오도록 한다.
// 2. modal창의 close버튼을 닫으면 다시 메인 창으로 돌아갈 수 있도록 한다.
// const btn = document.querySelectorAll(".view");

// btn.forEach((".view") => {
    
// });

//footer 애니메이션
document.addEventListener('DOMContentLoaded', function() {
  const footertitle = document.querySelector('.footer_title');

  function checkScroll() {
    let scrollPosition = window.scrollY;
    let windowHeight = window.innerHeight;
    let textPosition = footertitle.getBoundingClientRect().top;

    if (textPosition < windowHeight * 0.75) {
      footertitle.classList.add('show');
    } else {
      footertitle.classList.remove('show');
    }
  }

  window.addEventListener('scroll', checkScroll);
});