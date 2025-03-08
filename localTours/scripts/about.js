import { showModal, saveForm, hiddenModals, initSlideBar, initToggleTheme, loadTheme } from './helper.js'

loadTheme();

window.addEventListener('load', () => {
  document.body.style.display = 'flex';
});

// Send form

const form = document.querySelector(".contacts__form");
const modals = document.querySelectorAll(".modal");
const closeButtons = document.querySelectorAll('.modal__cross');

const getData = () => {
  const name = document.querySelector("#input-name").value.trim();
  const email = document.querySelector("#input-email").value.trim();
  const phone = document.querySelector("#input-phone").value.trim();
  const message = document.querySelector("#textarea-message").value.trim();

  if (!name || !email || !phone || !message) return null; 
  return { name, email, phone, message };
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = getData();

  if (data) {
    showModal(modals[0]);
    saveForm(data, 'contacts');
    form.reset();
  } else {
    showModal(modals[1]);
  }
});

closeButtons.forEach(button => {
  button.addEventListener('click', () => hiddenModals(modals));
});
 
// Slide Bar, Theme

initSlideBar();
initToggleTheme();