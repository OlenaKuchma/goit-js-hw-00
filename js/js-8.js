// import products from "./js-export.js";
// console.log(products);

import transactions from "./js-export.js";
console.log(transactions);

// -----------------------------------
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

// const titelEl = document.createElement("h1");

// titelEl.classList.add("page-title");
// titelEl.textContent = "Заголовок сторінки";

// console.log(titelEl);

// console.log(document.body);

// // document.body.appendChild(titelEl);

// const imgElement = document.createElement("img");
// imgElement.src =
//   "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Zoo_Wuppertal_Schwarzfusskatze.jpg/258px-Zoo_Wuppertal_Schwarzfusskatze.jpg";
// imgElement.alt = "foto";
// imgElement.width = 640;

// // document.body.appendChild(imgElement);

// // titelEl.appendChild(imgElement);

// const heroEl = document.querySelector(".hero");
// // heroEl.appendChild(titelEl);
// // heroEl.appendChild(imgElement);

// heroEl.append(titelEl, imgElement);

// const newLiEl = document.createElement("li");
// newLiEl.classList.add = "first-list";

// const newALi = document.createElement("a");
// newALi.classList.add("first-a");
// newALi.textContent = "Нава сторінка";
// newALi.href = "/new";

// newLiEl.appendChild(newALi);

// console.log(newLiEl);

// const ulEl = document.querySelector(".list");
// ulEl.appendChild(newLiEl);

// ulEl.insertBefore(newLiEl, ulEl.firstElementChild);

// --------------------------------

// const colorPicerOptions = [
//   { label: "blue", color: "#0000FF" },
//   { label: "yelow", color: "#FFFF00" },
//   { label: "green", color: "#008000" },
//   { label: "grey", color: "#808080" },
//   { label: "cyan", color: "#00FFFF" },
//   { label: "red", color: "#FF0000" },
//   { label: "purple", color: "#800080" },
//   { label: "magenta", color: "#FF00FF" },
//   { label: "Teal", color: "#008080" },
// ];

// // const option = colorPicerOptions[0];

// const colorPicerOptionsEl = document.querySelector(".js-color-picker");

// const elements = colorPicerOptions.map((option) => {
//   const buttonEl = document.createElement("button");
//   buttonEl.type = "button";
//   buttonEl.textContent = option.label;
//   // buttonEl.classList.add("button");
//   buttonEl.style.backgroundColor = option.color;

//   return buttonEl;
// });

// colorPicerOptionsEl.append(...elements);

// console.log(elements);

// const makeColorPicerOptions = (options) => {
//   return options.map((option) => {
//     const buttonEl = document.createElement("button");
//     buttonEl.type = "button";
//     buttonEl.textContent = option.label;
//     buttonEl.style.backgroundColor = option.color;

//     return buttonEl;
//   });
// };
// const elements = makeColorPicerOptions(colorPicerOptions);
// colorPicerOptionsEl.append(...elements);

// ------------------------

// const product = {
//   name: "naomi",
//   descriptions: "some text",
//   price: 2000,
//   available: true,
//   onSale: true,
// };

// const productEl = document.createElement("arcticle");
// productEl.classList.add("produckt");

// const nameEl = document.createElement("h2");
// nameEl.textContent = product.name;
// nameEl.classList.add("product__name");

// const descrEl = document.createElement("p");
// descrEl.textContent = product.descriptions;
// descrEl.classList.add("product__descr");

// const priceEl = document.createElement("p");
// priceEl.textContent = `Price: ${product.price}`;
// priceEl.classList.add("product__price");

// console.log(productEl);
// console.log(nameEl);
// console.log(descrEl);
// console.log(priceEl);

// productEl.append(nameEl, descrEl, priceEl);

// console.log(productEl);

// -------------------------------import  products

// const productContainerEl = document.querySelector(".js-product");

// const makeProductCart = ({ name, descriptions, price }) => {
//   const productEl = document.createElement("arcticle");
//   productEl.classList.add("produckt");

//   const nameEl = document.createElement("h2");
//   nameEl.textContent = name;
//   nameEl.classList.add("product__name");

//   const descrEl = document.createElement("p");
//   descrEl.textContent = descriptions;
//   descrEl.classList.add("product__descr");

//   const priceEl = document.createElement("p");
//   priceEl.textContent = price;
//   priceEl.classList.add("product__price");

//   productEl.append(nameEl, descrEl, priceEl);

//   return productEl;
// };

// console.log(makeProductCart(products[0]));

// const elements = products.map(makeProductCart);
// console.log(elements);

// productContainerEl.append(...elements);

// ---------------------------------------innerHtml insertAdjacentHTML

// const titleEl = document.querySelector(".title");

// console.log(titleEl.textContent);

// console.log(titleEl.innerHTML);

// // titleEl.innerHTML = '<a href=""> This is a </a>';
// // titleEl.innerHTML = "";

// titleEl.insertAdjacentHTML("afterbegin", '<a href=""> This is a </a>');

// console.log(titleEl);

// ------------------import  transactions

const makeTransactionMarkup = document.querySelector(".js-transaction-table");

const makeRowTransactionMarkup = ({
  id,
  amount,
  date,
  business,
  name,
  type,
  account,
}) => {
  return `
  <tr>
    <td>${id}</td>
    <td>${amount}</td>
    <td>${date}</td>
    <td>${business}</td>
    <td>${name}</td>
    <td>${type}</td>
    <td>${account}</td>
  </tr>
`;
};

const makeBodyTransactionMarkup = transactions
  .map(makeRowTransactionMarkup)
  .join("");

console.log(makeBodyTransactionMarkup);

makeTransactionMarkup.insertAdjacentHTML(
  "beforeend",
  makeBodyTransactionMarkup
);
