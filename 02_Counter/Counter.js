const num = document.getElementById("num");
let cnt = 0;

const decrease = function () {
  cnt--;
  num.textContent = cnt;
  color();
};

const reset = function () {
  cnt = 0;
  num.textContent = cnt;
  color();
};

const increase = function () {
  cnt++;
  num.textContent = cnt;
  color();
};

const color = function () {
  if (cnt === 0) {
    num.style.color = "black";
  } else if (cnt >= 0) {
    num.style.color = "blue";
  } else {
    num.style.color = "red";
  }
};
