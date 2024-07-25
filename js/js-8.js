console.log(document);
console.dir(document);

const firstElementDiv = document.querySelector("div");
console.log("firstElementDiv", firstElementDiv);
console.dir("firstElementDiv", firstElementDiv);

const allElementLi = document.querySelectorAll("li");
console.log("allElementLi", allElementLi);
console.dir("allElementLi", allElementLi);

const refs = {
  seveBtn: document.querySelector(".save-btn"),
  changeBtn: document.querySelector(".img-btn"),
  inputEl: document.querySelector(".text-input"),
  outputEl: document.querySelector(".text-output"),
  firstEl: document.querySelector(".first-list"),
  secondEl: document.querySelector(".second-list"),
  imgEl: document.querySelector("img"),
  imgTextEl: document.querySelector(".cat-text"),
};
console.log(refs);

console.log(refs.imgEl.src);
console.log(refs.imgEl);

// refs.imgEl.src =
//   "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSAOnLXSaPbc4K0IId0dSTI050OfwusYAyfQzMiCF6mrwNPVdmN";

const clickOnChangeBtn = function () {
  refs.imgEl.src =
    "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSAOnLXSaPbc4K0IId0dSTI050OfwusYAyfQzMiCF6mrwNPVdmN";
  refs.imgEl.alt = "Новий котик";
  refs.imgTextEl.textContent = "The new Best Cat";
};

refs.changeBtn.addEventListener("click", clickOnChangeBtn);

console.log(refs.imgEl.src);
console.log(refs.imgEl.getAttribute("src"));

// refs.imgEl.removeAttribute("src");

const actionsBtn = document.querySelectorAll(".js-action button");
console.log(actionsBtn[0].dataset.action);
console.log(actionsBtn[1].dataset.action);
console.log(actionsBtn[2].dataset.action);

refs.seveBtn.addEventListener("click", () => {

refs.inputEl = 

});
