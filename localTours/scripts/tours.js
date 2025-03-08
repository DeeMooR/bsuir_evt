import { tours } from '../data/tours.js'
import { createTourCard, handleTourClick, initSlideBar, initToggleTheme, loadTheme } from './helper.js'

loadTheme();

window.addEventListener('load', () => {
  document.body.style.display = 'flex';
});

// Load Tours

const toursContainer = document.querySelector('.tours');

tours.forEach(tour => {
  const tourCard = createTourCard(tour, 'tours');
  toursContainer.appendChild(tourCard);

  const tourImage = document.querySelector(`#image-${tour.id}`);
  tourImage.style.backgroundImage = `url('${tour.image}')`;
});

// Click Button

const buttons = document.querySelectorAll('.tour__button');

buttons.forEach(button => {
  button.addEventListener('click', handleTourClick);
});

// Slide Bar, Theme

initSlideBar();
initToggleTheme();