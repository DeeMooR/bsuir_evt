export const createTourCard = (tour) => {
  const tourCard = document.createElement('div');
  tourCard.classList.add('tour__card');

  tourCard.innerHTML = `
    <img src="${tour.image}" class="tour__image" alt="${tour.title}">
    <div class="tour__iconGroups">
      <div class="iconGroup">
        <img src="./assets/icons/calender.svg" class="iconGroup__icon" alt="calender">
        <p class="iconGroup__text">${tour.days}</p>
      </div>
      <div class="iconGroup">
        <img src="./assets/icons/avatar.svg" class="iconGroup__icon" alt="avatar">
        <p class="iconGroup__text">${tour.people} Going</p>
      </div>
    </div>
    <div class="tour__titleStars">
      <h3 class="tour__title">${tour.title}</h3>
      <div class="tour__stars">
        <img src="../assets/icons/star_fill.svg" class="tour__star" alt="star_fill">
        <img src="../assets/icons/star_fill.svg" class="tour__star" alt="star_fill">
        <img src="../assets/icons/star_fill.svg" class="tour__star" alt="star_fill">
        <img src="../assets/icons/star_fill.svg" class="tour__star" alt="star_fill">
        <img src="../assets/icons/star_fill.svg" class="tour__star" alt="star_fill">
      </div>
    </div>
    <div class="tour__location">
      <img src="./assets/icons/location.svg" class="location__icon" alt="location">
      <p class="location__text">${tour.location}</p>
    </div>
    <div class="tour__costs">
      <p class="tour__currentCost">${tour.currentCost} $</p>
      <p class="tour__oldCost">${tour.oldCost} $</p>
    </div>
    <div class="tour__description">
      ${tour.description}
    </div>
    <button class="tour__button btn btnSmall" id="tour-${tour.id}">Explore Now</button>
  `;
  return tourCard;
}

export const handleTourClick = (event) => {
  const buttonId = event.currentTarget.id;
  const tourId = +buttonId.split('-')[1];
  localStorage.setItem('tourId', tourId);
  window.location.href = `/tour.html`;
}

export const showModal = (modal) => {
  modal.style.display = "block";
  setTimeout(() => {
    modal.style.display = "none";
  }, 3000);
}

export const saveForm = (obj, field) => {
  let array = JSON.parse(localStorage.getItem(field)) ?? [];
  array.push(obj);
  localStorage.setItem(field, JSON.stringify(array));
}

export const hiddenModals = (modals) => {
  modals.forEach(modal => {
    modal.style.display = "none";
  })
}
