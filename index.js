const listItem = document.querySelectorAll(".faq__item");
const answers = document.querySelectorAll(".faq__answer");
const button = document.querySelectorAll(".faq__button");

let src = "./images/icon-plus.svg";

function toggleTab(item) {
  const { id } = item.dataset;
  const itemSrc = button[id].getAttribute("src");
  if (itemSrc === src) {
    button[id].setAttribute("src", "./images/icon-minus.svg");
  } else {
    button[id].setAttribute("src", "./images/icon-plus.svg");
  }
  answers[id].classList.toggle("faq__answer--hidden");
}

listItem.forEach((item) => {
  item.addEventListener("click", toggleTab.bind(null, item));

  item.addEventListener("keydown", (event) => {
    if (event.keyCode === 13) {
      toggleTab(item);
    }
  });
});
