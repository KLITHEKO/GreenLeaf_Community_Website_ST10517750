/* ==========================================================================
   schedule.js
   Loads every service session from data/schedule.json (dynamic content),
   then lets visitors search, filter by service and day, and sort the list.
   If the file cannot be loaded, the fixed tables in services.html stay visible.
   ========================================================================== */

(function () {
  var section = document.getElementById("session-finder");
  if (!section) { return; }

  var searchBox = document.getElementById("finder-search");
  var serviceSelect = document.getElementById("finder-service");
  var daySelect = document.getElementById("finder-day");
  var sortSelect = document.getElementById("finder-sort");
  var tbody = document.getElementById("finder-rows");
  var count = document.getElementById("finder-count");
  var emptyMessage = document.getElementById("finder-empty");
  var clearButton = document.getElementById("finder-clear");

  var sessions = [];

  // 1. Load the data (fetch returns a promise)
  fetch("data/schedule.json")
    .then(function (response) {
      // fetch only fails on network errors, so check for HTTP errors ourselves
      if (!response.ok) { throw new Error("HTTP " + response.status); }
      return response.json();
    })
    .then(function (data) {
      sessions = data.sessions;
      start();
    })
    .catch(function (error) {
      console.error("Session finder could not load:", error);
    });

  // Add the options "Food parcels", "Monday" and so on, taken from the data
  function fillSelect(select, values) {
    values.forEach(function (value) {
      var option = document.createElement("option");
      option.value = value;
      option.textContent = value;
      select.appendChild(option);
    });
  }

  function unique(list) {
    return list.filter(function (item, i) { return list.indexOf(item) === i; });
  }

  function start() {
    fillSelect(serviceSelect, unique(sessions.map(function (s) { return s.service; })));
    // days in week order, not the order they appear in the file
    var byDay = sessions.slice().sort(function (a, b) { return a.dayNumber - b.dayNumber; });
    fillSelect(daySelect, unique(byDay.map(function (s) { return s.day; })));

    // Show the finder and hide the fixed tables it replaces
    section.hidden = false;
    document.querySelectorAll("#food-parcels .table-scroll, #soup-kitchen .table-scroll")
      .forEach(function (table) { table.hidden = true; });

    [searchBox, serviceSelect, daySelect, sortSelect].forEach(function (control) {
      control.addEventListener("input", render);
    });
    clearButton.addEventListener("click", function () {
      searchBox.value = "";
      serviceSelect.value = "";
      daySelect.value = "";
      sortSelect.value = "day";
      render();
      searchBox.focus();
    });
    render();
  }

  // Compare two sessions for sorting (a second key breaks ties)
  function compare(a, b, key) {
    function text(x, y) { return x < y ? -1 : x > y ? 1 : 0; }
    if (key === "time") { return text(a.start, b.start) || a.dayNumber - b.dayNumber; }
    if (key === "location") { return text(a.location, b.location) || a.dayNumber - b.dayNumber; }
    if (key === "service") { return text(a.service, b.service) || a.dayNumber - b.dayNumber; }
    return a.dayNumber - b.dayNumber || text(a.start, b.start); // "day"
  }

  // 2. Filter, sort and draw the table
  function render() {
    var words = searchBox.value.trim().toLowerCase();
    var shown = sessions.filter(function (s) {
      var all = (s.service + " " + s.day + " " + s.start + " " + s.end + " " + s.location).toLowerCase();
      return (words === "" || all.indexOf(words) !== -1) &&
             (serviceSelect.value === "" || s.service === serviceSelect.value) &&
             (daySelect.value === "" || s.day === daySelect.value);
    });
    shown.sort(function (a, b) { return compare(a, b, sortSelect.value); });

    tbody.textContent = ""; // empty the table, then rebuild it
    shown.forEach(function (s) {
      var row = tbody.insertRow();
      [s.service, s.day, s.start + " - " + s.end, s.location].forEach(function (value) {
        row.insertCell().textContent = value; // textContent, never innerHTML
      });
    });

    count.textContent = "Showing " + shown.length + " of " + sessions.length + " sessions";
    emptyMessage.hidden = shown.length > 0;
  }
})();
