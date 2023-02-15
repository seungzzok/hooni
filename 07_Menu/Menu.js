// 메뉴데이터
const menuList = [
  {
    category: "coffee",
    name: "아메리카노",
    price: "4,500",
    info: "진하게 로스팅한 커피 원두에서 에스프레소를 추출하여 투썸 고유의 원두 풍미를 느낄 수 있는 에스프레소 음료",
    img: "img/coffee/아메리카노.jpg",
  },
  {
    category: "coffee",
    name: "카페라떼",
    price: "5,000",
    info: "풍부하고 진한 농도의 에스프레소와 스팀밀크 위에 부드러운 우유 거품을 살짝 올려준 에스프레소 음료",
    img: "img/coffee/카페라떼.jpg",
  },
  {
    category: "coffee",
    name: "바닐라 카페라떼",
    price: "5,500",
    info: "달콤한 바닐라 향과 풍부한 에스프레소가 조화를 이룬 부드러운 라떼",
    img: "img/coffee/바닐라라떼.jpg",
  },
  {
    category: "coffee",
    name: "카페모카",
    price: "5,500",
    info: "진한 초콜릿 모카 시럽과 풍부하고 진한 농도의 에스프레소를 스팀밀크와 혼합하여 부드러운 휘핑크림을 올린 달콤한 에스프레소 음료",
    img: "img/coffee/카페모카.jpg",
  },
  {
    category: "coffee",
    name: "카라멜마키아또",
    price: "5,000",
    info: "풍부하고 진한 농도의 에스프레소와 스팀밀크 위에 부드러운 우유 거품을 살짝 올려준 에스프레소 음료",
    img: "img/coffee/카라멜마키아또.jpg",
  },
  {
    category: "coffee",
    name: "콜드브루",
    price: "5,000",
    info: "풍부하고 진한 농도의 에스프레소와 스팀밀크 위에 부드러운 우유 거품을 살짝 올려준 에스프레소 음료",
    img: "img/coffee/콜드브루.jpg",
  },
  {
    category: "tea",
    name: "그린티라떼",
    price: "5,000",
    info: "풍부하고 진한 농도의 에스프레소와 스팀밀크 위에 부드러운 우유 거품을 살짝 올려준 에스프레소 음료",
    img: "img/tea/그린티라떼.jpg",
  },
  {
    category: "tea",
    name: "로얄밀크티",
    price: "5,000",
    info: "풍부하고 진한 농도의 에스프레소와 스팀밀크 위에 부드러운 우유 거품을 살짝 올려준 에스프레소 음료",
    img: "img/tea/로얄밀크티.jpg",
  },
  {
    category: "tea",
    name: "애플민트티",
    price: "5,000",
    info: "풍부하고 진한 농도의 에스프레소와 스팀밀크 위에 부드러운 우유 거품을 살짝 올려준 에스프레소 음료",
    img: "img/tea/애플민트티.jpg",
  },
  {
    category: "tea",
    name: "얼그레이",
    price: "5,000",
    info: "풍부하고 진한 농도의 에스프레소와 스팀밀크 위에 부드러운 우유 거품을 살짝 올려준 에스프레소 음료",
    img: "img/tea/얼그레이.jpg",
  },
  {
    category: "tea",
    name: "카모마일",
    price: "5,000",
    info: "풍부하고 진한 농도의 에스프레소와 스팀밀크 위에 부드러운 우유 거품을 살짝 올려준 에스프레소 음료",
    img: "img/tea/카모마일.jpg",
  },
  {
    category: "beverage",
    name: "바닐라밀크쉐이크",
    price: "5,000",
    info: "풍부하고 진한 농도의 에스프레소와 스팀밀크 위에 부드러운 우유 거품을 살짝 올려준 에스프레소 음료",
    img: "img/beverage/바닐라밀크쉐이크.jpg",
  },
  {
    category: "beverage",
    name: "복숭아에이드",
    price: "5,000",
    info: "풍부하고 진한 농도의 에스프레소와 스팀밀크 위에 부드러운 우유 거품을 살짝 올려준 에스프레소 음료",
    img: "img/beverage/복숭아에이드.jpg",
  },
  {
    category: "beverage",
    name: "자몽에이드",
    price: "5,000",
    info: "풍부하고 진한 농도의 에스프레소와 스팀밀크 위에 부드러운 우유 거품을 살짝 올려준 에스프레소 음료",
    img: "img/beverage/자몽에이드.jpg",
  },
  {
    category: "beverage",
    name: "스트로베리라떼",
    price: "5,000",
    info: "풍부하고 진한 농도의 에스프레소와 스팀밀크 위에 부드러운 우유 거품을 살짝 올려준 에스프레소 음료",
    img: "img/beverage/스트로베리라떼.jpg",
  },
  {
    category: "beverage",
    name: "로얄밀크티쉐이크",
    price: "5,000",
    info: "풍부하고 진한 농도의 에스프레소와 스팀밀크 위에 부드러운 우유 거품을 살짝 올려준 에스프레소 음료",
    img: "img/beverage/로얄밀크티쉐이크.jpg",
  },
  {
    category: "beverage",
    name: "스트로베리피치프라페",
    price: "5,000",
    info: "풍부하고 진한 농도의 에스프레소와 스팀밀크 위에 부드러운 우유 거품을 살짝 올려준 에스프레소 음료",
    img: "img/beverage/스트로베리피치프라페.jpg",
  },
  {
    category: "cake",
    name: "떠먹는마스카포네딸기생크림",
    price: "5,000",
    info: "풍부하고 진한 농도의 에스프레소와 스팀밀크 위에 부드러운 우유 거품을 살짝 올려준 에스프레소 음료",
    img: "img/cake/떠먹는마스카포네딸기생크림.jpg",
  },
  {
    category: "cake",
    name: "떠먹는바닐라슈크림",
    price: "5,000",
    info: "풍부하고 진한 농도의 에스프레소와 스팀밀크 위에 부드러운 우유 거품을 살짝 올려준 에스프레소 음료",
    img: "img/cake/떠먹는바닐라슈크림.jpg",
  },
  {
    category: "cake",
    name: "떠먹는아이스박스",
    price: "5,000",
    info: "풍부하고 진한 농도의 에스프레소와 스팀밀크 위에 부드러운 우유 거품을 살짝 올려준 에스프레소 음료",
    img: "img/cake/떠먹는아이스박스.jpg",
  },
  {
    category: "cake",
    name: "P.쿠키앤크림",
    price: "5,000",
    info: "풍부하고 진한 농도의 에스프레소와 스팀밀크 위에 부드러운 우유 거품을 살짝 올려준 에스프레소 음료",
    img: "img/cake/P.쿠키앤크림.jpg",
  },
];

