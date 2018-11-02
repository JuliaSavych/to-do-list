const $input = document.getElementById('item-input');
const $buttonSave = document.getElementById('save');
const $buttonShow = document.getElementById('show-input');

$buttonShow.onclick = function showInput() {
  const $inputHolder = document.getElementById('input-holder');

  if ($inputHolder) {
    $inputHolder.style.display = $inputHolder.style.display === 'flex' ? '' : 'flex';
  }
};

$input.addEventListener ('keypress', () => {

  if ($input.value.length === 0) {
    $buttonSave.disabled = true;
  } else if ($input.value.length > 0) {
    $buttonSave.disabled = false;
  }

});
