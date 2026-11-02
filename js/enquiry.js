/* ==========================================================================
   enquiry.js
   Get Involved page. When one of the four forms passes validation, this
   script loads the session times in the background with fetch (the page does
   not reload) and shows a reply that fits that form: parcel times near the
   visitor, volunteer times, drop-off hours and so on.
   It runs after validation.js, which announces a "formvalid" event.
   ========================================================================== */

(function () {
  var forms = document.querySelectorAll("#donate form, #volunteer form, #request-parcel form, #partner form");
  if (forms.length === 0) { return; }

  // The volunteer date box: today is the earliest day, one year from now the latest
  var dateBox = document.getElementById("vol-date");
  if (dateBox) {
    dateBox.min = toIso(new Date());
    var nextYear = new Date();
    nextYear.setFullYear(nextYear.getFullYear() + 1);
    dateBox.max = toIso(nextYear);
  }

  // 2026-11-02 style text for a date box
  function toIso(date) {
    var month = String(date.getMonth() + 1).padStart(2, "0");
    var day = String(date.getDate()).padStart(2, "0");
    return date.getFullYear() + "-" + month + "-" + day;
  }

  // "2026-11-02" becomes "2 November 2026"
  function niceDate(iso) {
    return new Date(iso + "T00:00:00").toLocaleDateString("en-ZA", { day: "numeric", month: "long", year: "numeric" });
  }

  // The words shown for a chosen option in a drop-down list
  function optionText(form, name) {
    var select = form.elements[name];
    return select.options[select.selectedIndex].text;
  }

  // Turn sessions into short lines. Days with the same time and place are joined:
  // "Monday, Tuesday and Friday, 08:00 to 17:00 at GreenLeaf Depot, Randburg"
  function describe(sessions) {
    var groups = {};
    sessions.forEach(function (s) {
      var key = s.start + s.end + s.location;
      if (!groups[key]) { groups[key] = { days: [], session: s }; }
      groups[key].days.push(s.day);
    });
    return Object.keys(groups).map(function (key) {
      var days = groups[key].days;
      var s = groups[key].session;
      var dayText = days.length > 1 ? days.slice(0, -1).join(", ") + " and " + days[days.length - 1] : days[0];
      return dayText + ", " + s.start + " to " + s.end + " at " + s.location;
    });
  }

  // Only the sessions for one service
  function only(sessions, service) {
    return sessions.filter(function (s) { return s.service === service; });
  }

  // Draw the reply under the form: a heading line, some text lines and a list
  function showReply(form, heading, lines, listLines) {
    var box = form.querySelector(".form-success");
    if (!box) {
      box = document.createElement("div");
      box.className = "form-success";
      box.setAttribute("role", "status"); // read out by screen readers
      box.tabIndex = -1;
      form.appendChild(box);
    }
    box.textContent = ""; // clear any earlier reply

    var title = document.createElement("p");
    title.textContent = heading;
    title.className = "reply-title";
    box.appendChild(title);

    lines.forEach(function (text) {
      var p = document.createElement("p");
      p.textContent = text;
      box.appendChild(p);
    });

    if (listLines && listLines.length > 0) {
      var list = document.createElement("ul");
      listLines.forEach(function (text) {
        var item = document.createElement("li");
        item.textContent = text;
        list.appendChild(item);
      });
      box.appendChild(list);
    }
    box.focus();
  }

  // One reply for each form. "data" holds what the visitor typed.
  var replies = {
    "request-parcel": function (form, data, sessions) {
      var area = data.get("req-area").trim();
      var parcels = only(sessions, "Food parcels");
      var near = parcels.filter(function (s) {
        return s.location.toLowerCase().indexOf(area.toLowerCase()) !== -1;
      });
      var heading = "Thank you, " + data.get("req-name") + ".";
      if (near.length > 0) {
        showReply(form, heading, ["No paperwork is needed for a first visit. Parcels near " + area + ":"], describe(near));
      } else {
        showReply(form, heading,
          ["We could not match " + area + " to a distribution site, so here are all our parcel times. No paperwork is needed for a first visit:"],
          describe(parcels));
      }
    },

    "donate": function (form, data, sessions) {
      var amount = Number(data.get("amount")).toLocaleString("en-ZA");
      showReply(form,
        "Thank you, " + data.get("donor-name") + ". Your gift of R" + amount + " will help stock our shelves.",
        ["We will email payment instructions to " + data.get("donor-email") + ". If you would rather give food, you can drop it off:"],
        describe(only(sessions, "Donation drop-off")));
    },

    "volunteer": function (form, data, sessions) {
      var chosen = data.get("vol-area");
      var matches = sessions;
      if (chosen === "sorting") { matches = only(sessions, "Food parcels"); }
      if (chosen === "soup") { matches = only(sessions, "Soup kitchen"); }
      if (chosen === "driving") { matches = only(sessions, "Donation drop-off"); }
      showReply(form,
        "Thank you, " + data.get("vol-name") + ". You can start from " + niceDate(data.get("vol-date")) + ".",
        ["A team lead will message you on WhatsApp to confirm. For " + optionText(form, "vol-area").toLowerCase() + ", these are our times:"],
        describe(matches));
    },

    "partner": function (form, data, sessions) {
      showReply(form,
        "Thank you, " + data.get("biz-name") + ".",
        ["We will email " + data.get("biz-email") + " to arrange a pickup. You said you could donate: " + optionText(form, "biz-frequency").toLowerCase() + ". You can also drop food at the depot:"],
        describe(only(sessions, "Donation drop-off")));
    }
  };

  forms.forEach(function (form) {
    var id = form.closest("section").id;

    form.addEventListener("formvalid", function (event) {
      event.preventDefault(); // we show our own reply instead of the plain thank-you
      var data = new FormData(form); // copy what was typed before the form is cleared
      showReply(form, "Checking availability...", [], []);

      fetch("data/schedule.json")
        .then(function (response) {
          if (!response.ok) { throw new Error("Could not load the session times"); }
          return response.json();
        })
        .then(function (json) {
          replies[id](form, data, json.sessions);
          form.reset();
        })
        .catch(function (error) {
          console.error(error);
          showReply(form, "Thank you! We have your details.",
            ["We could not load the session times just now. Please see our Services page for the latest times."], []);
          form.reset();
        });
    });
  });
})();
