export const burger = () => {
  const burgerButton = document.querySelector(".burger");
  const burgerMenu = document.querySelector(".burger__nav");
  const burgerLink = document.querySelectorAll(".burger__nav-link");

  burgerButton.addEventListener("click", () => {
    burgerButton.classList.toggle("opened");
    burgerMenu.classList.toggle("visible");
  });

  document.addEventListener("click", (e) => {
    if (!burgerMenu.contains(e.target) && !burgerButton.contains(e.target)) {
      burgerMenu.classList.remove("visible");
    }
  });

  [...burgerLink].forEach((link) =>
    link.addEventListener("click", () => {
      burgerMenu.classList.remove("visible");
    })
  );
};
