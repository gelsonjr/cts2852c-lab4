/* CTS2852C - Lab4
Gelson Cardoso */

"use strict";

$(document).ready(function () {
  $("#submit").click(function () {
    if (document.getElementById('hide').checked) {
      $("#ninja").hide();
    }
    if (document.getElementById('show').checked) {
      $("#ninja").show();
    }
    if (document.getElementById('toggle').checked) {
      $("#ninja").toggle();
    }
    if (document.getElementById('fade-out').checked) {
      $("#ninja").fadeOut();
    }
    if (document.getElementById('fade-in').checked) {
      $("#ninja").fadeIn();
    }
    if (document.getElementById('slide-up').checked) {
      $("#ninja").slideUp();
    }
    if (document.getElementById('slide-down').checked) {
      $("#ninja").slideDown();
    }
    if (document.getElementById('slide-toggle').checked) {
      $("#ninja").slideToggle();
    }
    if (document.getElementById('fade-to').checked) {
      $("#ninja").fadeTo(1000, 0);
    }
  });
});
