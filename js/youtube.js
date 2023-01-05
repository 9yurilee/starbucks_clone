// 2. This code loads the IFrame Player API code asynchronously.
let tag = document.createElement("script");

tag.src = "https://www.youtube.com/iframe_api";
let firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
let player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player("player", {
    // height: "360",
    // width: "640",
    videoId: "An6LvWQuj_8", //유튜브 주소에 제일 마지막 파라미터
    playerVars: {
      autoplay: true,
      loop: true,
      playlist: "An6LvWQuj_8" // 반복재생할 영상의 아이디값 넣어줘야함
    },
    // 영상이 준비되면 실행시킬 함수
    events: {
      onReady: function (event) {
        event.target.mute(); // 음소거
      }
    }
  });
}
