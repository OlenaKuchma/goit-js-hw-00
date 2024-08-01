// const coordsOutputRef = document.querySelector(".js-coords");

// let mouseMoveCbInvocationCounter = 0;

// const throttleOnMouseMove = _.throttle(onMouseMove, 500);

// window.addEventListener("mousemove", throttleOnMouseMove);

// function onMouseMove(event) {
//   mouseMoveCbInvocationCounter += 1;

//   //   console.log(mouseMoveCbInvocationCounter);

//   coordsOutputRef.textContent = `Кількість викликів onMouseMove: ${mouseMoveCbInvocationCounter}, X: ${event.clientX}, Y: ${event.clientY}`;
// }

// const inputRef = document.querySelector(".js-input");
// const outputRef = document.querySelector(".js-output");

// let inputCbInvocationCounter = 0;

// inputRef.addEventListener("input", _.debounce(onInputChange, 200));

// function onInputChange(event) {
//   inputCbInvocationCounter += 1;

//   outputRef.textContent = `Кількість викликів onInputChange:
//   ${inputCbInvocationCounter}, Значення: ${event.target.value}`;
// }

// --------------------------label

// const labels = [
//   { label: "HTML" },
//   { label: "CSS" },
//   { label: "JavaScript" },
//   { label: "React" },
//   { label: "Node.js" },
//   { label: "Express" },
//   { label: "MongoDB" },
//   { label: "SQL" },
//   { label: "Python" },
//   { label: "Django" },
//   { label: "Flask" },
//   { label: "Git" },
//   { label: "GitHub" },
//   { label: "Docker" },
//   { label: "Kubernetes" },
// ];

// const refs = {
//   list: document.querySelector(".js-list"),
//   input: document.querySelector("#filter"),
// };

// // refs.input.addEventListener("input", _.throttle(onFilterChange, 200));
// refs.input.addEventListener("input", _.debounce(onFilterChange, 200));

// const elementMarkup = createListItems(labels);
// populateList(elementMarkup);

// function createListItems(label) {
//   return label
//     .map(({ label }) => {
//       return `<li>${label}</li>`;
//     })
//     .join(" ");
// }

// // refs.list.insertAdjacentHTML("beforeend", elementMarkup);
// refs.list.innerHTML = elementMarkup;

// function onFilterChange(evt) {
//   console.log(evt.target.value);
//   const filter = evt.target.value.toLowerCase();

//   const filteredItems = labels.filter((t) =>
//     t.label.toLowerCase().includes(filter)
//   );
//   console.log(filteredItems);

//   const elementMarkup = createListItems(filteredItems);
//   populateList(elementMarkup);
// }

// function populateList(markup) {
//   refs.list.innerHTML = markup;
// }

// ---------------leazy

//

// ----------------fitcher detection

if ("loading" in HTMLImageElement.prototype) {
  console.log("Браузер підтримує ліниві загрузки");
  addSrcAttributeImg();
} else {
  console.log("Браузер не підтримує ліниві загрузки");
  addScript();
}

const lazyImages = document.querySelectorAll("img[data-src]");

// document.querySelectorAll('img[loading = "lazy"]);

lazyImages.forEach((img) => {
  img.addEventListener("load", onImageLoaded, { once: true });
});

function onImageLoaded(evt) {
  console.log("Картинка загрузилася");
  console.log(evt);

  evt.target.classList.add("appear");
}

function addSrcAttributeImg() {
  const lazyImages = document.querySelectorAll('img[loading="lazy"]');

  lazyImages.forEach((img) => {
    img.src = img.dataset.src;
  });
}

function addScript() {
  const script = document.createElement("script");
  script.src =
    "https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js";
  script.integrity =
    "sha512-q583ppKrCRc7N5O0n2nzUiJ+suUv7Et1JGels4bXOaMFQcamPk9HjdUknZuuFjBNs7tsMuadge5k9RzdmO+1GQ==";
  script.crossorigin = "anonymous";
  script.referrerpolicy = "no-referrer";
  document.body.appendChild(script);
}
