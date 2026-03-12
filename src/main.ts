const button = document.getElementById("btn");

button?.addEventListener("click", () => {
  alert("Hello from TypeScript!");
}); // This is a simple TypeScript file that adds a click event listener to a button with the ID "btn". When the button is clicked, it will display an alert message.
// ? here means run only if button is not null or undefined. It is a way to avoid potential runtime errors if the element with ID "btn" does not exist in the DOM.