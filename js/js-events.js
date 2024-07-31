// const refs = {
//   parent: document.querySelector("#parent"),
//   child: document.querySelector("#child"),
//   innerChild: document.querySelector("#inner-child"),
// };

// refs.parent.addEventListener("click", onParentClik);
// refs.child.addEventListener("click", onChildClik);
// refs.innerChild.addEventListener("click", onInnerChildClik);

// function onParentClik(evt) {
//   console.log("onParentClik");
//   console.log("onParentClik -> evt.target", evt.target);
//   console.log("onParentClik - > evt.currentTarget", evt.currentTarget);
// }
// function onChildClik(evt) {
//   console.log("onChildClik");
//   console.log("onChildClik -> evt.target", evt.target);
//   console.log("onChildClik - > evt.currentTarget", evt.currentTarget);
// }

// function onInnerChildClik(evt) {
//   console.log("onInnerChildClik");
//   console.log("onInnerChildClik -> evt.target", evt.target);
//   console.log("onInnerChildClik - > evt.currentTarget", evt.currentTarget);
// }

// --------------button

// const container = document.querySelector(".js-container");

// container.addEventListener("click", onClick);

// function onClick(evt) {
//   console.log(evt);
//   console.log(evt.target);
//   console.log(evt.currentTarget);
//   console.log(evt.target.nodeName);

//   if (evt.target.nodeName !== "BUTTON") {
//     return;
//   }
// }

// const addBtn = document.querySelector(".js-add-btn");
// let labelCounter = 6;

// addBtn.addEventListener("click", onAddBtnClick);

// function onAddBtnClick() {
//   const btn = document.createElement("button");
//   btn.textContent = `Button ${labelCounter}`;
//   btn.type = "button";
//   container.appendChild(btn);
//   labelCounter += 1;
// }
// -----------------------------------------------------

// const tagsContainer = document.querySelector(".js-tags");
// let selectedTeg = null;

// tagsContainer.addEventListener("click", onTagsContainerClick);

// function onTagsContainerClick(e) {

//   if (e.target.nodeName !== "BUTTON") {
//     return;
//   }

//   const currentActiveBtn = document.querySelector(".tags__btn--active");

//     if (currentActiveBtn) {
//       currentActiveBtn.classList.remove("tags__btn--active");
//       }

//   currentActiveBtn?.classList.remove("tags__btn--active");

//   const nextActiveBtn = e.target;
//   nextActiveBtn.classList.add("tags__btn--active");
//   selectedTeg = nextActiveBtn.dataset.value;

//   console.log(selectedTeg);
//   //   console.log(e.target);
// }
// ---------------2
// const tagsContainer = document.querySelector(".js-tags");
// let selectedTeg = new Set();

// tagsContainer.addEventListener("click", onTagsContainerClick);

// function onTagsContainerClick(e) {
//   if (e.target.nodeName !== "BUTTON") {
//     return;
//   }
//   //   console.log(e.target);

//   const btn = e.target;
//   const teg = btn.dataset.value;
//   const isBtnActive = btn.classList.contains("tags__btn--active");

//   if (isBtnActive) {
//     selectedTeg.delete(teg);
//   } else {
//     selectedTeg.add(teg);
//   }
//   btn.classList.toggle("tags__btn--active");
//   console.log(selectedTeg);
// }

// -----------------------------
const colors = [
  { hex: "#FF5733", rgb: "255,87,51" }, // Red-Orange
  { hex: "#33FF57", rgb: "51,255,87" }, // Lime Green
  { hex: "#3357FF", rgb: "51,87,255" }, // Blue
  { hex: "#F4A300", rgb: "244,163,0" }, // Orange
  { hex: "#D9534F", rgb: "217,83,79" }, // Red
  { hex: "#5BC0DE", rgb: "91,192,222" }, // Light Blue
  { hex: "#F0AD4E", rgb: "240,173,78" }, // Yellow-Orange
  { hex: "#5E5E5E", rgb: "94,94,94" }, // Gray
  { hex: "#E7B55F", rgb: "231,181,95" }, // Light Gold
  { hex: "#4C9F70", rgb: "76,159,112" }, // Green
  { hex: "#9B59B6", rgb: "155,89,182" }, // Purple
  { hex: "#E74C3C", rgb: "231,76,60" }, // Bright Red
  { hex: "#2ECC71", rgb: "46,204,113" }, // Emerald Green
  { hex: "#3498DB", rgb: "52,152,219" }, // Bright Blue
  { hex: "#F39C12", rgb: "243,156,18" }, // Bright Orange
  { hex: "#1ABC9C", rgb: "26,188,156" }, // Turquoise
  { hex: "#D35400", rgb: "211,84,0" }, // Orange-Red
  { hex: "#7F8C8D", rgb: "127,140,141" }, // Grayish
  { hex: "#2980B9", rgb: "41,128,185" }, // Dark Blue
  { hex: "#C0392B", rgb: "192,57,43" }, // Dark Red
  { hex: "#BDC3C7", rgb: "189,195,199" }, // Light Gray
];

const paletteCards = document.querySelector(".js-palette");

console.log(createColorCardsMarkup(colors));

function createColorCardsMarkup(colors) {
  return colors
    .map(({ hex, rgb }) => {
      return `<div class="color-card">
        <div
          class="color-swatch"
          data-hex="${hex}"
          data-rgb="${rgb}"
          style="background-color:${hex}"
        ></div>
        <div class="color-meta">
          <p>HEX: ${hex}</p>
          <p>RGB: ${rgb}</p>
        </div>
      </div>`;
    })
    .join("");
}

const marckup = createColorCardsMarkup(colors);

paletteCards.insertAdjacentHTML("beforeend", marckup);

paletteCards.addEventListener("click", onContainerClik);

function onContainerClik(e) {
  console.log(e.target);
  const isColorSwatchEl = e.target.classList.contains("color-swatch");
  if (!isColorSwatchEl) {
    return;
  }

  const curretnActiveCard = document.querySelector(".color-card.is-active");
  if (curretnActiveCard) {
    curretnActiveCard.classList.remove("is-active");
  }

  const swatchEl = e.target;
  const parentColorCard = swatchEl.closest(".color-card");

  parentColorCard.classList.add("is-active");

  document.body.style.backgroundColor = swatchEl.dataset.hex;
}
