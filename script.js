const form = document.querySelector("[data-contact-form]");
const confirmation = document.querySelector("[data-form-confirm]");

if (form && confirmation) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    form.reset();
    confirmation.hidden = false;
  });
}
