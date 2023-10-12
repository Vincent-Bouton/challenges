const burger = document.querySelector(".burger");
const dropdown = document.querySelector(".dropdown-links");
const html = document.querySelector("html");

let isToggle = false;
burger.addEventListener("click", () => {
  burger.classList.toggle("toggle");
  dropdown.classList.toggle("hidden-burger-dropdown");
  setTimeout(() => burger.children[1].classList.toggle("transparent"), 2000);
});

const linksDropdown = dropdown.children;

linksDropdown[0].addEventListener("click", () => {
  linksDropdown[0].children[1].classList.toggle("active");
  linksDropdown[1].children[1].classList.remove("active");
  linksDropdown[2].children[1].classList.remove("active");
});

linksDropdown[1].addEventListener("click", () => {
  linksDropdown[1].children[1].classList.toggle("active");
  linksDropdown[0].children[1].classList.remove("active");
  linksDropdown[2].children[1].classList.remove("active");
});

linksDropdown[2].addEventListener("click", () => {
  linksDropdown[2].children[1].classList.toggle("active");
  linksDropdown[1].children[1].classList.remove("active");
  linksDropdown[0].children[1].classList.remove("active");
});

html.addEventListener("click", (e) => {
  if (e.target.classList.contains("company") ||
    e.target.classList.contains("product") ||
    e.target.classList.contains("connect")) {
    return;
  }
  linksDropdown[0].children[1].classList.remove("active");
  linksDropdown[1].children[1].classList.remove("active");
  linksDropdown[2].children[1].classList.remove("active");

});
window.addEventListener("resize", () => {
  changeClassList(document.querySelector(".connection .button"));
});

const changeClassList = (button) => {
  if (window.innerWidth >= 1050) {
    button.classList.add("button-white");
    button.classList.remove("button-color");
    return;
  }
  button.classList.add("button-color");
  button.classList.remove("button-white");
};

changeClassList(document.querySelector(".connection .button"));





