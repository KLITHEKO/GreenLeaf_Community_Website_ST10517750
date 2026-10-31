/* ==========================================================================
   lightbox.js
   Click a photo in the gallery to see it larger in a pop-up.
   Uses the built-in <dialog> element, which already handles the dark
   backdrop, the Escape key and keeping the keyboard focus inside the pop-up.
   Without JavaScript the thumbnails are plain links to the full photo.
   ========================================================================== */

(function () {
  // The gallery links (each one has the big photo in href and a data-caption)
  var links = document.querySelectorAll(".gallery a");
  if (links.length === 0 || typeof HTMLDialogElement === "undefined") {
    return;
  }

  var current = 0; // which photo is showing

  // Build the pop-up
  var box = document.createElement("dialog");
  box.className = "lightbox";
  box.setAttribute("aria-label", "Photo viewer");

  var photo = document.createElement("img");
  var caption = document.createElement("p");
  caption.className = "lightbox-caption";
  var count = document.createElement("p");
  count.className = "lightbox-count";

  var controls = document.createElement("div");
  controls.className = "lightbox-controls";

  // Small helper that makes one button
  function makeButton(text, label, className) {
    var b = document.createElement("button");
    b.type = "button";
    b.textContent = text;
    b.setAttribute("aria-label", label);
    if (className) {
      b.className = className;
    }
    return b;
  }

  var prev = makeButton("Previous", "Previous photo");
  var next = makeButton("Next", "Next photo");
  var close = makeButton("Close", "Close photo viewer", "lightbox-close");

  controls.append(prev, next, close);
  box.append(photo, caption, count, controls);
  document.body.appendChild(box);

  // Show photo number n (wraps round at both ends)
  function show(n) {
    current = (n + links.length) % links.length;
    var link = links[current];
    photo.src = link.getAttribute("href");
    photo.alt = link.querySelector("img").alt;
    caption.textContent = link.dataset.caption || "";
    count.textContent = "Photo " + (current + 1) + " of " + links.length;
  }

  // Clicking a thumbnail opens the pop-up instead of leaving the page
  links.forEach(function (link, i) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      show(i);
      box.showModal();
    });
  });

  prev.addEventListener("click", function () { show(current - 1); });
  next.addEventListener("click", function () { show(current + 1); });
  close.addEventListener("click", function () { box.close(); });

  // Arrow keys move between photos (Escape is handled by <dialog>)
  box.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft") { show(current - 1); }
    if (event.key === "ArrowRight") { show(current + 1); }
  });

  // Clicking the dark area outside the pop-up closes it
  box.addEventListener("click", function (event) {
    if (event.target === box) {
      box.close();
    }
  });
})();
