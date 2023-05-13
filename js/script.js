const relogio = document.querySelector('.relogio');
const horas = document.querySelector('.horas');
const minutos = document.querySelector('.minutos');
const segundos = document.querySelector('.segundos');
const body = document.querySelector('body');
const colorBar1 = document.getElementById('color1');
const colorBar2 = document.getElementById('color2');
let value = '100% 100%'; // To keep the background static initially.

setInterval(() => {
  // captures current date and time
  let dateToday = new Date();
  let h = dateToday.getHours(); // hours
  let m = dateToday.getMinutes(); // minutes
  let s = dateToday.getSeconds(); // seconds
  console.log(dateToday);
  // ensures leading zeroes for single digit values
  h = h < 10 ? '0' + h : h;
  m = m < 10 ? '0' + m : m;
  s = s < 10 ? '0' + s : s;

  // inserts values into HTML elements
  horas.textContent = h;
  minutos.textContent = m;
  segundos.textContent = s;
}, 1000);

// Assigns the values of the color bars to the background gradient.
function updateGradient() {
  body.style.background =
    'linear-gradient(90deg, ' + colorBar1.value + ', ' + colorBar2.value + ')';
  body.style.backgroundSize = value; // to keep movement effect during color change
}

// changes background size to keep it static or moving
function stopGradient() {
  value = value === '250% 250%' ? '100% 100%' : '250% 250%';
  body.style.backgroundSize = value;
}

// left color bar
color1.addEventListener('input', function () {
  updateGradient();
});

// right color bar
color2.addEventListener('input', function () {
  updateGradient();
});

// clock body
relogio.addEventListener('click', function () {
  stopGradient();
});
