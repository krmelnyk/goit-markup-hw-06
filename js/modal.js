const openModalButton = document.querySelector("[data-modal-open]");
const closeModalButton = document.querySelector("[data-modal-close]");
const modalBackdrop = document.querySelector("[data-modal]");

const openModal = () => {
  modalBackdrop.classList.add("is-open");
  document.body.classList.add("modal-open");
  closeModalButton.focus();
};

const closeModal = () => {
  modalBackdrop.classList.remove("is-open");
  document.body.classList.remove("modal-open");
  openModalButton.focus();
};

openModalButton.addEventListener("click", openModal);
closeModalButton.addEventListener("click", closeModal);

modalBackdrop.addEventListener("click", event => {
  if (event.target === modalBackdrop) {
    closeModal();
  }
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape" && modalBackdrop.classList.contains("is-open")) {
    closeModal();
  }
});
