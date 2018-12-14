var contactsBtn = document.querySelector(".contacts__button");
var feedback = document.querySelector(".feedback");
var close = document.querySelector(".close-button");

contactsBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedback.classList.add("modal-show");
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedback.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (feedback.classList.contains("modal-show")) {
      feedback.classList.remove("modal-show");
    }
  }
});