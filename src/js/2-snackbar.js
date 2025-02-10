import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".form");

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Запобігаємо перезавантаженню сторінки

    const formData = new FormData(form);
    const delay = Number(formData.get("delay"));
    const state = formData.get("state");

    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (state === "fulfilled") {
          resolve(delay);
        } else {
          reject(delay);
        }
      }, delay);
    });

    promise
      .then((delay) => {
        iziToast.success({
          title: "✅ Success!",
          message: `Fulfilled promise in ${delay}ms`,
          position: "topRight",
        });
      })
      .catch((delay) => {
        iziToast.error({
          title: "❌ Error!",
          message: `Rejected promise in ${delay}ms`,
          position: "topRight",
        });
      });
  });
});