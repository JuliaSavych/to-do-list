const $input = document.getElementById('input');
const $buttonSave = document.getElementById('save');

$input.addEventListener('keypress', () => {
  if ($input.value.length === 0) {
    $buttonSave.disabled = true;
  } else if ($input.value.length > 0) {
    $buttonSave.disabled = false;
  }
});

