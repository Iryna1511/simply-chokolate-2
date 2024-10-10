import iziToast from "izitoast";
import { form, modalForm, footerForm } from "./constants";

const handleSubmit = e => {
  e.preventDefault();
  const form = e.target;
  const name = form.elements.name.value;
  const email = form.elements.email.value;
  const phone = form.elements.phone.value;
  const comment = form.elements.comment.value;

  modalForm.classList.remove("is-open");
  iziToast.success({
    position: "topRight",
    color: "rgba(253, 146, 34, 0.9)",
    message: `Hi ${name}! You successfully added review!`,
  });
  console.log({ name, email, phone, comment });

  form.reset();
};

const handleFooterForm = e => {
  e.preventDefault();
  const form = e.target;
  const email = form.elements.email.value;
  iziToast.success({
    position: "topRight",
    color: "rgb(253, 146, 34, 0.9)",
    message: `We will contact you soon on ${email}`,
  });
  form.reset();
};
form.addEventListener("submit", handleSubmit);
footerForm.addEventListener("submit", handleFooterForm);
