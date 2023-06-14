const images = [
  "./images/image1.jpg",
  "./images/image2.jpg",
  "./images/image3.jpg",
  "./images/image4.jpg",
];

let slideIndex = 0;

const showImage = () => {};

document.addEventListener("DOMContentLoaded", () => {
  //   badge와 image_slides 두 개의 객체 배열을 선언
  // 각각 span.badge 와 img.image_slides tag들을 모두 select하여 저장했다.
  // badges와 image_slides는 배열이 된다.
  // HTML의 JS에서 tag들을 querySelectAll()을 사용하여
  // 모두 select한 결과는 배열이면서 배열이 아니다.
  // JS에서는 이런 배열을 유사 배열이라고 한다.
  // 성질이 한편으로는 배열의 성질을가지면서 배열과 다른
  // 독특한 성질을 함께 가지고 있다.

  const badges = document.querySelectorAll("span.badge");
  const image_slides = document.querySelectorAll("img.image_slides");

  console.log(image_slides);

  //   Object.entries 는image_slides을 배열로만들어준다
  /*
Object.ectrires(select 객체배열) 함수는 
배열의 요소와 index값을 또라른 배열로 생성하는 도구다.
[
[index,img]
[index,img]
[index,img]
]

// */
  //   for (let [index, img] of Object.entries(image_slides)) {
  //     img.src = images[index];
  //   }

  //   showimage라는 함수로 대체
  //   image_slides[0].src = images[0];
  //   image_slides[1].src = images[1];
  //   image_slides[2].src = images[2];

  const showImage = () => {
    for (let img of image_slides) {
      img.computedStyleMap.display = "none";
    }
    image_slides[0].src = images[slideIndex];
    image_slides[0].style.display = "block";

    for (let badge of badges) {
      badge.classList.remove("select");
    }
    badges[slideIndex].classList.add("select");
  }; // showImage...end
  let slideIndex = 0;

  document
    .querySelector("div.controller_box")
    ?.addEventListener("click", (e) => {
      const target = e.target;
      const className = target.classList;
      //   alert(target.classList);
      //   클래스 이름에 left가 포함되어 있으면
      if (className.contains("left")) {
        // alert("왼쪽 버튼 클릭됨");
        // slideIndex--;
        if (--slideIndex < 0) slideIndex = images.length - 1;
        //   클래스 이름에 right가 포함되어 있으면
      } else if (className("right")) {
        // alert("오른쪽 버튼 클릭");
        // slideIndex++;
        if (++slideIndex > images.length - 1) slideIndex = 0;
        // 밑에것 보단 위에 것을 주로 쓴다.
      } else if (className === "badge") {
        // alert("배지 클릭됨");
        // span tag에 data-id값 가져오기
        const id = Number(target.dataset.id);
        slideIndex = id - 1;
      } //if ..end
      //   click event가 작동될때 이미지 새로 갱신하기
      showImage();
    }); // controll box click..end
  //   처음 화면이 시작될 떄 이미지 보이기
  showImage();
}); // DOM...end
