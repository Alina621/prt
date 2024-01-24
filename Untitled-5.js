let myButton = document.getElementById('myButton');
let elem = document.getElementById('elem');

myButton.addEventListener('click', function() {
  let fontSize = parseFloat(getComputedStyle(elem).fontSize);
  alert('Font Size: ' + fontSize);
});