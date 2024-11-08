document.addEventListener("DOMContentLoaded", () => {
  const nums = document.querySelectorAll(".number");
  

  for (let i = 0; i < nums.length; i++) {
    const angle = (i + 1) * (Math.PI / 6); 
    

    const x = 155 + 120 * Math.sin(angle) - nums[i].offsetWidth / 2;
    const y = 155 - 120 * Math.cos(angle) - nums[i].offsetHeight / 2;


    nums[i].style.position = 'absolute';
    nums[i].style.left = `${x}px`;
    nums[i].style.top = `${y}px`;
  }


  const hourPointer = document.querySelector("#hour");
  const minutePointer = document.querySelector("#minute");
  const secondPointer = document.querySelector("#second");
  const digitalClock = document.querySelector(".digital-clock");

  const clock = () => {
    const currentTime = new Date();

    let second = currentTime.getSeconds();
    let secondAngle = second * 6;
    let secondAngleValue = `rotate(${secondAngle}deg)`;

    let minute = currentTime.getMinutes();
    let minuteAngle = minute * 6 + (second / 60) * 6;
    let minuteAngleValue = `rotate(${minuteAngle}deg)`;

    let hour = currentTime.getHours();
    let hourAngle = (hour > 12 ? (hour - 12) * 30 : hour * 30) + (minute / 60) * 30; 
    let hourAngleValue = `rotate(${hourAngle}deg)`;

    minutePointer.style.transform = minuteAngleValue;
    secondPointer.style.transform = secondAngleValue;
    hourPointer.style.transform = hourAngleValue;

    let period = "AM";
    if (hour === 0) hour = 12;
    else if (hour > 12) {
      hour -= 12;
      period = "PM";
    }

    hour = hour < 10 ? `0${hour}` : hour;
    minute = minute < 10 ? `0${minute}` : minute;
    second = second < 10 ? `0${second}` : second;

    digitalClock.innerText = `${hour} : ${minute} : ${second} ${period}`;
  };

  setInterval(clock, 1000);
});
