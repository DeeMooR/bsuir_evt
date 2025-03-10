export const createTourCard = (tour, page) => {
  const pageClass = page === 'main' && 'isMain';
  const tourCard = document.createElement('div');
  tourCard.classList.add('tour__card', pageClass);

  tourCard.innerHTML = `
    <div class="tour__image" id="image-${tour.id}"></div>
    <div class="tour__iconGroups">
      <div class="iconGroup">
        <img src="./assets/icons/calender.svg" class="iconGroup__icon" alt="calender">
        <p class="iconGroup__text">${tour.days}</p>
      </div>
      <div class="iconGroup">
        <img src="./assets/icons/avatar.svg" class="iconGroup__icon" alt="avatar">
        <p class="iconGroup__text">${tour.people}</p>
      </div>
    </div>
    <div class="tour__titleStars">
      <h3 class="tour__title">${tour.title}</h3>
      <div class="tour__stars">
        <img src="./assets/icons/star_fill.svg" class="tour__star" alt="star">
        <img src="./assets/icons/star_fill.svg" class="tour__star" alt="star">
        <img src="./assets/icons/star_fill.svg" class="tour__star" alt="star">
        <img src="./assets/icons/star_fill.svg" class="tour__star" alt="star">
        <img src="./assets/icons/star_fill.svg" class="tour__star" alt="star">
      </div>
      <div class="tour__starsShort">
        <span class="starsShort__number">5</span>
        <img src="./assets/icons/star_fill.svg" class="starsShort__star" alt="star">
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
  window.location.href = 'tour.html';
}

// Modal

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

// Slide Bar

export const initSlideBar = () => {
  const btnMenu = document.querySelector('.header__menu');
  const btnClose = document.querySelector('.slideBar__cross');
  const slideBar = document.querySelector('.slideBar');

  btnMenu.addEventListener('click', () => {
    slideBar.classList.add('show');
  })

  btnClose.addEventListener('click', () => {
    slideBar.classList.remove('show');
  })
}

// Toggle Theme

const handleToggleTheme = (buttons, setDark) => {
  if (setDark) {
    buttons.forEach(item => {
      const img = item.querySelector('img');
      img.src = './assets/icons/sunny.svg'
    });
    document.body.classList.add('dark-theme');
    localStorage.setItem('theme', 'dark');
  } else {
    buttons.forEach(item => {
      const img = item.querySelector('img');
      img.src = './assets/icons/moon.svg'
    });
    document.body.classList.remove('dark-theme');
    localStorage.setItem('theme', 'light');
  }
}

export const initToggleTheme = () => {
  const btnThemeHeader = document.querySelector('.header__theme');
  const btnThemeSlideBar = document.querySelector('.slideBar__theme');
  const buttons = [btnThemeHeader, btnThemeSlideBar];

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const setDark = !document.body.classList.contains('dark-theme');
      handleToggleTheme(buttons, setDark)
    });
  });
}

export const loadTheme = () => {
  const btnThemeHeader = document.querySelector('.header__theme');
  const btnThemeSlideBar = document.querySelector('.slideBar__theme');
  const buttons = [btnThemeHeader, btnThemeSlideBar];
  
  const setDark = localStorage.getItem('theme') === 'dark';
  handleToggleTheme(buttons, setDark);
}