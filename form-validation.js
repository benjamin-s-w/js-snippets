// when you need to make sure user input matches certain formats, like no Cyrillic characters

// variables
const textArea = document.querySelector('textarea');
const pattern = /[\u0400-\u04FF]/;
const submit = document.querySelector('input[type="submit"]');

// event
if (textArea) {
  textArea.addEventListener('blur', cyrTest, false);
}

// function
function cyrTest() {
  const message = textArea.value;
  if (pattern.test(message)) {
    submit.remove();
    setTimeout(function(){ alert('Please reload the page and type English characters only into the form. Thank you!'); }, 1000);
  }
}
