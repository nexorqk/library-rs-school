export const favoriteSlider = () => {
  const inputs = document.querySelectorAll("input[name='season']");
  const cards = document.querySelectorAll(".favorites-seasons__cards");

  const inputsArr = Array.from(inputs);
  const cardsArr = Array.from(cards);

  inputsArr.forEach((input) =>
    input.addEventListener("click", () => {
      switch (input.id) {
        case "winter":
          cardsArr.forEach((input) => input.classList.add("hidden"));
          cardsArr[0].classList.remove("hidden");
          break;
        case "spring":
          cardsArr.forEach((input) => input.classList.add("hidden"));
          cardsArr[1].classList.remove("hidden");
          break;
        case "summer":
          cardsArr.forEach((input) => input.classList.add("hidden"));
          cardsArr[2].classList.remove("hidden");
          break;
        case "autumn":
          cardsArr.forEach((input) => input.classList.add("hidden"));
          cardsArr[3].classList.remove("hidden");
      }
    })
  );
};
