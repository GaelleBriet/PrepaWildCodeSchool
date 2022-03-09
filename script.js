const message =
  "Merci pour votre message, nous vous répondrons le plus rapidement possible.";

document
  .getElementById("formulaire")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert(message);
  });