// 버튼생성
const btn_container = document.querySelector(".btn_container");
const categoryArr = [];

menuList.forEach((x) => {
  if (!categoryArr.includes(x.category)) {
    categoryArr.push(x.category);
  }
});

categoryArr.forEach((x) => {
  upperX = x.charAt(0).toUpperCase() + x.slice(1);
  btn_container.innerHTML += `<button class="btn" id="${x}">${upperX}</button>`;
  const nameX = document.getElementById(x);
  nameX.style.marginRight = "10px";
});

// 버튼 필터기능
const btns = document.querySelectorAll(".btn");
const list = document.querySelector(".list");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // 버튼 색상 고정
    btns.forEach((x) => {
      x.classList.remove("select");
    });
    btnColor(btn);

    // 필터된 아이템 불러오기
    list.innerHTML = "";
    if (btn.textContent === "All") {
      loadAll();
    } else {
      for (let item of menuList) {
        if (item.category === btn.textContent.toLowerCase()) {
          loadItem(item);
        }
      }
    }
  });
});

const loadItem = function (item) {
  list.innerHTML += `<li class="item">
                <div class="img_container">
                  <img src="${item.img}" alt="" />
                </div>
                <div class="txt_container">
                  <div class="item_top_container">
                    <div class="item_title">${item.name}</div>
                    <div class="price">&#8361;${item.price}</div>
                  </div>
                  <div class="item_line"></div>
                  <div class="info">
                    ${item.info}
                  </div>
                </div>
              </li>`;
};

const loadAll = function () {
  menuList.forEach((item) => {
    loadItem(item);
  });
};

// 버튼 색상유지
const btnColor = function (btn) {
  btn.classList.toggle("select");
};

loadAll();
btnColor(btns[0]);
