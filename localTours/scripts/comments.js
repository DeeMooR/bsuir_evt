import { comments } from '../data/comments.js'

const btnLeft = document.querySelector('.card__btnLeft');
const btnRight = document.querySelector('.card__btnRight');

const cardImage = document.querySelector('.card__image');
const cardText = document.querySelector('.card__text');
const cardAuthor = document.querySelector('.card__author');

let activeComment = 1;

const updateComment = (oldId) => {
  const obj = comments.find(item => item.id === activeComment);
  cardImage.src = obj.image;
  cardText.textContent = obj.text;
  cardAuthor.textContent = obj.author;
  
  const oldElement = document.querySelector(`#pagination_${oldId}`);
  const newElement = document.querySelector(`#pagination_${obj.id}`);
  oldElement.classList.remove('pagination__active');
  newElement.classList.add('pagination__active');
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

const hrs = document.querySelectorAll('hr');

hrs.forEach(element => {
  element.addEventListener('click', () => {
    const oldId = activeComment;
    const elId = event.currentTarget.id;
    activeComment = +elId.split('_')[1];
    
    updateComment(oldId);
  });
});