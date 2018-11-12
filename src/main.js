import {getAdapter} from './services';

import './styles/main.scss';
import './index.js'

const $input = document.getElementById('input');
const $buttonSave = document.getElementById('save');
const $buttonShow = document.getElementById('show-input');
const $buttonRemoveAll = document.getElementById('clear-all');
const $tasksList = document.getElementById('taskList');

const adapter = getAdapter('localStorage');

$buttonRemoveAll.addEventListener('click', () => {
  adapter.removeAll();
  $tasksList.innerHTML = '';
});

$buttonShow.addEventListener('click', event => {
  const $inputHolder = document.getElementById('input-holder');

  if ($inputHolder) {
    $inputHolder.style.display = $inputHolder.style.display === 'flex' ? '' : 'flex';
  }
});

$input.addEventListener('keyup', event => {
  if (event.key === 'Enter') {
    addItem();
  }
});

$buttonSave.addEventListener('click', event => {
    addItem();
});

const addItem = () => {
  const value = $input.value;

  adapter.save(value);
  renderTask(createTask(value));
  event.target.value = '';
}


const createTask = value => {
  const $li = document.createElement('li');

  $li.className = 'taskList-item';
  $li.innerHTML = `
    <div class="list-item">
      <input class="checkbox" type="checkbox"> 
      <span class="value">${value}</span>
    </div>
    <div class="icons">
      <i class="fas fa-trash-alt"></i>
      <i class="fas fa-edit"></i>
    </div>
  `;

  return $li;
  console.log(localStorageService);
};

const renderTask = data => {
  $tasksList.appendChild(data);
};

const initialize = arr => {
  arr.forEach(item => renderTask(createTask(item)));
};

adapter.read()
  .then(data => {
    initialize(data);
});
