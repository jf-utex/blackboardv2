

// Get the modal
var modal = document.getElementById('regModal');
var modallog = document.getElementById('logModal');
// Get the button that opens the modal
var btn = document.getElementById("donutnav2");
var btnlog = document.getElementById("donutnav1");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[1];
var spanLog = document.getElementsByClassName("close")[0];

var modalContainer = document.getElementById("modals");

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modalContainer.style.display="block";
  modal.style.display = "block";
}

btnlog.onclick = function() {
  modalContainer.style.display="block";
  modallog.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  modalContainer.style.display = "none";
}

spanLog.onclick = function() {
  modallog.style.display = "none";
  modalContainer.style.display = "none";
}

// $(".btn").click(function(){
//   var id = $(this).attr('id');
//   $(id).modal('show');
// });
//

// for handlebars
// var source = $("#some-template").html();
// var template = Handlebars.compile(source);
//
// var data = {
//     users: [ {
//         person: {
//             firstName: "Garry",
//             lastName: "Finch"
//         },
//         jobTitle: "Front End Technical Lead",
//         twitter: "gazraa"
//     }, {
//         person: {
//             firstName: "Garry",
//             lastName: "Finch"
//         },
//         jobTitle: "Photographer",
//         twitter: "photobasics"
//     }, {
//         person: {
//             firstName: "Garry",
//             lastName: "Finch"
//         },
//         jobTitle: "LEGO Geek",
//         twitter: "minifigures"
//     } ]
// };
//
// Handlebars.registerHelper('fullName', function(person) {
//   return person.firstName + " " + person.lastName;
// });
//
// $('body').append(template(data));
