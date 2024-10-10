const btnCloseMenu = document.getElementById("close");
const btnOpenMenu = document.getElementById("burger");
const mobMenu = document.querySelector(".mob-overlay");

const btnCloseModalForm = document.getElementById("closeMd");
const btnOpenModalForm = document.getElementById("review");
const modalForm = document.querySelector(".backdrop");

function toggleMenu(e) {
  mobMenu.classList.toggle("is-open");
}
function toggleForm(e) {
  modalForm.classList.toggle("is-open");
}

btnCloseMenu.addEventListener("click", toggleMenu);
btnOpenMenu.addEventListener("click", toggleMenu);

btnCloseModalForm.addEventListener("click", toggleForm);
btnOpenModalForm.addEventListener("click", toggleForm);
