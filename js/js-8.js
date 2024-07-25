// console.log(document);
// console.dir(document);

// const firstElementDiv = document.querySelector("div");
// console.log("firstElementDiv", firstElementDiv);
// console.dir("firstElementDiv", firstElementDiv);

// const allElementLi = document.querySelectorAll("li");
// console.log("allElementLi", allElementLi);
// console.dir("allElementLi", allElementLi);

// const refs = {
//   seveBtn: document.querySelector(".save-btn"),
//   changeBtn: document.querySelector(".img-btn"),
//   inputEl: document.querySelector(".text-input"),
//   outputEl: document.querySelector(".text-output"),
//   firstEl: document.querySelector(".first-list"),
//   secondEl: document.querySelector(".second-list"),
//   imgEl: document.querySelector("img"),
//   imgTextEl: document.querySelector(".cat-text"),
// };
// console.log(refs);

// console.log(refs.imgEl.src);
// console.log(refs.imgEl);

// // refs.imgEl.src =
// //   "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSAOnLXSaPbc4K0IId0dSTI050OfwusYAyfQzMiCF6mrwNPVdmN";

// const clickOnChangeBtn = function () {
//   refs.imgEl.src =
//     "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSAOnLXSaPbc4K0IId0dSTI050OfwusYAyfQzMiCF6mrwNPVdmN";
//   refs.imgEl.alt = "Новий котик";
//   refs.imgTextEl.textContent = "The new Best Cat";
// };

// refs.changeBtn.addEventListener("click", clickOnChangeBtn);

// console.log(refs.imgEl.src);
// console.log(refs.imgEl.getAttribute("src"));

// // refs.imgEl.removeAttribute("src");

// const actionsBtn = document.querySelectorAll(".js-action button");
// console.log(actionsBtn[0].dataset.action);
// console.log(actionsBtn[1].dataset.action);
// console.log(actionsBtn[2].dataset.action);

// refs.inputEl.value = "";

// refs.seveBtn.addEventListener("click", () => {
//   refs.outputEl.textContent = refs.inputEl.value;
// });

// const firstNavEl = document.querySelector(".first-list");
// console.log(firstNavEl.classList);
// firstNavEl.addEventListener("click", () => {
//   // firstNavEl.classList.add("super-cool");
//   //  firstNavEl.classList.remove("super-cool");
//   firstNavEl.classList.toggle("super-cool");
//   // firstNavEl.classList.replace("first-list", "super-cool");
// });
// // console.log(firsNavEl.classList.contains("first-list"));

// const curentPageUrl = "./first";

// const linkEl = document.querySelector(`.first-a[href="${curentPageUrl}"]`);
// linkEl.classList.add("curent");

// console.log(linkEl);

// const nuvEl = document.querySelector(".list");

// const firstElNuvEl = nuvEl.firstElementChild;

// console.log(firstElNuvEl);

// console.log(nuvEl.children[0]);

// -----------------create

const titelEl = document.createElement("h1");

titelEl.classList.add("page-title");
titelEl.textContent = "Заголовок сторінки";

console.log(titelEl);

console.log(document.body);

document.body.appendChild(titelEl);

const imgElement = document.createElement("img");
imgElement.src =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Zoo_Wuppertal_Schwarzfusskatze.jpg/258px-Zoo_Wuppertal_Schwarzfusskatze.jpg";
imgElement.alt = "foto";
imgElement.width = 640;

document.body.appendChild(imgElement);

const newLiEl = document.createElement("li");
newLiEl.classList.add = "first-list";

const newALi = document.createElement("a");
newALi.classList.add("first-a");
newALi.textContent = "Нава сторінка";
newALi.href = "/new";

newLiEl.appendChild(newALi);

console.log(newLiEl);

const ulEl = document.querySelector(".list");
ulEl.appendChild(newLiEl);

ulEl.insertBefore(newLiEl, ulEl.firstChild);
