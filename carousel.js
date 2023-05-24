let carousel = document.querySelector(".carousel");
let showing = document.querySelector(".showing");
let cards = document.querySelectorAll(".card");
let prev = document.querySelector("#prev");
let arrows = document.querySelectorAll(".arrow");

let index = 1;
const slide = () => {
  // Calculate the updated image index
  if (index === cards.length) index = 0;
  else if (index < 0) index = cards.length - 1;
  //index = index === cards.length ? 0 : index < 0 ? cards.length - 1 : index;
  // Update the carousel display to show the specified image
  carousel.style.transform = `translate(-${index * 100}%)`;
};

const update = (e) => {
  imageIndex += e.target.id === "next" ? 1 : -1;
  slide(index);
};

arrows.forEach((arrow) => arrow.addEventListener("click", updateClick));
