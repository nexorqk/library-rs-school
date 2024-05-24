export const carousel = () => {
  const dots = document.querySelectorAll(".about-slider__dot");
  const dotsInner = document.querySelectorAll(".about-slider__dot-inner");

  const dotsArr = Array.from(dots);
  const dotsInnerArr = Array.from(dotsInner);

  dotsArr.forEach((dot, index) =>
    dot.addEventListener("click", () => {
      dotsInnerArr.forEach((dotsInner) =>
        dotsInner.classList.remove("about-slider__dot--active")
      );
      dotsInnerArr[index].classList.add("about-slider__dot--active");
    })
  );
};
