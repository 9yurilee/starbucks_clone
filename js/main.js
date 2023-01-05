const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");

searchEl.addEventListener("click", function () {
  searchInputEl.focus();
});

searchInputEl.addEventListener("focus", function () {
  searchEl.classList.add("focused"); // focused라는 클래스 추가
  searchInputEl.setAttribute("placeholder", "통합검색"); // html 속성 지정할 때
});

searchInputEl.addEventListener("blur", function () {
  searchEl.classList.remove("focused");
  searchInputEl.setAttribute("placeholder", ""); // html 속성 지정할 때
});

const badgeEl = document.querySelector("header .badges");

window.addEventListener(
  "scroll",
  _.throttle(function () {
    if (window.scrollY > 500) {
      gsap.to(badgeEl, 0.6, {
        opacity: 0,
        display: "none"
      });
    } else {
      gsap.to(badgeEl, 0.3, {
        opacity: 1,
        display: "block"
      });
    }
  }, 300)
);

// VISUAL 순차적으로 나타나기
const fadeEls = document.querySelectorAll(".visual .fade-in");

fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * 0.7, //순차적으로
    opacity: 1 //CSS에서 opacity : 0인걸 1로 바꾸는 것!
  });
});

// 공지사항 슬라이드
// new Swiper(선택자, 옵션)
new Swiper(".notice-line .swiper-container", {
  direction: "vertical",
  autoplay: true,
  loop: true
});

new Swiper(".promotion .swiper-container", {
  slidesPerView: 3, // 한 번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백(px)
  centeredSlides: true, // 1번 슬라이드가 가운데
  loop: true,
  autoplay: {
    delay: 5000 // 5s
  }, // 객체면 autoplay 추가 옵션 기재 가능
  pagination: {
    el: ".promotion .swiper-pagination", // 페이지 번호 요소 선택자
    clickable: true // 페이지네이션 클릭 가능 여부
  },
  navigation: {
    prevEl: ".promotion .swiper-prev",
    nextEl: ".promotion .swiper-next"
  }
});

// 프로모션 토글 기능
const promotionEl = document.querySelector(".promotion");
const promotionToggleBtn = document.querySelector(".toggle-promotion");

let isHidePromotion = false;

promotionToggleBtn.addEventListener("click", function () {
  isHidePromotion = !isHidePromotion;
  if (isHidePromotion) {
    promotionEl.classList.add("hide");
  } else {
    promotionEl.classList.remove("hide");
  }
});

//AWARDS
new Swiper(".awards .swiper-container", {
  slidesPerView: 5, // 한 번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백(px)
  centeredSlides: true, // 1번 슬라이드가 가운데
  loop: true,
  autoplay: {
    delay: 5000 // 5s
  }, // 객체면 autoplay 추가 옵션 기재 가능
  navigation: {
    prevEl: ".awards .swiper-prev",
    nextEl: ".awards .swiper-next"
  }
});

//To-Top
const toTopEl = document.querySelector(".to-top");

toTopEl.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// FLOATING
function random(min, max) {
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}

function floatingObject(selector, delay, size) {
  gsap.to(selector, random(1.5, 2.5), {
    y: 20,
    repeat: -1, // 무한반복!
    yoyo: true, // 다시 올라가게끔
    ease: Power1.easeInOut, // ease함수
    delay: random(0, delay)
  });
}
floatingObject(".floating1", 1, 15);
floatingObject(".floating2", 0.5, 15);
floatingObject(".floating3", 1.5, 20);
