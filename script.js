const toggleMenu = document.getElementById("toggle-menu");
const button = document.getElementById("toggle");

button.addEventListener("click", () => {
  const open = JSON.parse(toggleMenu.getAttribute("aria-expanded"));
  button.setAttribute("aria-expanded", !open);
  toggleMenu.hidden = !toggleMenu.hidden;
});
