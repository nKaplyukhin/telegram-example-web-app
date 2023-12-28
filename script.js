let tg = window.Telegram.WebApp;

tg.MainButton.isVisible = true;

tg.MainButton.text = "Войти";

tg.MainButton.onClick(() => {
  const form = document.querySelector(".form");
  const inputs = form.querySelectorAll(".form__input");

  const inputsValues = Object.values(inputs).reduce(
    (acc, item) => ({ ...acc, [item.name]: item.value }),
    {}
  );

  tg.sendData(JSON.stringify(inputsValues));
  tg.close();
});

document.querySelector(".test").addEventListener("click", (e) => {
  console.log(e);
  const form = document.querySelector(".form");
  const inputs = form.querySelectorAll(".form__input");

  const inputsValues = Object.values(inputs).reduce(
    (acc, item) => ({ ...acc, [item.name]: item.value }),
    {}
  );

  tg.sendData(JSON.stringify(inputsValues));
  tg.close();
});
