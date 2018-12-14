var contactsBtn = document.querySelector(".contacts__button");
var modalFeedback = document.querySelector(".feedback");
var closeFeedback = document.querySelector(".feedback__close");
var mapBtn = document.querySelector(".contacts__map-link");
var modalMap = document.querySelector(".modal-map");
var closeMap = document.querySelector(".modal-map__close");

contactsBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalFeedback.classList.add("modal-show");
});

closeFeedback.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalFeedback.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (modalFeedback.classList.contains("modal-show")) {
      modalFeedback.classList.remove("modal-show");
    }
  }
});

mapBtn.addEventListener("click", function(evt) {
  evt.preventDefault();
  modalMap.classList.add("modal-show");
})

closeMap.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalMap.classList.remove("modal-show");
})

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (modalMap.classList.contains("modal-show")) {
      modalMap.classList.remove("modal-show");
    }
  }
})