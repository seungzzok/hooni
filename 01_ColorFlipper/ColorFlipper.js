const background = document.getElementById("contents");
const color = document.getElementById("value");
let rgbArr = [];

const backgroundColor = function () {
  for (let i = 0; i <= 2; i++) {
    let num = Math.floor(Math.random() * 1000);
    while (num > 255) {
      num = Math.floor(Math.random() * 1000);
    }
    rgbArr[i] = num;
  }
  let rgb = `rgb(${rgbArr[0]},${rgbArr[1]},${rgbArr[2]})`;
  background.style.backgroundColor = rgb;
  color.textContent = rgb;
};
