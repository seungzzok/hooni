const btn = document.querySelector(".btn");
const links = document.querySelector(".links");

btn.addEventListener("click", () => {
  links.classList.toggle("active");
});
