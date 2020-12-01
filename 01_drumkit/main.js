window.addEventListener('keydown', (e) => {
  console.log(e);
  const keyCode = e.keyCode;
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  console.log(audio);
  if (!audio) return;
  console.log(audio);
  audio.play();
});