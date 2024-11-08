// 끝말잇기 게임

// 1.제시어의 끝단어를 확인
// 1_1. 컴퓨터에게 최초의 제시어가 무엇인지 알려 주어야 한다.
// 1_2. 3_1에서 이벤트의 시작을 알리는 입력버튼이 무엇인지 알려 주어야 한다.

// 2. 끝단어로 시작하는 단어 입력
// 2_1. 컴퓨터는 사용자가 입력한 단어가 무엇인지 알아야 한다.
// 2_2. 끝단어로 시작하는 단어와 제시어의 끝단어가 일치하는지, 컴퓨터가 확인할 수 있어야 한다.

// 3. 단어 입력 후, 입력버튼을 누른다.
// 3_1. 입력버튼 클릭 => 일치하는지 아닌지 검증 (*이 과정에서 이벤트가 필요하다.)

// 4. 문제여부를 판단 => 문제가 없다 / 문제가 있다 로 출력할것인지 판단해서 결과값을 도출해주어야 한다.
// 4_1. 조건에 따라 값을 어떻게 출력해줄것인가?

// WordGame
const gameStart = (e) => {
  e.preventDefault();
  // 제시어 확인 : innerText
  let word = document.querySelector("#word").innerText;

  // 제시어의 끝단어와 사용자 입력값의 앞단어를 찾아온다.
  // 해당 input태그 안에 들어간 값을 찾아오는 것 : value
  let myword = document.querySelector("#myword").value;

  // 산기슭의 끝단어 문자열값이 2이지만, 산기슭 단어 전체길이는 3이기 때문에, 2를 찾아오기 위해 전체wordlength에서 -1을 해준다.
  let lastword = word[word.length-1];
  let firstword = myword[0];

  // 제시어의 끝단어와 사용자 입력값의 앞단어가 맞는지 검증하고 결과값을 도출한다.
  // if조건문의 기본형식 : 조건식이 참이면 첫번째 중괄호 실행문을 실행시키고, 참이 아니라면(else) 두번째 중괄호 실행문을 실행시켜라.
  // === : 엄격한 비교연산자(두개도 쓸수있지만 보통 세개짜리를 원칙적으로 사용한다.)
  if(lastword === firstword) {
  document.querySelector("#result").innerText = "정답입니다!";

  // 제시어끝단어와 사용자입력값의 앞단어가 일치할때, 제시어를 사용자 입력단어로 바꿔준다.
  document.querySelector("#word").innerText = myword;

  // 조건식이 참일시, 입력칸 안의 결과값을 reset시켜준다.
  document.querySelector("#myword").value="";
  } else {
  document.querySelector("#result").innerText = "틀렸습니다!";

  // 조건식이 거짓일시, 입력칸 안의 결과값을 reset시켜준다.
  document.querySelector("#myword").value="";
  }
};

// form태그의 input태그 submit속성에서는 click이라는 이벤트핸들러를 쓰지 않는다. submit이라는 이벤트핸들러를 사용한다.
// 리펙토링: submit이라는 버튼을 클릭했을때, gameStart라는 이벤트가 실행되도록 끊어서 변수를 주는것.(상단의 gameStart)
const button = document.querySelector(".word_text form");
button.addEventListener("submit", gameStart);


// LottoGame

// 1부터 45까지의 6개의 숫자가 중복없이 랜덤으로 동시에 추출되어야 함

// 1. 클릭! 이라는 버튼이 무엇인지 컴퓨터에게 알려주어야 함.

// 2. 클릭! 버튼 클릭시, 숫자가 생성되어야 함. (이벤트의 촉매제인 트리거가 되어야 한다.)

// 3. JS > 내장객체(기본으로 탑재되어있는것) > 숫자를 랜덤으로 생성해주는 함수
// 3_1. random() => 0~1미만의 실수를 난수의 형태로 생성
// 0.9999999999999999999 * 45(floor함수사용) || 44(ceil함수사용)
// => 곱했을 때의 최댓값이 45이어야 하기 때문에 어떤 함수를 쓰느냐에 따라 곱할 값이 달라진다.
// (*실수 : 소수점을 가지고 있는 숫자)
// (*난수 : 불규칙적으로 숫자를 생성하는 행위)
// (*소수점을 없애야 하는 필요 : floor() => 소수점을 무조건 버림. || ceil() => 소수점을 무조건 올림. || round() => 소수점을 반올림.)

// 4. 중복X
// 4_1. set() 클래스 => 무작위로 생성된 숫자를 배열에 한개씩 담을 예정 => 만약 중복된 값이 생성되는 경우, 1개로 합쳐주는 역할.
// 4_2. 6개의 숫자 완성 => 2번째 & 4번째 숫자가 같은 경우,
// 조건문 => 재추첨을 하겠다. (다시 섞음.)

const lottoButton = document.querySelector(".wrapper_lotto_btn");
const result = document.querySelector(".game_lotto_number");

const luckyNumber = {
  digitCount: 6,
  maxNumber: 44,
};

// 구조분해할당
const startLotto = () => {
const {digitCount,maxNumber} = luckyNumber;
let myNumber = new Set();
console.log(myNumber);
for(let i = 0; i < digitCount; i++) {
  myNumber.add(Math.floor(Math.random() * maxNumber) + 1);
  }
  if(myNumber.size === 6) {
    result.innerText = `${[...myNumber]}`;
  } else {
    result.innerText = "재추첨 하겠습니다!";
  }
};

lottoButton.addEventListener("click", startLotto);