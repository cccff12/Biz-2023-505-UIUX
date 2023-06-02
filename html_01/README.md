# CSS 를 사용하여 interactive 화면 구현하기 2023

- 실무에서 사용하는 CSS는 `CSS2`와 `CSS3`가 사용된다
- 아직은 CSS2가 많이 사용되고 있지만, CSS3의 새로운 기능들이 증가하면서 CSS3 사용이 점점 증가하고 있다.
- 아직 CSS2를 주고 사용하는 이유는 일부 브라우저에서 CSS3의 새로운 기능을 지원하지 않기 때문이다
- 크롬, Edge, firefox, opera, safari와 같은 범용적인 브라우저는 대부분의 HTML5의 기능과 CSS3의 기능을 지원한다. 하지만 매우 새로운 CSS3는 업데이트 되지 않은 Browser에서는 가끔 지원하지 않는 경우도 있다.

## CSS 의 Selector

- css 속성을 부여하기 위한 대상
- `tag`, `id`, `class` 가 있다.

### tag : 아무런 기호 없이 tag 키워드를 바로 사용

```css
div {
  color: blue;
}
```

### id: # 기호와 함꼐 식별자(단어) 를 사용

```css
/* id만 단독으로 사용하기
id는 페이지에서 UNIQUE하기 때문에 단독으로 사용해도 
문제를 일으키는 경우가 상대적으로 적다
*/
#save {
  color: red;
}
```

### CLASS: Dot(.) 기호와 함께 사용

```css
/*페이지의  bbs라는 클래스 위치는 잘 파악하고 사용할 것
위치에 따라 바뀌기때문에 무언가 새롭게 생성되면 유감스러운 결과나 나올수 있음
*/
.bbs {
  background-color: red;
  color: white;
}
```

a.vvs{
color:blue;
}
