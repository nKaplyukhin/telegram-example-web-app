document.addEventListener("DOMContentLoaded", () => {
  let tg = window.Telegram.WebApp;

  tg.ready();
  tg.MainButton.isVisible = true;
  tg.MainButton.text = "Войти";

  tg.onEvent("mainButtonClicked", function () {
    const form = document.querySelector(".form");
    const inputs = form.querySelectorAll(".form__input");
    let inputsValues = {};

    inputs.forEach((input) => {
      inputsValues = {
        ...inputsValues,
        [input.name]: input.value,
      };
    });

    tg.sendData(JSON.stringify(inputsValues));
  });

  document.querySelector(".test").addEventListener("click", (e) => {
    console.log(e);

    console.log(tg.initDataUnsafe);
    // const form = document.querySelector(".form");
    // const inputs = form.querySelectorAll(".form__input");

    // const inputsValues = Object.values(inputs).reduce(
    //   (acc, item) => ({ ...acc, [item.name]: item.value }),
    //   {}
    // );

    // tg.sendData(JSON.stringify(inputsValues));
    // tg.close();

    console.log(tg.MainButton);
  });
});
