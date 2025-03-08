import { tours } from '../data/tours.js'
import { createTourCard, handleTourClick, initSlideBar, initToggleTheme } from './helper.js'

const toursContainer = document.querySelector('.tours');

tours.slice(0, 3).forEach(tour => {
  const tourCard = createTourCard(tour, 'main');
  toursContainer.appendChild(tourCard);

  const tourImage = document.querySelector(`#image-${tour.id}`);
  tourImage.style.backgroundImage = `url('${tour.image}')`;
});

const buttons = document.querySelectorAll('.tour__button');

buttons.forEach(button => {
  button.addEventListener('click', handleTourClick);
});

initSlideBar();

initToggleTheme();