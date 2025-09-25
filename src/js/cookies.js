document.addEventListener("DOMContentLoaded", () => {
  const popup = document.getElementById("cookie-popup");
  const acceptBtn = document.getElementById("accept-cookies");
  const declineBtn = document.getElementById("decline-cookies");

  const showPopup = () => {
    popup.classList.remove("hidden");
  };

  const hidePopup = () => {
    popup.classList.add("hidden");
  };

  if (
    localStorage.getItem("cookiesAccepted") ||
    localStorage.getItem("cookiesDeclined")
  ) {
    hidePopup();
  } else {
    showPopup();
  }

  acceptBtn.addEventListener("click", () => {
    localStorage.setItem("cookiesAccepted", "true");
    hidePopup();
  });

  declineBtn.addEventListener("click", () => {
    localStorage.setItem("cookiesDeclined", "true");
    hidePopup();
  });
});
