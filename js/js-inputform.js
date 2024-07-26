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

const refs = {
  input: document.querySelector(".js-input"),
  nameLable: document.querySelector(".js-button > span"),
  licenseChekbox: document.querySelector(".js-license"),
  btn: document.querySelector(".js-button"),
};

// refs.input.addEventListener("focus", onInputFocus);
// refs.input.addEventListener("blur", onInputBlur);
// refs.input.addEventListener("change", onInputChange);

// function onInputFocus(params) {
//   console.log("Інпут дістав фокус - подія focus");
// }

// function onInputBlur() {
//   console.log("Інпут втратив фокус - подія blur");
// }

refs.input.addEventListener("input", onInputChange);
refs.licenseChekbox.addEventListener("change", onlicenseChekboxChange);

function onInputChange(event) {
  console.log(event.currentTarget.value);
  refs.nameLable.textContent = event.currentTarget.value;
}

function onlicenseChekboxChange(event) {
  console.log(event.currentTarget.checked);

  refs.btn.disabled = !event.currentTarget.checked;
}
