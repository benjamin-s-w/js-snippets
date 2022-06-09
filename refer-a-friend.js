// replaces a refer-a-friend form's default message with user generated values inserted within the same message

window.onload = function() {

  //elements
  var to = 'Friend';
  var from = 'Your friend';
  var typedTo = document.getElementById('nf-field-11');
  var message = document.getElementById('nf-field-8');
  var typedFrom = document.getElementById('nf-field-6');

  //events
  if (typedTo) {
    typedTo.addEventListener('blur', toSwap, false);
  }
  if (typedFrom) {
    typedFrom.addEventListener('blur', fromSwap, false);
  }

  //functions
  function toSwap() {
    to = typedTo.value;
    textSwap(from, to);
  }

  function fromSwap() {
    from = typedFrom.value;
    textSwap(from, to);
  }

  function textSwap(a, b) {
    if (message) {
      message.value = `Dear ${b},

I thought of you when I recently saw an offer for a FREE, no-strings-attached hearing test while browsing the website of my favorite audiologist, Dr. Susan Q. Hearbetter of Hearing Aid Center.

She is conveniently located in Smalltown to serve you. Please, consider visiting them at their website: www.domain.com to set up your appointment whenever it would suit you best.

You can also call her office directly at (123) 456-7890.

Sincerely,

${a}`;
      }
    }

  }
