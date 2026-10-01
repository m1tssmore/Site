const menuToggle = document.querySelector(".menu-toggle");
const mainMenu = document.getElementById("mainMenu");

const overlay = document.createElement("div");
overlay.className = "menu-overlay";
document.body.appendChild(overlay);

function setMenu(open) {
  mainMenu.classList.toggle("open", open);
  menuToggle.classList.toggle("open", open);
  overlay.classList.toggle("show", open);
  document.body.classList.toggle("menu-open", open);
  menuToggle.setAttribute("aria-expanded", open);
  menuToggle.setAttribute("aria-label", open ? "Мәзірді жабу" : "Мәзірді ашу");
}

menuToggle.addEventListener("click", function () {
  setMenu(!mainMenu.classList.contains("open"));
});

overlay.addEventListener("click", function () {
  setMenu(false);
});

mainMenu.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    setMenu(false);
  });
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") setMenu(false);
});
