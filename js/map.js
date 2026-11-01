/* ==========================================================================
   map.js
   Turns the #map box on the Contact page into an interactive map
   (Leaflet library + OpenStreetMap tiles). If the library or the tiles
   cannot load, the plain link inside #map is still there.
   ========================================================================== */

(function () {
  var box = document.getElementById("map");
  if (!box || typeof L === "undefined") { return; } // no map box, or Leaflet did not load

  // The depot position. These numbers are approximate - change them to the real spot.
  var depot = [-26.09441, 28.00673];

  box.textContent = ""; // remove the fallback link before the map is drawn

  var map = L.map(box, {
    scrollWheelZoom: false // stops the map grabbing the page scroll; use the + and - buttons
  }).setView(depot, 15);

  // Map pictures (tiles) from OpenStreetMap. The attribution text is required by their licence.
  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" rel="noopener noreferrer">OpenStreetMap</a> contributors'
  }).addTo(map);

  // Leaflet's own credit link, with the same safe link settings
  map.attributionControl.setPrefix('<a href="https://leafletjs.com" rel="noopener noreferrer">Leaflet</a>');

  // A pin for the depot with a popup that opens when it is clicked or focused
  L.marker(depot, { alt: "GreenLeaf Depot" })
    .addTo(map)
    .bindPopup("<strong>GreenLeaf Depot</strong><br>14 Marlboro Drive, Randburg<br>Mon - Fri, 08:00 - 17:00<br><em>Approximate location</em>");
})();
