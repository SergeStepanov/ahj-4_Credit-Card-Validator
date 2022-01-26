import paymentSystem from './paymentSystem';
import luhnValidate from './luhnValidate';

export default function interactionsWithDOM() {
  const cards = document.getElementsByClassName('card');
  const input = document.querySelector('.form-control');
  const button = document.querySelector('.btn');

  input.addEventListener('input', () => {
    const resultPS = paymentSystem(input.value);
    // if (resultPS === 'unknown') return;
    console.log(resultPS);
    // console.log(cards);

    for (const iterator of cards) {
      if (input.value.length === 0) {
        iterator.style.opacity = 1;
      } else {
        iterator.style.opacity = 0.3;
      }

      if (iterator.classList.contains(resultPS)) {
        iterator.style.opacity = 1;
      }
    }
  });

  button.addEventListener('click', (event) => {
    event.preventDefault();
    const resLuhn = luhnValidate(input.value);
    if (input.value.length === 0) return;
    // console.log(resLuhn);
    if (resLuhn) {
      document.body.style.backgroundColor = '#6bcf07';
    } else {
      document.body.style.backgroundColor = 'red';
    }
  });
}
