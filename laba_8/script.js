const addClass = (buttons, el) => {
  buttons.forEach(btn => btn.classList.remove('active'));
  el.classList.add('active');
}

// grid-template-columns

const repeat = document.querySelector('#repeat');
const fr = document.querySelector('#fr');
const auto300 = document.querySelector('#auto300');

const article1 = document.querySelector('#grid-template-columns');
const parent1 = article1.querySelector('.parent');
const buttons1 = [repeat, fr, auto300];

repeat.addEventListener('click', () => {
  parent1.style.gridTemplateColumns = 'repeat(2, 100px)';
  addClass(buttons1, repeat);
})
fr.addEventListener('click', () => {
  parent1.style.gridTemplateColumns = '1fr 3fr';
  addClass(buttons1, fr);
})
auto300.addEventListener('click', () => {
  parent1.style.gridTemplateColumns = 'auto 300px';
  addClass(buttons1, auto300);
})

// justify-items

const start = document.querySelector('#start');
const end = document.querySelector('#end');
const center = document.querySelector('#center');
const stretch = document.querySelector('#stretch');

const article2 = document.querySelector('#justify-items');
const parent2 = article2.querySelector('.parent');
const buttons2 = [start, end, center, stretch];

start.addEventListener('click', () => {
  parent2.style.justifyItems = 'start';
  addClass(buttons2, start);
})
end.addEventListener('click', () => {
  parent2.style.justifyItems = 'end';
  addClass(buttons2, end);
})
center.addEventListener('click', () => {
  parent2.style.justifyItems = 'center';
  addClass(buttons2, center);
})
stretch.addEventListener('click', () => {
  parent2.style.justifyItems = 'stretch';
  addClass(buttons2, stretch);
})


// grid-auto-flow

const row = document.querySelector('#row');
const column = document.querySelector('#column');
const dense = document.querySelector('#dense');

const article3 = document.querySelector('#grid-auto-flow');
const parent3 = article3.querySelector('.parent');
const buttons3 = [row, column, dense];

row.addEventListener('click', () => {
  parent3.style.gridAutoFlow = 'row';
  addClass(buttons3, row);
})
column.addEventListener('click', () => {
  parent3.style.gridAutoFlow = 'column';
  addClass(buttons3, column);
})
dense.addEventListener('click', () => {
  parent3.style.gridAutoFlow = 'dense';
  addClass(buttons3, dense);
})