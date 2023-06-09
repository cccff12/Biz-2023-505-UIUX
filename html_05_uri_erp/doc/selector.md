# HTML 문서에서 Selector

- HTML tag로 작성된 문서는 각 tag들이 모두 객체 (object)로 취급된다..
- 같은 tag들은 tag의 객체배열로 취급되고, 같은 class속성이 부여된 tag들은 객체클래스배열로 취급된다.
- id 속성을 갖는 tag는 개별 객체(변수)로 취급되낟
- 다른 프로그래밍 언어와 구별하기 위해서 HTML 에서는 이들을 Selector라 부른다.

## 각 selector의 취급 방법

- tag : tag의 이름 자체가 객체이름, Selector 이름이다.
- classs : `.클래스명` 이 Selector 이름이다.
- id : `#id명` 이 Selector 이름이다.

# Dom(Document Object Model)
- HTML 문서의 모든 객체를 일컫는 용어
- `HTML 문서의 모든 요소는 객체`라는 선언
- 