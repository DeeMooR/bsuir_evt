import { tours } from '../data/tours.js'
import { showModal, saveForm, hiddenModals } from './helper.js'

const tourId = +localStorage.getItem('tourId');
const tour = tours.find(item => item.id === tourId);

if (!tour) window.location.href = `/main.html`;

// Fill tour

const fillTourInfo = () => {
  const title = document.querySelector('.tour__title');
  const description = document.querySelector('.tour__description');
  const image = document.querySelector('.tour__image');
  const currentCost = document.querySelector('.tour__currentCost');
  const oldCost = document.querySelector('.tour__oldCost');
  const days = document.querySelector('#days');
  const people = document.querySelector('#people');
  const location = document.querySelector('#location');

  title.textContent = tour.title;
  description.innerHTML = tour.description;
  image.style.backgroundImage = `url('${tour.image}')`;
  currentCost.textContent = tour.currentCost + ' $';
  oldCost.textContent = tour.oldCost + ' $';
  days.textContent = tour.days;
  people.textContent = tour.people + ' Going';
  location.textContent = tour.location;
}

fillTourInfo();

// Send form

const form = document.querySelector(".formBlock__form");
const modals = document.querySelectorAll(".modal");
const closeButtons = document.querySelectorAll('.modal__cross');

const getData = () => {
  const name = document.querySelector("#input-name").value.trim();
  const email = document.querySelector("#input-email").value.trim();
  const phone = document.querySelector("#input-phone").value.trim();
  const date = document.querySelector("#input-date").value.trim();

  if (!name || !email || !phone || !date) return null; 
  return { name, email, phone, date };
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = getData();

  if (data) {
    showModal(modals[0]);
    saveForm(data, 'bookings');
    form.reset();
  } else {
    showModal(modals[1]);
  }
});

closeButtons.forEach(button => {
  button.addEventListener('click', () => hiddenModals(modals));
});