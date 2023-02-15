let reviewFile = [
  {
    no: 0,
    img: "img/Jennie.jpg",
    name: "Jennie",
    job: "Main Rapper",
    info: "안녕하세요 제니입니다.",
  },
  {
    no: 1,
    img: "img/Lisa.jpg",
    name: "Lisa",
    job: "Main Dancer",
    info: "안녕하세요 리사입니다.",
  },
  {
    no: 2,
    img: "img/Jisoo.jpg",
    name: "Jisoo",
    job: "Main Visual",
    info: "안녕하세요 지수입니다.",
  },
  {
    no: 3,
    img: "img/Rose.jpg",
    name: "Rose",
    job: "Main Vocal",
    info: "안녕하세요 로제입니다.",
  },
];

const img = document.getElementById("profile_img");
const name = document.getElementById("name");
const job = document.getElementById("job");
const info = document.getElementById("info");

let selectNum = 0;
let prevNum = 0;

const loadProfile = function () {
  const select = reviewFile[selectNum];
  img.src = select.img;
  name.textContent = select.name;
  job.textContent = select.job;
  info.textContent = select.info;
};

const next = function () {
  selectNum++;
  if (selectNum > 3) {
    selectNum = 0;
  }
  loadProfile();
};

const previous = function () {
  selectNum--;
  if (selectNum < 0) {
    selectNum = reviewFile.length - 1;
  }
  loadProfile();
};

const random = function () {
  prevNum = selectNum;
  while (prevNum === selectNum) {
    selectNum = Math.floor(Math.random() * 4);
  }
  loadProfile();
};
