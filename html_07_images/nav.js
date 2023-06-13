document.addEventListener("DOMContentLoaded", () => {
  const nav_ul = document.querySelector("nav ul");

  //   document.querySelector("li#Home").addEventListener("click", () => {
  //     alert("home으로 가기");
  //   });

  //   document.querySelector("li#Home").addEventListener("click", () => {
  //     alert("거래처 관리로 가기");
  //   });
  //   document.querySelector("li#Home").addEventListener("click", () => {
  //     alert("상품관리로 가기");
  //   });
  //   document.querySelector("li#Home").addEventListener("click", () => {
  //     alert("home으로 가기");
  //   });
  //   document.querySelector("li#Home").addEventListener("click", () => {
  //     alert("home으로 가기");
  //   });

  const nav_click = (event) => {
    const target = event.target;
    const nav_text = target.innerText;
    if (nav_text === "Home") {
      document.location.href = "./index.html";
    } else if (nav_text === "거래처") {
      document.location.href = "./background.html";
    } else if (nav_text === "상품") {
      document.location.href = "./background2.html";
    } else if (nav_text === "로그아웃") {
      alert("안녕 잘가@@");
    } else if (nav_text === "관리자") {
      document.location.href = "http://naver.com";
    }
  };
  /*
  if (nav_ul) {
    nav_ul.addEventListener("click", nav_click);
  }
*/
  // nav에 ul tag가  null이냐? 만약 아니면 실행
  // null safe 코드
  // nav_ul 객체변수가 null이 아닐 경우에만 add..() 함수를 실행하라
  // null이면 무시하라
  nav_ul?.addEventListener("click", nav_click);
});
