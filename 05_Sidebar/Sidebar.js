const cls_btn = document.querySelector(".cls_btn");
const side_btn = document.querySelector('.side_btn')
const sidebar = document.querySelector(".sidebar");

cls_btn.addEventListener("click", () => {
    sidebar.classList.toggle("active");
    side_btn.classList.toggle("hide");
});

side_btn.addEventListener("click", () => {
    sidebar.classList.toggle("active");
    side_btn.classList.toggle("hide");
});