document.addEventListener("DOMContentLoaded", () => {
  /* dept_main 에서 입력하는 요소 중에서
거래처 코드, 거래처명, 대표전화, 담당자명, 담당자 연락처는
반드시 입력해야 하는 요소이다.

각 요소를 입력하지 않고 저장을 할 경우 
alert 경고를 띄우고, 값을 입력하도록 하는 
front validation (유효성 검사) 를 실행하시오
*/
});

const d_code = document.querySelector("#d_code");
const d_name = document.querySelector("#d_name");
const d_tel = document.querySelector("#d_tel");
const d_ceo = document.querySelector("#d_ceo");
const d_addr = document.querySelector("#d_addr");
const d_manager = document.querySelector("#d_manager");
const d_man_tel = document.querySelector("#d_man_tel");

const btn1 = document.querySelector("#dtn1");
const btn2 = document.querySelector("#dtn2");
const btn3 = document.querySelector("#dtn3");

btn1.addEventListener("click", () => {
  const text = btn1.querySelector("d_code").value;
  if (!text) {
    alert("값을 입력하세요");
  }
});
