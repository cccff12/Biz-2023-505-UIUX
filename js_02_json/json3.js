// fetch: 백엔드에서 데이터를 가져오는 함수
// js에서 ajax 방식으로 backend server로부터 데이터를 받아오는 함수
fetch("https://jsonplaceholder.typicode.com/todos")
  // 가져오면 then에게 전달 하고 response에 전달
  .then((response) => response.json())
  // 그리고 then에 전달
  .then((json) => console.log(json));
