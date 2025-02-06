const btnConfetti = document.querySelector('.btn-confetti');
const btnSettings = document.querySelector('.btn-settings');
const btnOkay = document.querySelector('.btn-okay');
const message = document.querySelector('.message');
const settings = document.querySelector('.settings');
const audio = document.querySelector('audio');

btnConfetti.addEventListener('click', () => {
  confetti();
  audio.pause();
  audio.currentTime = 0;
  audio.play();
});

btnSettings.addEventListener('click', () => {
  message.value = '';
  settings.classList.remove('hide');
  message.focus();
});

btnOkay.addEventListener('click', () => {
  const value = message.value.trim().substring(0, 20);
  btnConfetti.textContent = value === '' ? 'Confetti 🎊' : value;
  settings.classList.add('hide');
});

message.addEventListener('keydown', event => {
  switch (event.key) {
    case 'Enter':
      btnOkay.click();
      break;

    case 'Escape':
      settings.classList.add('hide');
      message.value = '';
      break;
  }
});
