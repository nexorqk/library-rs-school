export const carousel = () => {
  const DOT_FIRST = document.getElementById("dot-first");
  const DOT_SECOND = document.getElementById("dot-second");
  const DOT_THREE = document.getElementById("dot-three");
  const CAROUSEL = document.getElementById("carousel");
  const ITEM_LEFT = document.getElementById("item-left");
  const ITEM_ACTIVE = document.getElementById("item-active");
  const ITEM_RIGHT = document.getElementById("item-right");

  const moveLeft = () => {
    CAROUSEL.classList.add("transition-left");
    DOT_FIRST.removeEventListener("click", moveLeft);
    DOT_SECOND.removeEventListener("click", moveActive);
    DOT_THREE.removeEventListener("click", moveRight);
  };

  const moveActive = () => {
    CAROUSEL.classList.add("transition-active");
    DOT_FIRST.removeEventListener("click", moveLeft);
    DOT_SECOND.removeEventListener("click", moveActive);
    DOT_THREE.removeEventListener("click", moveRight);
  };

  const moveRight = () => {
    CAROUSEL.classList.add("transition-right");
    DOT_FIRST.removeEventListener("click", moveLeft);
    DOT_SECOND.removeEventListener("click", moveActive);
    DOT_THREE.removeEventListener("click", moveRight);
  };

  DOT_FIRST.addEventListener("click", moveLeft);
  DOT_SECOND.addEventListener("click", moveActive);
  DOT_THREE.addEventListener("click", moveRight);

  CAROUSEL.addEventListener("animationend", (animationEvent) => {
    let changedItem;
    if (animationEvent.animationName === "move-left") {
      CAROUSEL.classList.remove("transition-left");
      changedItem = ITEM_LEFT;
      document.querySelector("#item-active").innerHTML = ITEM_LEFT.innerHTML;
    } else if (animationEvent.animationName === "move-active") {
      CAROUSEL.classList.remove("transition-active");
      changedItem = ITEM_RIGHT;
      document.querySelector("#item-active").innerHTML = ITEM_RIGHT.innerHTML;
    } else {
      CAROUSEL.classList.remove("transition-right");
      changedItem = ITEM_RIGHT;
      document.querySelector("#item-active").innerHTML = ITEM_RIGHT.innerHTML;
    }

    // DOT_FIRST.addEventListener("click", moveLeft);
    // DOT_SECOND.addEventListener("click", moveActive);
    // DOT_THREE.addEventListener("click", moveRight);
  });
};
