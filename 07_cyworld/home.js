document.getElementById('todayDiarySubmit').addEventListener('click', function() {
  const diaryInput = document.getElementById('todayDiary');
  const diaryText = document.querySelector('.diaryText');

  const text = diaryInput.value.trim();
  console.log(text);
  
  if (text) {
      const newEntry = document.createElement('div');
      newEntry.textContent = text;
      diaryText.appendChild(newEntry);
      diaryInput.value = '';
      diaryText.scrollTop = diaryText.scrollHeight;
  }
});