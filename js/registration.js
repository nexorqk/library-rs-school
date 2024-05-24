import { createEl } from "./utils.js";

export const registration = () => {
  const SIGN_UP_BTN = document.querySelector(
    ".library-cards__buttons .sign-up"
  );
  const registerModal = document.querySelector(".register-modal");
  const librarySection = document.querySelector(".library-cards");

  SIGN_UP_BTN.addEventListener("click", () => {
    librarySection.append(registerModal);
  });
};
