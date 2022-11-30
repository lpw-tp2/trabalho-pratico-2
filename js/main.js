const sunEl = document.querySelector('.sun');
const moonEl = document.querySelector('.moon');
const buttonEl = document.querySelector('.container');
const htmlEl = document.querySelector('html');

buttonEl.addEventListener('click', () => {
  sunEl.classList.toggle('visible');
  moonEl.classList.toggle('visible');
  htmlEl.classList.toggle('dark-mode');

  if (htmlEl.classList.contains('dark-mode')) {
    localStorage.setItem('tema', 'branco');
  }
  else {
    localStorage.setItem('tema', 'preto');
  }
});

if (localStorage.getItem('tema') === 'preto') {
  htmlEl.classList.remove('dark-mode');
  sunEl.classList.toggle('visible');
  moonEl.classList.toggle('visible');
}

btnOlhoEl.addEventListener('click', () => {
  if (senhaEl.type === 'password') {
    senhaEl.type = 'text';
  }
  else {
    senhaEl.type = 'password';
  }
});