document.addEventListener("DOMContentLoaded", () => {
  // image_view box의 img tag를 한번에 select하기

  //   image_view_box 를 한 번 select하고
  // image_view_box가 포함하는 img tag를 또 한 번 select하기
  const image_view_box = document.querySelector("div.image_view");
  const image_view = image_view_box.querySelector("img");

  //   ticker 이미지를 클릭하면 이미지를 view box에 이미지를 보여주기
  const tickerOnClickHandler = (event) => {
    // event 는 div.image_ticker box에서 발생하지만
    // event.target은 가장 안쪽의 img가 된다.
    const target = event.target;
    // click 된 image 의 src속성값을
    // image_view box 의 img src속성에 복사하기
    image_view.src = target.src;
  };
  const tickerBox = document.querySelector("div.image_ticker");
  tickerBox?.addEventListener("click", tickerOnClickHandler);

  // event 버블링을 이용하지 않을 경우
  //  slide image들을 모두 select하여 배열로 만들기
  const tickerImages = document.querySelector("div.image_box img");
  for (let index = 0; index < tickerImages.length; index++) {
    tickerImages[index].addEventListener("click", () => {
      // todo ticker image view에 보이기
    });
  }
});
