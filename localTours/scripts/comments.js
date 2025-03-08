import { comments } from '../data/comments.js'

// Auto scroll comments

const autoScrollComments = () => {
  activeComment = activeComment === comments.length ? 1 : activeComment + 1;
  const oldId = activeComment === 1 ? comments.length : activeComment - 1;
  updateComment(oldId);
}

let autoScrollInterval;
autoScrollInterval = setInterval(autoScrollComments, 6000);

// Click button

const btnLeft = document.querySelector('.card__btnLeft');
const btnRight = document.querySelector('.card__btnRight');

const cardImage = document.querySelector('.card__image');
const cardText = document.querySelector('.card__text');
const cardAuthor = document.querySelector('.card__author');

let activeComment = 1;

const updateComment = (oldId) => {
  const obj = comments.find(item => item.id === activeComment);

  cardImage.classList.add('fade-out');
  cardText.classList.add('fade-out');
  cardAuthor.classList.add('fade-out');
  
  setTimeout(() => {
    cardImage.src = obj.image;
    cardText.textContent = obj.text;
    cardAuthor.textContent = obj.author;
  }, 300); 

  setTimeout(() => {
    cardImage.classList.remove('fade-out');
    cardText.classList.remove('fade-out');
    cardAuthor.classList.remove('fade-out');
  }, 300); 

  const oldElement = document.querySelector(`#pagination_${oldId}`);
  const newElement = document.querySelector(`#pagination_${obj.id}`);
  oldElement.querySelector('hr').classList.remove('active');
  newElement.querySelector('hr').classList.add('active');

  clearInterval(autoScrollInterval);
  autoScrollInterval = setInterval(autoScrollComments, 6000);
}

btnRight.addEventListener('click', () => {
  const oldId = activeComment;
  if (activeComment === comments.length) activeComment = 1;
  else activeComment += 1;

  updateComment(oldId);
})

btnLeft.addEventListener('click', () => {
  const oldId = activeComment;
  if (activeComment === 1) activeComment = comments.length;
  else activeComment -= 1;

  updateComment(oldId);
})

// Click on pagination

const handlePagination = () => {
  const oldId = activeComment;
  const elId = event.currentTarget.id;
  activeComment = +elId.split('_')[1];
  updateComment(oldId);
}

const paginations = document.querySelectorAll('.pagination');

paginations.forEach(element => {
  element.addEventListener('click', handlePagination);
});