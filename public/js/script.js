(() => {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false,
    );
  });
})();

// public/js/script.js

const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", async function (e) {
    e.preventDefault();

    const username = this.username.value;
    const password = this.password.value;

    const errorBox = document.getElementById("loginError");

    errorBox.classList.add("d-none");

    try {
      const response = await fetch("/login", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          username,
          password,
        }),
      });

      const data = await response.json();

      if (data.success) {
        window.location.reload();
      } else {
        errorBox.textContent = data.message;
        errorBox.classList.remove("d-none");
      }
    } catch (error) {
      console.error("Login error:", error);

      errorBox.textContent = "Something went wrong. Please try again.";

      errorBox.classList.remove("d-none");
    }
  });
}

const signupForm = document.getElementById("signupForm");

if (signupForm) {
  signupForm.addEventListener("submit", async function (e) {
    e.preventDefault();

    const username = this.username.value;
    const email = this.email.value;
    const password = this.password.value;

    const errorBox = document.getElementById("signupError");

    errorBox.classList.add("d-none");

    try {
      const response = await fetch("/signup", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          username,
          email,
          password,
        }),
      });

      const data = await response.json();

      if (data.success) {
        window.location.reload();
      } else {
        errorBox.textContent = data.message;
        errorBox.classList.remove("d-none");
      }
    } catch (error) {
      console.error("Signup error:", error);

      errorBox.textContent = "Something went wrong. Please try again.";

      errorBox.classList.remove("d-none");
    }
  });
}
