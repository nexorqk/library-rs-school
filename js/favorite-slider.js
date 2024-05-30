export const favoriteSlider = () => {
  const inputs = document.querySelectorAll("input[name='season']");
  const cards = document.querySelectorAll(".favorites-seasons__cards");

  window.addEventListener("DOMContentLoaded", () => {
    cardsArr[0].classList.add("show");
  });

  const inputsArr = Array.from(inputs);
  const cardsArr = Array.from(cards);

  const cardsSeason = {
    winter: 0,
    spring: 1,
    summer: 2,
    autumn: 3,
  };

  inputsArr.forEach((input) =>
    input.addEventListener("click", () => {
      cardsArr.forEach((cards) => {
        cards.classList.remove("show");
      });

      cardsArr[cardsSeason[input.id]].classList.add("show");
    })
  );
};
