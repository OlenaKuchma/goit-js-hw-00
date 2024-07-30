// const form = document.querySelector(".js-register-form");

// form.addEventListener("submit", onFormSubmit);

// function onFormSubmit(event) {
//   event.preventDefault();

//   // console.log(event.currentTarget);
//   // console.dir(event.currentTarget.elements.subscription.value);

//   console.log("Це сабміт форми");

//   // const formElements = event.currentTarget.elements;
//   // const email = formElements.email.value;
//   // const password = formElements.password.value;
//   // const subscription = formElements.subscription.value;

//   // const formData = { email, password, subscription };

//   // console.log(formData, email, password, subscription);

//   const formData = new FormData(event.currentTarget);

//   console.log(formData);

//   formData.forEach((value, name) => {
//     console.log("onFormSubmit -> name", name);
//     console.log("onFormSubmit -> value", value);
//   });
// }

// ------------------------------новий інпут

// const refs = {
//   input: document.querySelector(".js-input"),
//   nameLable: document.querySelector(".js-button > span"),
//   licenseChekbox: document.querySelector(".js-license"),
//   btn: document.querySelector(".js-button"),
// };

// refs.input.addEventListener("focus", onInputFocus);
// refs.input.addEventListener("blur", onInputBlur);
// refs.input.addEventListener("change", onInputChange);

// function onInputFocus(params) {
//   console.log("Інпут дістав фокус - подія focus");
// }

// function onInputBlur() {
//   console.log("Інпут втратив фокус - подія blur");
// }

// refs.input.addEventListener("input", onInputChange);
// refs.licenseChekbox.addEventListener("change", onlicenseChekboxChange);

// function onInputChange(event) {
//   console.log(event.currentTarget.value);
//   refs.nameLable.textContent = event.currentTarget.value;
// }

// function onlicenseChekboxChange(event) {
//   console.log(event.currentTarget.checked);

//   refs.btn.disabled = !event.currentTarget.checked;
// }

// ------------------події клавіатури

// const refs = {
//   output: document.querySelector(".js-output"),
//   clearBtn: document.querySelector(".js-clear"),
// };

// // window.addEventListener("keydown", onKeyPress);
// window.addEventListener("keypress", onKeyPress);
// // window.addEventListener("keyup", onKeyPress);

// refs.clearBtn.addEventListener("click", onClearOutput);

// function onKeyPress(event) {
//   console.log("event.code", event.code);
//   console.log("event.key", event.key);

//   refs.output.textContent += event.key;
// }

// function onClearOutput(params) {
//   refs.output.textContent = "";
// }

// -----------------------модалка

const refs = {
  openModalBtn: document.querySelector('[data-action="open-modal"]'),
  closeModalBtn: document.querySelector('[data-action="close-modal"]'),
  backdrop: document.querySelector(".js-backdrop"),
};

refs.openModalBtn.addEventListener("click", onOpenModal);
refs.closeModalBtn.addEventListener("click", onCloseModal);
refs.backdrop.addEventListener("click", onBackdropClick);

function onOpenModal() {
  document.body.classList.add("show-modal");
}

function onCloseModal() {
  document.body.classList.remove("show-modal");
}

function onBackdropClick(event) {
  if (event.currentTarget === event.target) {
    onCloseModal();
  }
}
