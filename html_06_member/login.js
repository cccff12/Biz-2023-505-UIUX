document.addEventListener("DOMContentLoaded", () => {
  const login = () => {
    const login_form = document.querySelector("form#login_form");
    // id나 class가 부착되지 않은 input tag를 select하는 방법
    const username = login_form.querySelector("input[name='username']");
    const password = login_form.querySelector("input[name='password']");
    if (!username.value) {
      alert("user name 을 만드시 입력해야 합니다.");
      username.focus();
      return false;
    }
    if (!password.value) {
      alert("password는 반드시 입력해야 합니다.");
      password.focus();
      return false;
    }

    login_form.submit();
  }; // end login 함수

  document.querySelector("#login_button").addEventListener("click", login);

  document.querySelector("#join_button").addEventListener("click", () => {
    // script 에서 a link 를 클릭한 것처럼 페이지 바꾸기
    document.location.href = "join.html";
  });
});
