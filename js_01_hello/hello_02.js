let num1 = 100;
let num2 = 200;
// js의 interpolation에서는 변수 뿐만 아니라
// 직접 연산식을 사용할 수 있다.
console.log(`${num1}+${num2}=${num1 + num2}`);
num1 = "우리나라";
num2 = "대한민국";
console.log(`${num1}+${num2}=${num1 + num2}`);

// 함수 선언
function func1() {
  let num3 = 100;
  let num4 = 200;
  console.log(num3 + num4);
}
// 함수 호출
func1();

let num5 = 100;
let num6 = 100;
function func2() {
  console.log(num5 + num6);
}

func2();

// javascript에서 변수를 선언하는 또 다른 키워드
// var : 초기 js탄생 시점부터 만들어진 키워드
// var를 사용해 선언된 변수는 또 다시 선언될수 있다.

// 그 외에도 scope와 관련된 많은 issue가 있다.
// 따라서 현재의 js코드는 var키워드가 없다고 생각하라

var num7 = 100;
var num8 = 100;
var num7 = "대한민국";
var num8 = "우리나라";

// let num6 = "대한민국";
// let num5 = "대한민국";
console.log(num7, num8);
