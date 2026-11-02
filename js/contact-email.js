/* ==========================================================================
   contact-email.js
   Contact page. When the message form passes validation, this script writes
   the visitor's details into an email, shows it, and gives a button that
   opens the visitor's own email app with everything filled in.
   The site has no server, so the visitor presses Send in their email app.
   It runs after validation.js, which announces a "formvalid" event.
   ========================================================================== */

(function () {
  var form = document.querySelector("#contact-form form");
  if (!form) { return; }

  // The address the email is sent to is the form's action in contact.html
  // (action="mailto:..."). Change it there.
  var RECIPIENT = form.getAttribute("action").replace("mailto:", "");

  // Add a paragraph with a bold label to the box
  function addLine(box, label, text) {
    var p = document.createElement("p");
    var strong = document.createElement("strong");
    strong.textContent = label + " ";
    p.appendChild(strong);
    p.appendChild(document.createTextNode(text));
    box.appendChild(p);
  }

  form.addEventListener("formvalid", function (event) {
    event.preventDefault(); // we show the email instead of the plain thank-you

    var name = form.elements["c-name"].value.trim();
    var email = form.elements["c-email"].value.trim();
    var select = form.elements["c-subject"];
    var topic = select.options[select.selectedIndex].text;
    var message = form.elements["c-message"].value.trim();

    // Write the email
    var subject = "GreenLeaf website: " + topic;
    var body = "Name: " + name + "\nEmail: " + email + "\nTopic: " + topic + "\n\nMessage:\n" + message;
    var link = "mailto:" + RECIPIENT + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);

    // Show it under the form
    var box = form.querySelector(".form-success");
    if (!box) {
      box = document.createElement("div");
      box.className = "form-success";
      box.setAttribute("role", "status");
      box.tabIndex = -1;
      form.appendChild(box);
    }
    box.textContent = "";

    var title = document.createElement("p");
    title.className = "reply-title";
    title.textContent = "Thank you, " + name + ". Your email is ready to send.";
    box.appendChild(title);

    addLine(box, "To:", RECIPIENT);
    addLine(box, "Subject:", subject);
    var preview = document.createElement("pre");
    preview.textContent = body; // textContent keeps anything typed as plain text
    box.appendChild(preview);

    var button = document.createElement("a");
    button.className = "btn email-button"; // .btn keeps the global link colour off this link
    button.href = link;
    button.textContent = "Open in my email app";
    box.appendChild(button);

    var note = document.createElement("p");
    note.textContent = "This opens your own email app with the message filled in. Press Send there to finish.";
    box.appendChild(note);

    box.focus();
  });
})();
