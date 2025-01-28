const addClass = (buttons, el) => {
  buttons.forEach(btn => btn.classList.remove('active'));
  el.classList.add('active');
}

// flex-direction

const row = document.querySelector('#row');
const rowReverse = document.querySelector('#row-reverse');
const column = document.querySelector('#column');
const columnReverse = document.querySelector('#column-reverse');

const article1 = document.querySelector('#flex-direction');
const parent1 = article1.querySelector('.parent');
const buttons1 = [row, rowReverse, column, columnReverse];

row.addEventListener('click', () => {
  parent1.style.flexDirection = 'row';
  addClass(buttons1, row);
})
rowReverse.addEventListener('click', () => {
  parent1.style.flexDirection = 'row-reverse';
  addClass(buttons1, rowReverse);
})
column.addEventListener('click', () => {
  parent1.style.flexDirection = 'column';
  addClass(buttons1, column);
})
columnReverse.addEventListener('click', () => {
  parent1.style.flexDirection = 'column-reverse';
  addClass(buttons1, columnReverse);
})

// flex-wrap

const nowrap = document.querySelector('#nowrap');
const wrap = document.querySelector('#wrap');
const wrapReverse = document.querySelector('#wrap-reverse');

const article2 = document.querySelector('#flex-wrap');
const parent2 = article2.querySelector('.parent');
const buttons2 = [nowrap, wrap, wrapReverse];

nowrap.addEventListener('click', () => {
  parent2.style.flexWrap = 'nowrap';
  addClass(buttons2, nowrap);
})
wrap.addEventListener('click', () => {
  parent2.style.flexWrap = 'wrap';
  addClass(buttons2, wrap);
})
wrapReverse.addEventListener('click', () => {
  parent2.style.flexWrap = 'wrap-reverse';
  addClass(buttons2, wrapReverse);
})

// justify-content

const flexStart = document.querySelector('#flex-start');
const flexEnd = document.querySelector('#flex-end');
const center = document.querySelector('#center');
const spaceBetween = document.querySelector('#space-between');
const spaceAround = document.querySelector('#space-around');
const spaceEvenly = document.querySelector('#space-evenly');

const article3 = document.querySelector('#justify-content');
const parent3 = article3.querySelector('.parent');
const buttons3 = [flexStart, flexEnd, center, spaceBetween, spaceAround, spaceEvenly];

flexStart.addEventListener('click', () => {
  parent3.style.justifyContent = 'flex-start';
  addClass(buttons3, flexStart);
})
flexEnd.addEventListener('click', () => {
  parent3.style.justifyContent = 'flex-end';
  addClass(buttons3, flexEnd);
})
center.addEventListener('click', () => {
  parent3.style.justifyContent = 'center';
  addClass(buttons3, center);
})
spaceBetween.addEventListener('click', () => {
  parent3.style.justifyContent = 'space-between';
  addClass(buttons3, spaceBetween);
})
spaceAround.addEventListener('click', () => {
  parent3.style.justifyContent = 'space-around';
  addClass(buttons3, spaceAround);
})
spaceEvenly.addEventListener('click', () => {
  parent3.style.justifyContent = 'space-evenly';
  addClass(buttons3, spaceEvenly);
})