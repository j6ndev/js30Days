const hourHand = document.querySelector('.hour-hand');
const minHand = document.querySelector('.min-hand');
const secondHands = document.querySelector('.second-hand');


function updateClock() {
  const now = new Date();
  const hour = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const getDegrees = (unit, d) => ((unit / d) * 360) + 90;

  hourHand.style.transform = `rotate(${getDegrees(hour, 12)}deg)`;
  minHand.style.transform = `rotate(${getDegrees(minutes, 60)}deg)`;
  secondHands.style.transform = `rotate(${getDegrees(seconds, 60)}deg)`;
}

setInterval(updateClock, 1000);

updateClock();
