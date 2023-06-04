// Script to generate cards

const cardTemplate = document.querySelector(".card__template");
const cardClone = cardTemplate.content.cloneNode(true);
const cardContainer = document.querySelector(".service__list");

const cardList = [
  { name: "STOVE/RANGE", image: "../images/example.jpg" },
  { name: "WASHER & DRYER", image: "../images/example.jpg" },
  { name: "ICE MAKER", image: "../images/example.jpg" },
  { name: "COOKTOP", image: "../images/example.jpg" },
  { name: "REFRIGERATOR", image: "../images/example.jpg" },
  { name: "GARBAGE DISPOSAL", image: "../images/example.jpg" },
  { name: "MICROWAVE", image: "../images/example.jpg" },
  { name: "DISHWASHER", image: "../images/example.jpg" },
];

cardList.map((item) => {
  const newCard = cardClone.cloneNode(true);
  const cardName = newCard.querySelector(".card__title");
  const cardImage = newCard.querySelector(".card__image");

  cardName.textContent = item.name;
  cardImage.style.backgroundImage = `url(${item.image})`;

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
