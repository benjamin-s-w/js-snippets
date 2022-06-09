// perform different actions after certain dates - for when a practice closed temporarily during COVID

var dueDate = new Date('December 1, 2019');
var expireDate = new Date('February 1, 2020');
var today = new Date();

if (today >= dueDate && today < expireDate) {
  document.getElementById("tense-change").innerHTML = 'has closed';
} else if (today >= expireDate) {
  document.getElementById("alert-module").remove();
}
