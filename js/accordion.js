// FAQ accordion: collapses every answer, then opens or closes one when its question is clicked.
// Without JavaScript all answers stay visible, so no content is ever hidden.

var triggers = document.querySelectorAll(".accordion-trigger");

triggers.forEach(function (trigger) {
  var panel = document.getElementById(trigger.getAttribute("aria-controls"));

  // Start collapsed
  trigger.setAttribute("aria-expanded", "false");
  panel.hidden = true;

  // Click toggles this answer (Enter and Space also work because it is a button)
  trigger.addEventListener("click", function () {
    var isOpen = trigger.getAttribute("aria-expanded") === "true";
    trigger.setAttribute("aria-expanded", String(!isOpen));
    panel.hidden = isOpen;
  });
});
