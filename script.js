var yesButton = document.querySelector('.yes-button');
var noButton = document.querySelector('.no-button');
var submitButton = document.querySelector('.submit-button');

yesButton.addEventListener('click', handleYesButtonClick);
noButton.addEventListener('click', handleNoButtonClick);
submitButton.addEventListener('click', handleSubmitButtonClick);

function handleYesButtonClick() {
  var passwordInput = document.querySelector('.password-input');
  passwordInput.classList.remove('hidden');
}

function handleNoButtonClick() {
  var messageDisplay = document.querySelector('.message-display');
	handleYesButtonClick();
  messageDisplay.textContent = 'Please contact us at waitlist@inquisity.co for a chance to obtain access.';
}

function handleSubmitButtonClick() {
  var password = document.querySelector('#password').value;
  var messageDisplay = document.querySelector('.message-display');

  if (password === '') {
    messageDisplay.textContent = 'Please enter a password.';
  } else {
    messageDisplay.textContent = "We're sorry, but that password is incorrect. Please contact us at waitlist@inquisity.co for a chance to obtain access.";
  }
}