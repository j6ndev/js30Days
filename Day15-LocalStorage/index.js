function populateList(plates = [], list) {
  list.innerHTML = plates.map((plate, i) => {
    return `
      <li>
        <input type="checkbox" data-index="${i}" id="item${i}" ${plate.done ? 'checked' : ''}/>
        <label for="item${i}">${plate.text}</label>
      </li>
    `;
  }).join('');
}

function addItem(e) {
  e.preventDefault();
  const text = (this.querySelector('[name=item]')).value;
  const item = { text, done: false };
  items.push(item);
  populateList(items, itemList);
  localStorage.setItem('items', JSON.stringify(items));
  this.reset();
};

function toggleDone(e) {
  if(!e.target.matches('input')) return;
  const index = e.target.dataset.index;
  items[index].done = !items[index].done;
  localStorage.setItem('items', JSON.stringify(items));
  populateList(items, itemList);
};

const addItemForm = document.querySelector('.add-items');
const itemList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || [];

addItemForm.addEventListener('submit', addItem);
itemList.addEventListener('click', toggleDone);

populateList(items, itemList);
