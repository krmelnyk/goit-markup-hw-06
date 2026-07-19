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

modalBackdrop.addEventListener("click", (event) => {
  if (event.target === modalBackdrop) {
    closeModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modalBackdrop.classList.contains("is-open")) {
    closeModal();
  }
});

const openMenuButton = document.querySelector("[data-menu-open]");
const closeMenuButton = document.querySelector("[data-menu-close]");
const mobileMenu = document.querySelector("[data-menu]");
const mobileMenuLinks = mobileMenu.querySelectorAll("a");

const openMenu = () => {
  mobileMenu.classList.add("is-open");
  openMenuButton.setAttribute("aria-expanded", "true");
  document.body.classList.add("modal-open");
  closeMenuButton.focus();
};

const closeMenu = () => {
  mobileMenu.classList.remove("is-open");
  openMenuButton.setAttribute("aria-expanded", "false");
  document.body.classList.remove("modal-open");
  openMenuButton.focus();
};

openMenuButton.addEventListener("click", openMenu);
closeMenuButton.addEventListener("click", closeMenu);
mobileMenuLinks.forEach((link) => link.addEventListener("click", closeMenu));

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && mobileMenu.classList.contains("is-open")) {
    closeMenu();
  }
});
