//@ts-check
const $form = document.getElementById('form');
const $emailField = document.getElementById('email');
const $iconError = document.getElementById('icon-error');
const $txtError = document.getElementById('txt-error');

function isValidEmail(email) {
  const rgx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return rgx.test(email);
}

function uiError(hasEmail) {
  console.log(hasEmail);
  if (hasEmail) {
    $iconError.style.display = 'none';
    $txtError.style.display = 'none';
    return;
  }
  $txtError.style.display = 'block';
  $iconError.style.display = 'inline-block';
  console.log('doest email');
}

function sendEmail(e) {
  e.preventDefault();
  const value = $emailField.value;
  if (!value) return;
  const isEmail = isValidEmail(value);
  uiError(isEmail);
}

$form.addEventListener('submit', sendEmail);
