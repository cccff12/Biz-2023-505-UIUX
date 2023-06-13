// func1은 3개의 함수를 요소(맴버)로 포함하는 json 객체이다.
const func1 = {
  // 두 개의 숫자를 전달 받아 두 숫자를 덧셈한 후 return하는 코드
  덧셈: (num1, num2) => num1 + num2, //return 이 생략됨
  곱셈: (num1, num2) => num1 * num2,
  뺄셈: (num1, num2) => {
    return num1 - num2;
  },
};
console.log(func1.곱셈(100, 500));
const add = func1.덧셈(200, 500);
console.log(add);
