/* ==========================================================================
   validation.js
   Friendly error messages for every form on the site.
   The HTML attributes (required, minlength, pattern, min, type="email")
   do the checking. This script only decides WHEN to show a message and
   WHAT it says, using the browser's Constraint Validation API.
   Without JavaScript the browser's own validation still runs.
   ========================================================================== */

(function () {
  var forms = document.querySelectorAll("form");

  forms.forEach(function (form) {
    form.noValidate = true; // switch off the browser's pop-up bubbles, we show our own

    var fields = form.querySelectorAll("input:not([type='submit']), select, textarea");

    // Choose the message for a field that failed a check
    function messageFor(field) {
      var v = field.validity;
      if (v.valueMissing) {
        return field.tagName === "SELECT" ? "Please choose an option." : "This field is required.";
      }
      if (v.typeMismatch) { return "Please enter a valid email address."; }
      if (v.tooShort) { return "Please enter at least " + field.minLength + " characters."; }
      if (v.patternMismatch) {
        return field.dataset.patternMessage || "Please check the format.";
      }
      if (v.rangeUnderflow) {
        return field.type === "date" ? "Please choose today or a later date." : "The minimum is " + field.min + ".";
      }
      if (v.rangeOverflow) {
        return field.type === "date" ? "Please choose a date within the next year." : "The maximum is " + field.max + ".";
      }
      if (v.badInput) { return field.type === "date" ? "Please enter a valid date." : "Please enter a number."; }
      return "Please check this field.";
    }

    // Find the error paragraph for a field, or create it just after the field
    function errorFor(field) {
      var error = document.getElementById(field.id + "-error");
      if (!error) {
        error = document.createElement("p");
        error.className = "error-message";
        error.id = field.id + "-error";
        field.insertAdjacentElement("afterend", error);
      }
      return error;
    }

    // Show or clear the message for one field
    function check(field) {
      var error = errorFor(field);
      if (field.checkValidity()) {
        error.textContent = ""; // textContent, never innerHTML, so nothing typed can run as code
        field.removeAttribute("aria-invalid");
        field.removeAttribute("aria-describedby");
      } else {
        error.textContent = messageFor(field);
        field.setAttribute("aria-invalid", "true");
        field.setAttribute("aria-describedby", error.id);
      }
    }

    // Pressing Submit makes the field lose focus. If its error message appeared
    // right then, the button would be pushed down and the click would be lost.
    // So while the button is pressed we skip the blur check; the submit check still runs.
    var pressingSubmit = false;
    var submitButton = form.querySelector("input[type='submit']");
    submitButton.addEventListener("pointerdown", function () { pressingSubmit = true; });
    document.addEventListener("pointerup", function () { pressingSubmit = false; });

    fields.forEach(function (field) {
      // Check when the user leaves the field
      field.addEventListener("blur", function () {
        if (!pressingSubmit) { check(field); }
      });
      // After an error, re-check as they type so the message clears when fixed
      field.addEventListener("input", function () {
        if (field.hasAttribute("aria-invalid")) { check(field); }
      });
      field.addEventListener("change", function () {
        if (field.hasAttribute("aria-invalid")) { check(field); }
      });
    });

    // Show (or remove) the thank-you message under the form
    function showSuccess(text) {
      var box = form.querySelector(".form-success");
      if (!box) {
        box = document.createElement("p");
        box.className = "form-success";
        box.setAttribute("role", "status"); // read out by screen readers
        box.tabIndex = -1;
        form.appendChild(box);
      }
      box.textContent = text;
      box.focus();
    }

    form.addEventListener("submit", function (event) {
      event.preventDefault(); // we handle the submit ourselves, so the page never reloads
      fields.forEach(check);

      var firstBad = form.querySelector("[aria-invalid='true']");
      if (firstBad) {
        var old = form.querySelector(".form-success");
        if (old) { old.remove(); }
        firstBad.focus(); // take the user straight to the first problem
      } else {
        // Tell other scripts the form is valid. A script that wants to show its
        // own reply (enquiry.js, contact-email.js) calls event.preventDefault().
        var useDefault = form.dispatchEvent(new CustomEvent("formvalid", { cancelable: true }));
        if (useDefault) {
          form.reset();
          showSuccess(form.dataset.success || "Thank you! Your form is complete.");
        }
      }
    });
  });
})();
