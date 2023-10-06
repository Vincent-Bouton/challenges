const burger = document.querySelector(".burger");
const dropdown = document.querySelector(".dropdown-links");

let isToggle = false;
burger.addEventListener("click", () => {
	burger.classList.toggle("toggle");
	dropdown.classList.toggle("hidden-burger-dropdown");
	setTimeout(() => burger.children[1].classList.toggle("transparent"), 2000);
});

const linksDropdown = dropdown.children;

linksDropdown[0].addEventListener("click", (e) => {
	linksDropdown[0].children[1].classList.toggle("active");
});

linksDropdown[1].addEventListener("click", (e) => {
	linksDropdown[1].children[1].classList.toggle("active");
});

linksDropdown[2].addEventListener("click", (e) => {
	linksDropdown[2].children[1].classList.toggle("active");
});
