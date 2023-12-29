document.addEventListener("DOMContentLoaded", () => {
  let tg = window.Telegram.WebApp;

  tg.ready();

  tg.MainButton.text = "Войти";

  tg.onEvent("mainButtonClicked", function () {
    const form = document.querySelector(".form");
    const inputs = form.querySelectorAll(".form__input");

    const inputsValues = Object.values(inputs).reduce(
      (acc, item) => ({ ...acc, [item.name]: item.value }),
      {}
    );
    if (inputsValues.name && inputsValues.password) {
      tg.MainButton.show();
    }
    tg.sendData(JSON.stringify(inputsValues));
  });

  document.querySelector(".test").addEventListener("click", (e) => {
    console.log(e);
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
