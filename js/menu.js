// Mobile menu: adds a Menu button that opens and closes the nav links on small screens.

var nav = document.querySelector(".site-header nav");
var links = nav.querySelector("ul");

// Build the button with JavaScript, so visitors without JavaScript just see the normal links
var button = document.createElement("button");
button.type = "button";
button.className = "menu-button";
button.setAttribute("aria-expanded", "false");
button.setAttribute("aria-controls", "nav-links");
button.innerHTML = '<span class="menu-icon" aria-hidden="true"></span>Menu';
links.id = "nav-links";
nav.insertBefore(button, links);
nav.classList.add("has-menu");

// Open or close the links
function setMenu(open) {
  nav.classList.toggle("menu-open", open);
  button.setAttribute("aria-expanded", String(open));
}

button.addEventListener("click", function () {
  setMenu(!nav.classList.contains("menu-open"));
});

// Close after choosing a link (a link to the same page does not reload it)
links.addEventListener("click", function (event) {
  if (event.target.closest("a")) {
    setMenu(false);
  }
});

// Close when clicking anywhere outside the menu
document.addEventListener("click", function (event) {
  if (!nav.contains(event.target)) {
    setMenu(false);
  }
});

// Escape closes the menu and puts focus back on the button
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && nav.classList.contains("menu-open")) {
    setMenu(false);
    button.focus();
  }
});
