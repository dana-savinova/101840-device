var contactsBtn = document.querySelector(".contacts__button");
var modalFeedback = document.querySelector(".feedback");
var closeFeedback = document.querySelector(".feedback__close");
var mapBtn = document.querySelector(".contacts__map-link");
var modalMap = document.querySelector(".modal-map");
var closeMap = document.querySelector(".modal-map__close");

var formFeedback = document.querySelector(".feedback__form");
var userFeedback = document.querySelector("#user-name");
var mailFeedback = document.querySelector("#user-mail");
var textFeedback = document.querySelector("#feedback-text");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("userFeedback");
} catch (err) {
  isStorageSupport = false;
}

contactsBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalFeedback.classList.add("modal-show");
  if (storage) {
      userFeedback.value = storage;
      mailFeedback.focus();
    } else {
      userFeedback.focus();
    }
});

closeFeedback.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalFeedback.classList.remove("modal-show");
  modalFeedback.classList.remove("modal-error");
});

mapBtn.addEventListener("click", function(evt) {
  evt.preventDefault();
  modalMap.classList.add("modal-show");
})

closeMap.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalMap.classList.remove("modal-show");
})

// закрытие по кнопке esc
window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (modalFeedback.classList.contains("modal-show")) {
      evt.preventDefault();
      modalFeedback.classList.remove("modal-show");
      modalFeedback.classList.remove("modal-error");
    } if (modalMap.classList.contains("modal-show")) {
      evt.preventDefault();
      modalMap.classList.remove("modal-show");
    }
  }
});

formFeedback.addEventListener("submit", function(evt) {
  evt.preventDefault();
  if (!userFeedback.value || !mailFeedback.value || !textFeedback.value ) {
    evt.preventDefault();
    modalFeedback.classList.remove("modal-error");
    modalFeedback.offsetWidth = modalFeedback.offsetWidth;
    modalFeedback.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
    localStorage.setItem("userFeedback", userFeedback.value);}
  }
})

