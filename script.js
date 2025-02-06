const button = document.querySelector('button');
const audio = document.querySelector('audio');

button.addEventListener('click', () => {
  confetti();
  audio.pause();
  audio.currentTime = 0;
  audio.play();
});
