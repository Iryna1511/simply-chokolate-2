import {
  btnCloseMenu,
  btnOpenMenu,
  mobMenu,
  btnCloseModalForm,
  btnOpenModalForm,
  modalForm,
} from "./constants.js";

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
