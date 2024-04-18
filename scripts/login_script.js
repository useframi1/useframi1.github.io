"use strict";

// Fetch all the forms we want to apply custom Bootstrap validation styles to
const forms = document.querySelectorAll(".needs-validation");

// Loop over them and prevent submission
Array.from(forms).forEach((form) => {
    form.addEventListener(
        "submit",
        (event) => {
            event.preventDefault(); // This line prevents the form from being submitted in the traditional way.

            if (form.checkValidity()) {
                // If the form is valid, redirect to another page
                window.location.href = "hub.html";
            } else {
                event.stopPropagation();
            }

            form.classList.add("was-validated");
        },
        false
    );
});
