let containerWrapperElemant = document.querySelector(".container-wrapper");
let containerThankYouElement = document.querySelector(".container-thank-you");
let btnSubmitElement = document.getElementById("submit");



btnSubmitElement.addEventListener("click", () => {
  console.log("clicked");
  containerThankYouElement.classList.remove("hidden");
  containerWrapperElemant.style.display = "none";
});
