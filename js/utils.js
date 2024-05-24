export const createEl = (el, style = "") => {
  const element = document.createElement(el);
  if (style) {
    element.classList.add(style);
  }

  return element;
};
