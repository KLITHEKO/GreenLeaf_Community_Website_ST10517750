// Scroll reveal: each section fades in when it scrolls into view.

var sections = document.querySelectorAll("main section");

// Do nothing if the visitor has asked their device to reduce motion
var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!reduceMotion) {
  // The observer watches the sections and tells us when one becomes visible
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // reveal once, then stop watching
      }
    });
  });

  sections.forEach(function (section) {
    section.classList.add("reveal"); // start hidden
    observer.observe(section);
  });
}

// Animated counters: numbers count up from 0 when the "at a glance" section scrolls into view.

var counters = document.querySelectorAll(".count");

// Count one number up to its target over 1.5 seconds
function countUp(element) {
  var target = Number(element.getAttribute("data-target"));
  var start;

  function step(now) {
    if (start === undefined) {
      start = now; // time of the first frame
    }
    var progress = Math.min((now - start) / 1500, 1); // 0 to 1
    element.textContent = Math.round(target * progress).toLocaleString("en-US");
    if (progress < 1) {
      requestAnimationFrame(step);
    }
  }

  requestAnimationFrame(step);
}

// Skip the animation if the visitor wants reduced motion (reduceMotion is set above)
if (!reduceMotion && counters.length > 0) {
  var counterObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        countUp(entry.target);
        counterObserver.unobserve(entry.target); // count once only
      }
    });
  });

  counters.forEach(function (counter) {
    counter.textContent = "0"; // start at 0 so the final number never flashes first
    counterObserver.observe(counter);
  });
}
