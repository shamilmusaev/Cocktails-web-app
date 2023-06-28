//Модуль который позволяет, получить элементы из html

const getElement = (selection) => {
  const element = document.querySelector(selection);
  if (element) return element;
  throw new Error("no element selected");
};

export default getElement;
