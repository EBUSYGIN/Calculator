
let calculation = localStorage.getItem('calculation') || '';
  
document.querySelector('.js-display').innerHTML = calculation;

function updateCalculation(update) {
  calculation += update;
  localStorage.setItem('calculation', calculation);
  document.querySelector('.js-display').innerHTML = calculation;
}