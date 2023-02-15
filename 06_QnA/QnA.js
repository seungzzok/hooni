const list = document.querySelectorAll(".list");
const line = document.querySelectorAll(".line");
const qst_info = document.querySelectorAll(".qst_info");
const btn = document.querySelectorAll(".btn");
const change = document.querySelectorAll(".change")

let qst_list = [];

for (let i = 0; i < list.length; i++) {
  btn[i].addEventListener("click", () => {
    list[i].classList.toggle('extend')
    line[i].classList.toggle('show')
    qst_info[i].classList.toggle('show')
    btn[i].classList.toggle('change')

    if(btn[i].classList.contains('change')){
        btn[i].innerHTML = '<i class="fa-solid fa-minus"></i>'
    } else{
        btn[i].innerHTML = '<i class="fa-solid fa-plus"></i>'
    }
  });
}
