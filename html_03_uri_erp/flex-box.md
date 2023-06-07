# HTML CSS의 display 속성

- tag의 보여지는 성질을 변경할 수 있는 속성
- 모든 태그는 자신만의 고유의 display속성을 갖는다
- 기본 속성으로는 block, inline 속성이 있다.

## display: block 속성

- header, nav, div, p, section, article, footer등의 속성은
  기본적으로 block 성질을 갖는다

- block성질은 box의 보여지는 모양과 달리 무조건 화면의 widtg만큼의 영역을 차지하는 구조
- block 성질을 갖는 tag는 width 값을 변경하여도 보이는 것만 달라지고 실제 박스 영역은 화면에 width이다.
- block 성질을 가진 상태에서는 박스들을 가로 방향으로 배치할수 없다.
- css2 이전에는 block 성질을 가진 box들을 가로방향으로 배치하기 위하여 float라는 속성을 트릭으로 사용했다.
- css속성에 float 라는 속성을 사용하는 순간, 화면개발을 하는 개발자는 탈모가 시작된다.
- 만약 box를 가로로 배치하면서 원하는 형태로 배열을 하는 것은 정말 어려운 작업이었다.

## display: inline 속성

- a, sapn, strong, b, lable, input, button 와 같이 글자단위의 표현 tag들
- 실질적으로 tag의 width를 임의로 조절할수 없다.
  이 tag들의 width들은 tag가 포함하는 Content의 길이만큼 자동 설정된다.
- 심지어 이 tag emfdms padding도 설정이 안되는 경우가 있다.

## display:inline-block 속성

- block 속성의 성질과, inline 속성의 성질을 함께 포함하는 속성
- 이 속성은 기본 display 속성을 변경하여
- block 속성의 tag를 inline-block으로 변경한 후 width속성을 설정하면 실제 보여지는 width와 영역width가 같아진다.
- inline 속성의 tag를 inline-block 으로 변경하면 width 지정이 가능하고 , padding 등을 사용할 수 있다.

## display : flex속성

- css2에서 추가된 display 속성중에 flex속성과 grid 속성이 있다.
- flex 속성은 화면 layout을 만드는데 혁신적 변화를 가져온 속성이다.

- `display : flex` 속성은 `부모 box tag에` 지정하는 style이다.
- 부모 tag에 `display:flex` 속성이 지정되면 `children tag` 들은 자동으로 `display :flex-item` 속성으로 변경된다.
- `display: flex - item ` 속성을 받는 children tag들은 기본적으로 `inline -block` 성질을 갖게되고 톡특한 속성을 부여받는다
