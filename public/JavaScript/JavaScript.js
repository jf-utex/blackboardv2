

// Get the modal
var modalreg = document.getElementById('regModal');
var modallog = document.getElementById('logModal');
// Get the button that opens the modal
var btnreg = document.getElementById("regBtn");
var btnlog = document.getElementById("logBtn");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
