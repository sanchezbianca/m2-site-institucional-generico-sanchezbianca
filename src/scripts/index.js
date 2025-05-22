function handleModal() {
  const button1 = document.querySelector(".header__button");
  const button2 = document.querySelector(".faq__button");
  const modalContainer = document.querySelector(".modal__controller");

  button1.addEventListener("click", () => {
    modalContainer.showModal();
    closeModal();
  });

  button2.addEventListener("click", () => {
    modalContainer.showModal();
    closeModal();
  });
}

function closeModal() {
  const button = document.querySelector(".modal__close");
  const modalContainer = document.querySelector(".modal__controller");

  button.addEventListener("click", () => {
    modalContainer.close();
  });
}

handleModal();
