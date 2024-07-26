const targetBtn = document.querySelector(".js-target-btn");
const addListenerBtn = document.querySelector(".js-add-listener");
const removeListenerBtn = document.querySelector(".js-remove-listener");

// targetBtn.addEventListener("click", onTargetBtnClick);
// addListenerBtn.addEventListener("click", onAddListenerBtnClick);
// removeListenerBtn.addEventListener("click", onRemoveListenerBtnClick);

// function handelTargetBtnClick(params) {
//   console.log("Click on Btn");
// }

// function targetBtnClickHandler(params) {
// //   console.log("Click on Btn");
// // }

// function onTargetBtnClick(params) {
//   console.log("Click on Btn");
// }

// // function handelAddListenerBtnClick(params) {
// //   console.log("Click on Btn");
// // }
// // function addListenerBtnClickHandler(params) {
// //   console.log("Click on Btn");
// // }
// function onAddListenerBtnClick(params) {
//   console.log("Click on Btn");
// }

// // function handelRemoveListenerBtnClick(params) {
// //   console.log("Click on Btn");
// // }
// // function removeListenerBtnClickHandler(params) {
// //   console.log("Click on Btn");
// // }
// function onRemoveListenerBtnClick(params) {
//   console.log("Click on Btn");
// }

addListenerBtn.addEventListener("click", () => {
  console.log("Вішаю слухача подій на цільову кнопку");
  targetBtn.addEventListener("click", onTargetBtnClick);
});

removeListenerBtn.addEventListener("click", () => {
  console.log("Знімаю слухача подій на цільову кнопку");
  targetBtn.removeEventListener("click", onTargetBtnClick);
});

function onTargetBtnClick() {
  console.log("Click on Btn");
}

// function logMessage() {
//   console.log("Клік по цільовій кнопці");
// }
