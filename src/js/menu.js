const burger = document.querySelector(".btn-burger");
const menu = document.querySelector(".menu");
const closeBtn = document.querySelector(".btn-close");

burger.addEventListener("click", () => {
  menu.classList.add("menu--active");
  burger.classList.add("burger--active");
  document.body.classList.add("no-scroll");
});

closeBtn.addEventListener("click", () => {
  menu.classList.remove("menu--active");
  burger.classList.remove("burger--active");
  document.body.classList.remove("no-scroll");
});

document.querySelectorAll(".nav-item a").forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("menu--active");
    burger.classList.remove("burger--active");
    document.body.classList.remove("no-scroll");
  });
});

document.addEventListener("click", (event) => {
  const isClickInsideMenu = menu.contains(event.target);
  const isClickOnBurger = burger.contains(event.target);

  if (!isClickInsideMenu && !isClickOnBurger) {
    menu.classList.remove("menu--active");
    burger.classList.remove("burger--active");
    document.body.classList.remove("no-scroll");
  }
});
