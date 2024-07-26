const form = document.querySelector(".js-register-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  // console.log(event.currentTarget);
  // console.dir(event.currentTarget.elements.subscription.value);

  console.log("Це сабміт форми");

  // const formElements = event.currentTarget.elements;
  // const email = formElements.email.value;
  // const password = formElements.password.value;
  // const subscription = formElements.subscription.value;

  // const formData = { email, password, subscription };

  // console.log(formData, email, password, subscription);

  const formData = new FormData(event.currentTarget);

  console.log(formData);

  formData.forEach((value, name) => {
    console.log("onFormSubmit -> name", name);
    console.log("onFormSubmit -> value", value);
  });
}
