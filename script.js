const container = document.querySelector('.container');
const thanksContainer = document.querySelector('.thank-you');
const submitButton = document.getElementById('submit');
const rateAgain = document.getElementById('rate-again');

const rating = document.getElementById('rating');
const rates = document.querySelectorAll('.btn');

submitButton.addEventListener('click', () => {
  thanksContainer.classList.remove('hidden');
  container.classList.add('hidden');
});

rateAgain.addEventListener('click', () => {
  thanksContainer.classList.add('hidden');
  container.classList.remove('hidden');
});

rates.forEach((rate) => {
  rate.addEventListener('click', () => {
    rating.innerHTML = rate.innerHTML;
  });
});
