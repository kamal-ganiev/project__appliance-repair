// Script to generate cards

const cardTemplate = document.querySelector(".card__template");
const cardClone = cardTemplate.content.cloneNode(true);
const cardContainer = document.querySelector(".service__list");

const cardList = [
  { name: "STOVE/RANGE", image: "example.jpg" },
  { name: "WASHER & DRYER", image: "example.jpg" },
  { name: "ICE MAKER", image: "example.jpg" },
  { name: "COOKTOP", image: "example.jpg" },
  { name: "REFRIGERATOR", image: "example.jpg" },
  { name: "GARBAGE DISPOSAL", image: "example.jpg" },
  { name: "MICROWAVE", image: "example.jpg" },
  { name: "DISHWASHER", image: "example.jpg" },
];

cardList.map((item) => {
  const newCard = cardClone.cloneNode(true);
  const cardName = newCard.querySelector(".card__title");
  const cardImage = newCard.querySelector(".card__image");

  cardName.textContent = item.name;
  cardImage.src = `./images/${item.image}`;
  cardImage.alt = `Image of ${item.name}`;

  cardContainer.appendChild(newCard);
});

// Script to generate reviews

const reviewCardTemplate = document.querySelector(".review__template");
const reviewCardClone = reviewCardTemplate.content.cloneNode(true);
const reviewContainer = document.querySelector(".review__content");

const reviewList = [
  {
    text: "I had a fantastic experience with the technician from ASLAPPLIANCEREPEAR who came to fix my washing machine. He was very polite and professional, and he fixed the problem quickly. I am very pleased with the service I received and would highly recommend this company, and specifically ASLAPPLIANCEREPEAR, to anyone in need of appliance repair.",
    author: "Samuel Willson",
  },
  {
    text: "I had a great experience with ASLAPPLIANCEREPEAR when they came to fix my dishwasher. They were professional, courteous, and efficient. The technician explained the problem and fixed it in a timely manner. I would highly recommend them, and specifically ASLAPPLIANCEREPEAR, to anyone.",
    author: "Alex Larkins",
  },
  {
    text: "I was extremely pleased with the service I received for my broken refrigerator from ASLAPPLIANCEREPEAR. The technician arrived on time, diagnosed the problem quickly, and had my fridge running like new in no time. I would definitely recommend this company to anyone in need of appliance repair, and specifically recommend ASLAPPLIANCEREPEAR.",
    author: "Alex Grey",
  },
  {
    text: "I was very impressed with the service I received for my oven repair from ASLAPPLIANCEREPEAR. The technician was knowledgeable, friendly, and efficient. He fixed the problem in no time and even cleaned up after himself. I would definitely use this company again in the future, and specifically ASLAPPLIANCEREPEAR.",
    author: "Tony Green",
  },
];

let currentReview = reviewList[0];

const newReview = reviewCardClone.cloneNode(true);
const reviewText = newReview.querySelector(".review-card__text");
const reviewAuthor = newReview.querySelector(".review-card__author");

reviewText.textContent = currentReview.text;
reviewAuthor.textContent = currentReview.author;

reviewContainer.appendChild(newReview);

let i = 1;

setInterval(() => {
  reviewContainer.innerHTML = "";

  if (i > 3) {
    i = 0;
  }

  let currentReview = reviewList[i];

  const newReview = reviewCardClone.cloneNode(true);
  const reviewText = newReview.querySelector(".review-card__text");
  const reviewAuthor = newReview.querySelector(".review-card__author");

  reviewText.textContent = currentReview.text;
  reviewAuthor.textContent = currentReview.author;

  reviewContainer.appendChild(newReview);

  i = i + 1;
}, 10000);

// Script for menu

const menuButton = document.querySelector(".header__nav-button");
const menuPopup = document.querySelector(".nav");
const menuPopupOverlay = document.querySelector(".header__modal-overlay");

function openPopup() {
  menuPopup.style.transform = "translateX(0)";
  menuPopupOverlay.style.transform = "scaleX(1)";
  document.addEventListener("keydown", handleEscClose);
}

function closePopup(e) {
  menuPopup.style.transform = "translateX(120%)";
  menuPopupOverlay.style.transform = "scaleX(0)";
  document.removeEventListener("keydown", handleEscClose);
}

function handleEscClose(e) {
  if (e.key === "Escape") {
    closePopup();
  }
}

function handleOutsideClickClose(e) {
  console.log(e.target, e.currentTarget);
  if (e.target === e.currentTarget) {
    closePopup();
  }
}

menuButton.addEventListener("click", openPopup);
menuPopupOverlay.addEventListener("mousedown", handleOutsideClickClose);
