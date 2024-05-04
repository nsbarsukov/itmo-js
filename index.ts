import { exec } from "child_process";
import prompt from "prompts";

prompt({
  type: "select",
  name: "id",
  message: "Выберите презентацию:",
  choices: [
    {
      title: "01 – JS Intro",
      description: "Знакомство с JavaScript",
      value: "01-js-intro.md",
    },
    {
      title: "02 – Basic JS syntax",
      description: "Про базовый синтаксис JavaScript",
      value: "02-basic-syntax.md",
    },
    {
      title: "03 – Objects",
      description: "Почти всё в JavaScript — объект",
      value: "03-objects.md",
    },
    {
      title: "04 – Asynchronous JavaScript",
      description: "Асинхронность в JavaScript",
      value: "04-async.md",
    },
  ],
})
  .then(({ id }) => {
    if (!id) {
      throw new Error("Отмена");
    }

    console.info("⚙️ Подготавливаем лекцию");
    return exec(`slidev --open ${id}`);
  })
  .then(() => {
    console.info("🚀 Запускаем http://localhost:3030");
  });
