const msgcontainer = document.querySelector("#d-day-msg");
const container = document.querySelector("#d-day-container");
const savedDate = localStorage.getItem("saved-data");
const intervalIdArr = [];

// msgcontainer.style.color = 'red';
// msgcontainer.textContent = "D-Day를 입력해 주세요";

const dateFormMaker = function () {
  const inputYear = document.querySelector("#target-year-input").value;
  const inputMonth = document.querySelector("#target-month-input").value;
  const inputDate = document.querySelector("#target-date-input").value;
  // 사이에 들어가는 값을 문자열로 추가
  // const dateFormat = inputYear + '-' + inputMonth + '-' + inputDate;
  // 템플릿 리터럴
  const dateFomrat = `${inputYear}-${inputMonth}-${inputDate}`;
  return dateFomrat;
  // console.log(inputYear, inputMonth, inputDate);
};

const counterMaker = function (data) {
  if (data !== savedDate) {
    localStorage.setItem("saved-date", data);
  }
  const nowDate = new Date();
  const targetDate = new Date(data).setHours(0, 0, 0, 0);
  const remaining = (targetDate - nowDate) / 1000;
  
  if (remaining <= 0) {
    // 만약, remaining이 0보다 작다면, 타이머가 종료되었습니다. 출력
    console.log("타이머가 종료되었습니다.");
    msgcontainer.innerHTML = "<h3>타이머가 종료되었습니다<h3>";
    msgcontainer.style.display = "flex";
    container.style.display = "none";
    setClearInterval();
    return;
  } else if (isNaN(remaining)) {
    // 만약, 잘못된 날짜가 들어왔다면, 유효한 시간대가 아닙니다. 출력
    console.log("유효한 시간대가 아닙니다.");
    msgcontainer.innerHTML = "<h3>유효한 시간대가 아닙니다<h3>";
    msgcontainer.style.display = "flex";
    container.style.display = "none";
    setClearInterval();
    return;
  }

  const remainingObj = {
    remainingDate: Math.floor(remaining / 3600 / 24),
    remainingHours: Math.floor(remaining / 3600) % 24,
    remainingMin: Math.floor(remaining / 60) % 60,
    remainingSec: Math.floor(remaining % 60),
  };

  const documentObj = {
    days: document.getElementById("days"),
    hours: document.getElementById("hours"),
    min: document.getElementById("min"),
    sec: document.getElementById("sec"),
  };

  const timeKeys = Object.keys(remainingObj);
  const docKeys = Object.keys(documentObj);

  const format = function (time) {
    if (time < 10) {
      return "0" + time;
    } else {
      return time;
    }
  };

  for (let i = 0; i < timeKeys.length; i++) {
    const remainingTime = format(remainingObj[timeKeys[i]]);
    documentObj[docKeys[i]].textContent = remainingTime;
  }

  //   documentObj["days"].textContent = remainingObj["remainingDate"];
  //   documentObj["hours"].textContent = remainingObj["remainingHours"];
  //   documentObj["min"].textContent = remainingObj["remainingMin"];
  //   documentObj["sec"].textContent = remainingObj["remainingSec"];
};

const starter = function (targetDateInput) {
  if (!targetDateInput) {
    targetDateInput = dateFormMaker();
  }
  container.style.display = "flex";
  msgcontainer.style.display = "none";
  // 이미 작동하고 있는 D-Day에 중복으로 작동하지 않게 하기 위해서
  setClearInterval();
  // setInterval메소드가 1초뒤에 실행되기 때문에 따로 먼저 실행
  counterMaker(targetDateInput);
  const intervalId = setInterval(() => {
    counterMaker(targetDateInput);
  }, 1000);
  intervalIdArr.push(intervalId);
};

const setClearInterval = function () {
  localStorage.removeItem("saved-item");
  for (let i = 0; i < intervalIdArr.length; i++) {
    clearInterval(intervalIdArr[i]);
  }
};

const resetTimer = function () {
  container.style.display = "none";
  msgcontainer.innerHTML = "<h3>D-Day를 입력해 주세요</h3>";
  msgcontainer.style.display = "flex";
  setClearInterval();
};

if (savedDate) {
  starter(savedDate);
} else {
  container.style.display = "none";
  msgcontainer.innerHTML = "<h3>D-Day를 입력해 주세요<h3>";
}
