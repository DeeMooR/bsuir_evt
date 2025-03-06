import { tours } from '../data/tours.js'
import { createTourCard, handleTourClick } from './helper.js'

const toursContainer = document.querySelector('.tours');

tours.forEach(tour => {
  const tourCard = createTourCard(tour);
  toursContainer.appendChild(tourCard);

  const tourImage = document.querySelector(`#image-${tour.id}`);
  tourImage.style.backgroundImage = `url('${tour.image}')`;
});

const buttons = document.querySelectorAll('.tour__button');

buttons.forEach(button => {
  button.addEventListener('click', handleTourClick);
});