//hides an element based on expiration date

var dueDate = new Date('May 8, 2019');//change the date to the last day you want the element to appear
var today = new Date();
if(today > dueDate){
  document.querySelector("#element-id").remove();//change out #element-id with whatever you need to remove
}
