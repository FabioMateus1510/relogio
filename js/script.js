const relogio = document.querySelector('.relogio');
const horas = document.querySelector('.horas');
const minutos = document.querySelector('.minutos');
const segundos = document.querySelector('.segundos');
const body = document.querySelector('body');
const color1 = document.getElementById('color1');
const color2 = document.getElementById('color2');
let value = '250% 250%';

setInterval(() => {
  let dateToday = new Date();
  let hr = dateToday.getHours();
  let min = dateToday.getMinutes();
  let s = dateToday.getSeconds();

  if (hr < 10) hr = '0' + hr;
  if (min < 10) min = '0' + min;
  if (s < 10) s = '0' + s;

  horas.textContent = hr;
  minutos.textContent = min;
  segundos.textContent = s;
});

function updateGradient() {
  body.style.background =
    'linear-gradient(90deg, ' + color1.value + ', ' + color2.value + ')';
  body.style.backgroundSize = value;
}

function stopGradient() {
  value = value === '250% 250%' ? '100% 100%' : '250% 250%';
  body.style.backgroundSize = value;
}

color1.addEventListener('input', function () {
  updateGradient();
});

color2.addEventListener('input', function () {
  updateGradient();
});

relogio.addEventListener('click', function () {
  stopGradient();
});
