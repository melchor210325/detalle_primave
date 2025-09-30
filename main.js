const audioBtn = document.getElementById('audio-btn');
const audio = document.getElementById('primavera-audio');

audioBtn.addEventListener('click', () => {
  audio.play();
});