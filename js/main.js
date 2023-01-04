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
    console.log(window.scrollY);
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
