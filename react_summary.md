# 1.2 자바스크립트를 이용한 서버 사이드 처리 - Node.js
### 1.2.1 3분만에 살펴보는 Node.js
* Node.js의 장점 & 특징
	* 실행 효율이 좋은 웹 애플리케이션 실행 환경
	* 서버와 클라이언트를 하나의 프로그래밍 언어로
	* 편리한 라이브러리와 간단한 사용
----

### 1.2.2 대량 접근에 강한 Node.js
* API들이 비동기I/O를 채용하고 있음

* 자바스크립트로 어떻게 I/O 처리를 할까?
	* Ajax 통신
	* P30 텍스트파일 읽는 프로그램 - readfile.js
	* fs.readFile() 메소드 사용
		* 비동기적으로 파일 읽기처리
		* 읽기 완료 후 콜백 함수가 수행됨
---

# 1.3 패키지 매니저 npm
### 1.3.1 npm으로 할 수 있는 것
* 라이브러리 설치와 제거
---

### 1.3.2 npm으로 라이브러리를 설치하는 방법
* 라이브러리를 모듈이라고 함
* 로컬 모듈 설치
	```BASH
    $ npm install request	// request 모듈을 로컬(node\_modules)에 설치
    ```
    > 설치 후 require() 함수로 모듈 사용

	* P33 request-downloadfile.js

----

* 전역 설치
	```BASH
    $ npm root -g	// 설치 디렉토리 확인
    $ npm install -g coffee-script	// 커피스크립트 설치
    ```

* npm으로 설치한 모듈을 참조할 수 없는 경우
	* NODE\_PATH 변수가 잘못 설정되어 있는 경우임
	* node\_modules 경로를 설정하면 됨

* 모듈제거
	```BASH
    $ npm uninstall request
    ```
----

### 1.3.3 npm을 사용한 프로젝트 생성 방법
* 폴더 생성 후 init 실행
	```BASH
    $ npm init
    ```

* package.json으로 모듈 설치 기록하기
	```BASH
    $ npm install colors --save
    ```
    > package.json에 의존 모듈로 설치한 모듈과 버전이 추가됨
----

### 1.3.4 npm을 사용해 스크립트 실행하기
* package.json안에 scripts 영역의 명령어를 "npm run <명령어이름>"의 형태로 실행함
* npm run은 실행 가능한 명령어 목록을 출력함
```BASH
	{
    	...
        "scripts": {
        	'start": "node index.js",
            "check": "node -v"
        }
        ...
    }
    
    $ npm run start	// scripts/start에 작성된 셸 명령어가 실행됨
    $ npm run	// 실행가능한 명령어 목록을 출력
```
----

### 1.3.5 Yarn
* 페이스북을 중심으로 개발되고 있는 npm과 같은 패키지관리 시스템
* 설치방법
	* ` $ npm install yarn -g`
* yarn을 통한 모듈 설치
	* add 명령어 사용
	* ` $ yarn add coffee-script`
	* 전역 모듈 설치는 global 옵션 사용
		* ` $ yarn global add coffee-script`
* npm과 동일한 기능을 수행하면서도 빠르다.
---

# 1.4 개발에 사용되는 에디터
### 1.4.1 텍스트 에디터
* 아톰 에디터
* 비주얼 스튜디오 코드

### 1.4.2 온라인 코드 에디터
* JSFiddle

### 1.4.3 웹 브라우저의 개발자 도구
----

# 1.5 자바스크립트 표준 스타일 - 코딩 규약
### 1.5.1 자바스크립트 표준 스타일이란?
### 1.5.2 왜 코딩 규약이 필요할까?
### 1.5.3 JS 표준 스타일이란?
### 1.5.4 주목해야 하는 규약
* 세미콜론 사용하지 않는다 - 여러가지 의견이 분분함
* 들여쓰기는 공배 2개 - 개취
* 함수 이름 뒤의 공백
* 비교 연산자 "=="는 사용하지 않고, "==="만 사용
	* ===는 자료변환을 하지 않음 ("1" === 1) : false
	* ==는 자료 변환해서 비교 함 ("05" == 5) : true
### 1.5.5 자동으로 스타일 확인하고 변환하기
* 자동으로 스타일을 변환해서 적용해줌
	* ` $ npm install standard --save-dev` - 프로젝트에 스타일을 적용
	* ` $ npm install standard --global` - 전역 도구로 사용
	* ` $ standard` - 스타일에 맞지 않는 부분의 경고 출력
	* ` $ standard --fix` - 자동으로 문제 해결해서 JS 표준 스타일에 맞게 변경해줌
----

### 1.5.6 아톰 에디터에서 실시간으로 확인하기
* 모듈을 추가해서 JS 표준에 맞는지를 테스트 할수 있음
* ` $ apm install linter`
* ` $ apm install linter-js-standard`

----

# 1.6 Node.js로 간단한 웹 애플리케이션 만들기
### 1.6.1 간단한 웹 애플리케이션
* node.js 표준 API만 사용해 웹서버 개발
* P54 hello-server.js
	* 서버를 만들면서 listener를 연결한다.
	* listen() 메서드로 클라이언트의 접속을 기다린다.
----

### 1.6.2 웹 애플리케이션의 구조
* HTTP는 기본적으로 stateless 통신
---

### 1.6.3 접근 URL에 따라 응답 내용 바꾸기
* 접속할 때마다 임의의 값을 출력하는 주사위 애플리케이션
	* P58 dice-server.js
		* req.url로 URL을 추출 후 url에 따라 분기 처리
		* url을 split해서 주사위의 면체값을 구해서 화면에 표시
		* 불필요한 코드가 많은데 뒤에서 프레임워크를 사용해서 간단하게 재구성할 것임
* 제너레이터
	* 이터레이터를 반환하는 함수
	* function 키워드 뒤에 별표(*)를 사용하여 표현, yield 키워드를 사용한다.
	* P61 generator-test.js
		* 제너레이터 생성 후 next 호출하면 yield까지 실행
	* P62 fib.js
----

# 1.7 Node.js의 비동기 처리
### 1.7.1 동기 처리와 비동기 처리
* 라이브러리들이 동기와 비동기 처리 함수를 함께 제공
* P63 동기 비동기 함수
	* 동기 처리 함수는 뒤에 Sync라는 이름이 붙음
* 동기 처리와 비동기 처리의 사용성 비교
	* 비동기함수가 콜백함수작성때문에 코드는 길지만 실행효율은 높다.
* 익명 함수를 사용한 비동기 처리
	* P64 하단 readfile-cb.js
		* 익명함수를 핸들러로 바로 등록해서 사용하므로 코드가 조금 간단해 짐
* 화살표 함수를 사용한 비동기 처리
	* P65 readfile-cb2.js
		* 화살표함수로 익명함수를 대신함
----

### 1.7.2 익명 함수란?
* 이름없이 함수를 정의하고 변수 또는 상수에 함수 객체를 대입할 수 있다.
* 함수의 매개변수로 사용할 수 있다.
	* P66 anonymous2.js
		* 콜백 함수에 익명 함수를 사용
----

### 1.7.3 콜백 지옥이라는 함정
* 연속적인 입출력 처리를 비동기 처리하게 하면 "콜백 지옥"이 될 수 있다.
* 세개 파일을 연속으로 읽는 경우
	* P67 readfile-cb3.js
	> 중첩하면서 depth가 길어지고 코드를 읽기 힘들어짐
----

### 1.7.4 ECMAScript 2015에서의 콜백 지옥 해결 방법
* 콜백 지옥 해결을 위해 Promise와 Generator 기능이 추가됨
* 프로미스를 이용한 해결 방법
	* 비동기 처리로 구한 실제 값을 반환하지 않고, 일단 Promise 객체를 반환한 뒤, 처리가 완료되는 시점에 실제 값을 사용할 수 있게 하는 기능
	* P68 readfile-promise.js
	> Promise를 반환하는 함수를 준비
	> 순서대로 파일을 읽어들이는 코드 작성. 비동기 처리가 완료되면 then() 메서드 내부 코드가 실행됨
----

* 제너레이터를 이용한 해결 방법
	* 반복 처리가 가능한 이터레이터를 쉽게 구현할 때 사용하는 기능
	* 순차적으로 실행하고 싶은 비동기 처리를 제너레이터 함수로 만들고, yield를 사용해 해당 함수를 실행하는 흐름으로 코드를 작성하면 됨.
	* P69 readfile-generator.js
---

* ES2017의 async/await를 이용한 해결책
	* Node v7 이후부터 지원
	* P70 readfile-async.js
	> 비동기 처리 실행을 대기하고 싶은 함수를 호출할 때는 "await 함수명(매개변수)" 처럼 작성
----

# 1.8 바벨로 최신 자바스크립트 사용하기
### 1.8.1 바벨이란?
* 자바스크립트를 위한 트랜스파일러
	* 최신 표준의 소스코드를 이전 표준의 코드로 변환해주는 도구
* https://babeljs.io
* 바벨 설치
	```BASH
	$ npm install --global babel-cli babel-preset-es2015
	```
* 명령줄에서 바벨 실행하기
	```BASH
	$ babel arrow-test.js --presets=es2015
	```
----

### 1.8.2 바벨 전용 설정 파일 만들기
* .babelrc 파일에 옵션 설정 내용 기록
* 바벨 설정 순서
	* npm init으로 프로젝트 초기화
	* 필요한 라이브러리 설치
		* npm install --save-dev babel-cli
		* npm install --save-dev babel-preset-es2015
	* 바벨 설정 파일인 ".babelrc' 생성
		* { "presets": ]"es2015"] }
	* babel 명령어로 JS 파일을 변환
		```BASH
		$ babel bmi.js -o bmi.out.js
		$ node bmi.out.js
		```
---

### 1.8.2 package.json에 여러 가지 명령어 등록하기
* script 섹션에 컴파일 명령어 추가
	* build, start 등 추가해서 npm run buil -> npm run start
* 변경을 감시해서 자동적으로 변환하게 만들기
	```BASH
	$ babel bmi.js -w -o bmi.out.js
	```
	> -w, --watch 등 옵션을 붙이면 저장시 곧바로 변환처리
---

### 1.8.4 바벨 - 그 밖의 기능
* 디렉터리 내부의 파일 일괄 변환
	* 디렉토리 전체를 감시하게 만들수도 있음

* 프로그램 코드를 간결하게 만드는 방법
	```BASH
	$ babel src --compact=true -d dest
	```
	> 주석과 공백 등 쓸데없는 코드를 간결하게 해줌

* 디버깅에 편리한 소스 맵 출력 기능
	* 변환 후의 프로그램과 변환 전의 프로그램을 중간에서 매개해주는 기능
	```BASH
	$ babel bmi.js -o bmi.out.js --source-maps
	```
	> bmi.out.js.map 같은 소스맵을 위한 데이터 파일이 생성됨
----

# 1.9 모듈의 구조 이해하기
### 1.9.1 Node.js의 require에 대해
* 
----

# 2. 리액트 입문
## 2.1 리액트의 기본적인 사용법
### 2.1.1 리액트 시작하기
* &lt;script&gt; 태그를 사용해 리액트 라이브러리를 읽어 들이는 것
	* P92 스크립트 3개
	* 2개는 리액트 라이브러리, 1개는 JSX를 활성화 처리
----

* 간단한 프로그램 만들기
	* P93 hello-react.html
		* 리액트 라이브러리 로딩
		* id="root"를 사용해 자바스크립트에서 참조하게 함
		* JSX를 사용 - http://blog.sonim1.com/175 (JSX란?)
----

### 2.1.2 자바스크립트 내부에 HTML 작성하기
* 자바스크립트 내부에 HTML을 작성 - 역전현상
* 리액트/JSX로 DOM 변경하기
	* P95
	* 실행할때마다 다른 메시지 출력
	* HTML 태그를 함수의 매개변수로 지정할 수 도 있고 반환값으로도 지정할 수 있다.
----

## 2.2 리액트와 JSX의 관계
### 2.2.1 리액트/JSX
* JSX를 사용하면 리액트 라이브러리를 좀 더 자연스럽게 사용 가능
----

### 2.2.2 JSX 태그 내부에 변수를 넣는 방법
* 변수와 함수를 태그 내부에 사용할 수 있다.
	* &lt;tag&gt; ... {value} ... &lt;/tag&gt;
	* P98 jsx-embed.html
		* const를 사용해 상수 선언
		* HTML 태그 작성하며 변수와 상수를 내부에 넣음
* JSX 태그의 속성 값에 변수를 넣는 방법
	* 태그의 속성 값에도 변수를 넣을 수 있다.
	* &lt;tag attr={value}&gt; ... &lt;/tag&gt;
	* P99 jsx-embed2.html
	* img 요소의 src 속성에 이미지의 URL을 채워 넣음
----

* 주의사항
	* 닫는 태그와 관련된 주의 사항
		* 반드시 닫는 태그를 작성해야 함
	* JSX를 작성할 때의 주의 사항
		* HTML 태그를 인식 못할수 있음 - 소괄호로 감싸서 명시적으로 JSX의 범위를 지정해야 함
----

* JSX로 스타일 속성 지정하기
	* 객체로 지정
	* const obj = { prop1:value1, prop2:value2, prop3:value3 ... }
	  const dom = &lt;tag style={obj}&gt; ... &lt;/tag&gt;
	* P103 jsx-style.html
----

* 변수의 값은 자동으로 이스케이프 처리
----

### 2.2.3 JSX가 내부적으로 변환되는 형태
* 바벨을 통한 변환 형태
	```HTML
	const e = (
		<h1 id="greeting">
			Hello, World!
		</h1>
	)
	====>
	var e = React.createElement(
		"h1",
		{ id: "greeting" },
		"Hello, World!"
	)
	```
	> &lt;tag&gt;...&lt;/tag&gt;로 표현하면 React.createElement("tag", {}, "...") 형태로 변환됨
----

## 2.3 리액트의 인기 비결 - 가상 DOM
### 2.3.1 가상 DOM이란?
* DOM의 상태를 메모리에 저장하고, 변경 전과 변경 후의 상태를 비교한 뒤 필요한 최소한의 내용만 반영하는 기능
----

### 2.3.2 리액트로 DOM 변경하기
* DOM을 변경할때는 ReactDOM.render() 메소드를 사용하면 됨
* P109 react-clock.html
	* 시계 예제
	* 개발자 도구를 열어 DOM 일부만 변경되는 것을 확인
* 리액트는 DOM의 변경 부분을 찾아 일부분을 변경한다.
----

* 두 자리로 맞춰 출력하기
	* P111 react-clock2.html
	* 자리수를 두자리로 맞춤
----

### 2.3.3 바이너리 시계 만들기
* 시계의 숫자를 2진수로 출력하는 시계
* P113 react-binclock.html
	* ReactDOM.render의 중괄호 내부에 JSX로 만든 리액트 객체의 배열(lines)을 지정할 수도 있다.
----

## 2.4 리액트로 컴포넌트 만들기
### 2.4.1 컴포넌트란?
* 컴포넌트
	* 특정 기능을 가진 범용적인 "부품"을 나타내는 용어
	* 버튼, 텍스트박스 등
----

### 2.4.2 리액트를 사용해 컴포넌트를 만드는 방법
* JSX를 반환하는 함수를 정의하기만 하면 됨
* Greeting이라는 컴포넌트 정의해보자
	* 매개변수로 전달받은 props의 type을 &lt;h1&gt; 태그로 감싸서 출력하는 예
* 컴포넌트를 함수로 정의할때 태그를 통한 값 전달의 의미
	* &lt;Greeting type="Hello" from="Mika"&gt;
		> Greeting( {"type": "Hello", "from": "Mika"}) 과 같이 함수를 호출한것과 같은 의미
----

* 이미지와 텍스트를 출력하는 컴포넌트
	* P118 cp-imagetext.html
	* PhotoText 컴포넌트를 정의해서 사용
----

### 2.4.3 조금 더 복잡한 컴포넌트의 경우
* 조금 복잡한 타입의 컴포넌트를 정의할때
	* function 보다는 class 구문울 사용
* P120 cp-class.html
	* React.Component라는 리액트의 기본 컴포넌트 클래스를 상속받아 사용하고 있음
	* render() 메소드의 반환값이 컴포넌트의 출력값이 됨
	* 컴포넌트 사용시 태그 요소는 this.props라는 객체 자료형에 들어 있음
----

* 클래스로 이미지와 텍스트를 출력하는 컴포넌트 만들기
	* 클래스를 기반으로 컴포넌트를 정의하는 예
	* P121 cp-imagetext2.html
	> 컴포넌트 정의 - 리액트의 기본 컴포넌트인 React.Component를 상속
	> render() 메소드의 반환값이 컴포넌트의 출력 내용이 됨

----

### 2.4.4 리스트 컴포넌트 만들기
* 리스트를 출력하는 리스트 컴포넌트
	* items 속성에 리스트로 출력하고싶은 값을 쉼표로 구분해서 지정하면 이를 리스트로 출력
	* P123 list-items.html
	> items 속성을 추출 -> 쉼표로 값을 구분해서 배열로 변환
	> mmap() 메소드 사용 - 기존의 배열을 기반으로 새로운 배열을 만듦
* 컴포넌트의 장점
	* 쉽게 목록을 만들거나 재사용할 수 있다.
----

### 2.4.5 화살표 함수로 컴포넌트 정의하기
* return 구문을 생략할수 있어 굉장히 간략한 형태로 컴포넌트를 정의할 수 있음
* P126 cp-arrow.html
	* 2개의 컴포넌트 정의
	* App이라는 컴포넌트에 배치
* 애플리케이션의 작은 부품들을 정의할 때 최적의 방법이다.
----

## 2.5 본격적으로 컴포넌트 만들기
### 2.5.1 컴포넌트의 상태 관리하기
* 컴포넌트의 상태를 관리하기 위해 state 객체를 사용한다.
* state
	* 한번 값 설정 이후는 setState() 메소드를 사용해서 값을 변경해야 한다.
----

### 2.5.2 시계 컴포넌트 만들기
* 시계 컴포넌트 개발
	* 1초에 1번씩 상태가 변화하는 컴포넌트
	* P129 st-clock.html
	* 프로그램 구조
		* class를 사용해 상태를 가진 컴포넌트를 정의
		* 컴포넌트의 상태를 초기화 - 생성자
		* setInterval 내부에서 setState() 메소드 사용
----

## 2.6 이벤트의 구조와 구현
### 2.6.1 리액트로 클릭 이벤트를 구현하는 방법
* 리액트는 onClick 이벤트를 지정한다.
	* 그리고 onClick에 함수 객체를 중괄호로 감싸서 지정한다.
	```XML
	// javascript
	<div onclick="clickHandler(e)"><Click Me</div>>

	// react
	<div onClick={clickHandler}>Click Me</div>
	```
---

* P133 st-click.html
	* 레이블을 클릭하면 "안녕하세요"를 경고창에 출력하는 프로그램
	* onClick 속성으로 클릭 이벤트 지정
	* 이벤트에 화살표 함수를 지정

* 클릭했을 때 클래스의 메소드 호출하기
	* 클릭 이벤트로 클래스의 메소드를 호출하고 싶을 때
	* onClick에 메소드를 지정하면 호출될 때 this가 undefined가 됨
	* 미리 clickHandler에 this를 바인드해야 this를 인식시킬 수 있음
	* P134 st-click2.html
		* 생성자에서 this를 바인딩 처리
----

### 2.6.2 간단한 체크박스 구현하기
* P135 - st-checkbox.html
	* 체크박스를 텍스트만으로 표현하는 CBox 컴포넌트를 정의
	* 생성자에서 checked 프로퍼티를 정의
	* 화살표함수를 사용해 함수 객체를 정의하면 함수 내부의 this가 변경되지 않는다.
----

### 2.6.3 리액트로 이벤트를 만드는 방법
* (1) render() 메소드 내부에서 이벤트 핸들러 정의하기
	* 가장 쉬운 방법
* (2) 클래스의 메소드로 정의하고, this 바인드하기
	* 이벤트 핸들러가 여러 줄일때 클래스의 메소드로 빼서 정의하고 this를 바인딩처리
* (3) 클래스 메소드로 정의하고, 화살표 함수로 호출하기
	* 복잡한 코드를 화살표 함수로 리팩토링
	* this를 바인딩하지 않아도 됨
---

## 2.7 리액트 도구를 사용한 자동 빌드
* 페이지 출력시간의 단축을 위해 소스코드를 컴파일해서 사용하는 것이 일반적
### 2.7.1 리액트/JSX 컴파일 환경 만들기
* 리액트/JSX를 사용하는 경우에는 컴파일 환경을 구축하고, 미리 리액트/JSX 소스코드를 컴파일함
---

### 2.7.2 create-react-app 설치
* create-react-app 애플리케이션을 사용해서 컴파일 환경 구축한다.
	* 페이스북에서 제공하는 애플리케이션
	```BASH
	$ npm install -g create-react-app
	```
	> create-react-app 설치
* create-react-app 으로 hello 프로젝트 만들기
	```BASH
	$ create-react-app hello
	$ cd hello
	$ npm start
	```
---

* 프로그램 작성하기
	* 폴더구조
		* node_modules
		* src
			* 컴파일 이전의 소스
		* public
	* 프로그램 수정 
		* P142 App.js
----

* 오류가 있으면 알기 쉽게 출력해줘요!
* 프로그램 공개하기
	* $ npm run build
		> 공개 전용 파일을 생성한다.
		> build라는 디렉터리가 생성
* 확인은 serve로 확인
	* $ npm install -g serve
	* serve -s build
----

### 2.7.3 기본 애플리케이션 구조 확인하기
* App.js를 살펴봅시다.
	* src 디렉토리에 HTML 파일이 하나도 없다.
	* public 디렉토리의 index.html을 읽어들임
----

## 2.8 웹팩으로 리소스 파일 변환하기
### 2.8.1 웹팩이란?
* 자바스크립트 또는 CSS 등의 리소스 파일을 하나로 합쳐주거나, JSX처럼 특수한 기법으로 작성된 파일을 변환하는 도구
----

* 웹팩 설치
	```BASH
	$ npm install -g webpack
	```

* 자바스크립트 모듈 구성을 웹팩으로 해결하기
	* 두개의 js를 하나로 합치때 사용
	```BASH
	$ mkdir out
	$ webpack main.js out/test.js
	```
	> 웹팩이 필요한 모듈을 확인하고 결합해서 하나의 자바스크립트로 만들어 준다.
----

* 변환 설정 파일 만들기
	* webpack.config.js라는 설정 파일을 만든다.
	```JAVASCRIPT
	module.exports = {
		entry: './main.js',
		output: {
			filename: 'out/test.js'
		}
	};
	```
	> webpack.config.js 파일로 저장하면 명령줄에 webpack만 입력해서 변환 작업을 할 수 있다.
	* 설정 파일을 다른 이름으로 저장했을 경우는 --config 옵션으로 설정파일 지정
	> webpack --config webpack.config.js
----

### 2.8.2 웹팩으로 리액트/JSX 빌드하기
```BASH
$ mkdir src out
$ npm init --force
$ npm i --save-dev webpack
$ npm i --save-dev react react-dom
$ npm i --save-dev babel-loader babel-core
$ npm i --save-dev babel-preset-es2015 babel-preset-react
# webpack.config.js 작성 - P151
# 확장자가 .js로 끝나는 모든 파일을 babel-loader를 사용해서 변환함
```

# 3 리액트 컴포넌트 만들기
# 3.1 컴포넌트의 라이프사이클
# 3.1.1 컴포넌트의 라이프사이클
* 리액트의 컴포넌트는 생성, 파괴, 상태 변화 등의 시점에 자동으로 호출되는 메소드가 있다.
* P156 컴포넌트의 라이프사이클
----
* 컴포넌트 생성과 DOM에 마운트
	* 컴포넌트 생성 후 DOM에 마운트될때 다음 순서로 메소드가 호출된다. - 한번만
		* constructor(props)
		* componentWillMount()
		* render()
		* componentDidMount()
----

* 컴포넌트 업데이트
	* 컴포넌트의 프로퍼티가 변경되면 다음과 같은 메소드가 호출된다.
		* componentWillReceiveProps(nextProps)
			* 새로운 속성을 받았을 때 호출된다.
			* 프로퍼티 변경이 없다면 호출되지 않는다.
			* 이 메소드 내부에서 setState() 메소드를 호출해 컴포넌트의 상태를 변경할 수 있다.
				> 여기서만 setState()를 사용하는 것이 좋다. - 다른 메소드에서 부르면 재귀적이 될수 있다.
		* shouldComponentUpdate(nextProps, nextState)
		* componentWillUpdate()
		* render()
		* componentDidUpdate()
----

* DOM에서 언마운트
	* 컴포넌트가 DOM에서 언마운트될 때 다음 메소드가 호출된다.
		* componentWillUnmount()
----

* 라이프사이클 확인하기
	* P158 cycle - App.js
----

### 3.1.2 스톱워치 만들기
* START버튼을 클릭하면 카운트업 시작, 다시 버튼을 클릭하면 중지하는 예제
	* index.js - Stopwatch 컴포넌트 배치
	* constructor()에서 상태 초기화
	* componentWillMount()에서 타이머 설정
	* render()에서 화면 출력
----

## 3.2 리액트와 입력 양식
### 3.2.1 간단한 입력 양식 만들기
* 입력 전용 텍스트박스 1개와 전송 전용 버튼 1개를 포함한 입력 양식
----

### 3.2.2 숫자만 입력받는 텍스트박스 만들기
* P169 Numberform.js
	* 숫자만 입력받는 텍스트박스 컴포넌트
	* 입력한 텍스트를 e.target.value로 추출해서 숫자 이외의 문자를 제거
----

### 3.2.3 여러 개의 입력 항목을 가진 입력 양식 만들기
* 텍스트박스 3개를 가진 입력 양식
----

## 3.3 컴포넌트끼리 연동하기
### 3.3.1 컴포넌트끼리 연동하는 방법
* 리액트의 컴포넌트
	* 외부와의 창구를 만들고, 해당 창구를 통해서만 외부와 연동할 수 있다. 창구는 프로퍼티
	* 값의 변화는 이벤트를 통해서 통지
	* P176 상단 그림 - 컴포넌트끼리 연동하는 방법
----

### 3.3.2 inch와 cm 단위를 변환하는 컴포넌트 만들기
* 단위 변환 컴포넌트 프로그램
	* 부모 컴포넌트에서 자식 컴포넌트로 무언가를 전달할 때 프로퍼티를 사용
	* 하위 구성 요소의 변화를 부모 요소에 전달할 때는 이벤트를 사용
----

## 3.4 컴포넌트의 3대 요소 사용 구분
### 3.4.1 상태와 프로퍼티
* 상태
	* 컴포넌트의 상태를 나타내며 변화할 수 있는 데이터의 집합
	* 상태가 변하면 다시 렌더링하게 된다.
* 프로퍼티
	* 외부에서 컴포넌트와 소통하는 창구 역할
	* 초기값 설정과 자료형 유효성 검사 등을 사용할수도 있다.
* 이벤트 복습
	* 이벤트 이름이 카멜표기임
----

### 3.4.2 색 선택 컴포넌트 만들기
* 색 타일을 클릭하면 해당 색을 선택했다고 출력하는 예제
* 색 선택 컴포넌트인 ColorBox와 해당 컴포넌트를 사용한 프로그램
* P186 st-color.html



----
# 6.1 누구나 편집할 수 있는 위키 시스템 만들기
* 공동 편집기능을 가지는 위키 시스템 만들기
* DB로 NeDB, 파서 제너레이터로 PEG.js를 사용할 예정
----

### 6.1.1 위키 시스템
* 위키
    * 웹 브라우저로 어떤 페이지의 내용을 보거나 수정할 수 있게 하는 시스템
    * 간단하게 만들고 수정하는 기능
    * 마크다운 문법 지원
* PEG.js
    * 파서 제너레이터
    * 위키 문법의 문서를 파싱
---

### 6.1.2 위키 애플리케이션 구성하기
* P362 위키 애플리케이션의 구성
    * 클라이언트는 리액트로, 서버는 익스프레스로 구성
    * 클라이언트와 서버는 비동기 통신(AJAX)
----

### 6.1.3 프로젝트 만들기
* 프로젝트 생성 및 필요파일 설치
* 프로젝트 파일 구성 - P363
* 프로그램 실행해보기
    * 현재는 설정파일들이 없어서 실행은 안됨
----

### 6.1.4 웹 서버 프로그램 - 위키 서버
* 웹서버는 두개 API를 제공
    | URL | 메소드  |  설명  |
    |--------|--------|------|
    | /api/get/:wikiname | GET | wikiname에 해당하는 위키 데이터를 응답 |
    | /api/put/:wikiname | POST | wikiname에 위키 데이터를 저장 |
* wiki-server.js
	* P364 소스
	* DB 접속 (NeDB)
	* 웹서버 실행
	* POST 메서드로 데이터를 활용하므로 body-parser를 사용
	* API를 정의
		* 위키 데이터 응답 (조회)
		* 위키 데이터 작성 (추가/수정)
	* 일반적인 웹 접근에 대한 처리 - public 디렉토리의 정적 디렉토리로 이동
		* app.use의 기능으로 정적파일을 서비스할 경로를 바인딩한다.
----

### 6.1.5 위키 클라이언트
* 프로그램이 길어서 두개로 분리했음
	* wiki\_edit.js, wiki\_show.js
	* P368 wiki\_edit.js
	* 위키편집 컴포넌트
	* constructor에서 초기화
	* componentWillMount에서 위키 내용 읽어들이기
	* save에서 내용을 서버로 전송
	* render에서 편집화면을 출력
----

* 위키 클라이언트 - 위키 화면 출력 컴포넌트
	* WikiShow
		* 웹서버로부터 위키 내용을 읽어서 화면에 출력
		* 위키 파서 사용해서 텍스트를 HTML로 변환 후 출력
		* P370 wiki\_show.js
		* 작성된 텍스트를 리액트 객체로 변환
----

### 6.1.6 위키 파서 - PEG.js로 파서 만들기
* 위키 문법을 리액트 객체로 변환할 때 사용자 정의 위키 파서를 정의해서 활용함
* PEG.js를 사용하면 사용자 정의 파서를 쉽게 만들수 있음
* 자바스크립트를 위한 파서 제너레이터
* 위키 파서 규칙
	* 두번 줄바꿈해서 요소를 구분
	* \*를 넣으면 타이틀
	* \-가 있으면 리스트
	* \>가 있으면 인용
	* @가 있으면 링크
* 위키 문법을 PEG 문법으로 나타낸 후 build
	* P374 wiki\_parser.pegjs
	* ` $ npm run build:parser`
	* 파서 테스트
		* P375 test-parser.js 작성
		* 실행 ` $ node test-parser.js`
* PEG.js 작성 방법
	* 기본 문법
		* &lt;규칙 이름&gt; = &lt;규칙&gt;
		* &lt;규칙 이름&gt; = &lt;규칙A&gt; / &lt;규칙B&gt; / &lt;규칙C&gt;
			> 규칙 부분에는 복수개 작성 가능
        * &lt;규칙 이름&gt; = &lt;규칙&gt; { return &lt;대응되는 JS 코드&gt; }
	        > 해당 규칙에 대해 반환할 자바스크립트를 정의
	* 예측 기능
		* 값에 따라 처리를 다르게 하고 싶을 때 사용
		* !<예측 패턴> 형태로 사용
			* 예측 패턴 이외의 것과 매치될 때 해당 패턴을 사용한다는 의미
		* (![0-9])+
			* 숫자가 아닌 문자의 연속을 찾음
---

# 6.2 개인 SNS 만들기
### 6.2.1 예제 미리보기
* 사용자 인증 메커니즘과 타임라인 기능 구현
* 친구 추가 및 친구 타임라인을 출력하는 기능 구현
---

### 6.2.2 프로젝트 만들기
```BASH
$ mkdir sns
$ cd sns
$ npm init -y
$ npm i --save react react-dom react-router-dom
$ npm i --save express nedb superagent
$ npm i --save-dev webpack babel-loader babel-core
$ npm i --save-dev babel-preset-es2015 babel-preset-react

$ npm install // 프로젝트 예제파일을 이용하는 경우 사용
```

* 프로젝트 파일 목록
	* 프로젝트 구성 - P380
* 프로젝트 실행 방법
```BASH
$ npm run build
$ npm start
```
---

### 6.2.3 서버 - SNS 서버
* 구현 예정 API - P382
* 로그인 과정
	* 비밀번호는 최초 로그인시 한번만 전송
	* 이후는 인증 토큰으로 인증처리
* 서버 메인 프로그램
	* 웹서버기능, DB관련 기능 담당
	* P383 sns-server.js
        * DB 접속
        * 웹서버 실행
        * API를 정의
* 서버의 데이터베이스 모듈
	* DB에 접속하고 데이터 주고받는 처리 담당
	* P387 database.js
	* 사용자정보전용 DB와 타임라인 전용 DB 2개를 사용
---

### 6.2.4 클라이언트 - SNS 클라이언트
* 클라이언트의 메인 컴포넌트 정의
	* 리액트 라우터를 사용해 URL에 따라 출력할 컴포넌트를 분기 처리
	* P391 index.js
* 로그인 화면
	* P392
	* state 선언
	* superagent로 api 호출해서 응답결과 localStorage에 저장
	* 로그인시 생성된 토큰을 인증용으로 저장함 - 쿠키
	* localStorage는 웹 도메인에 따라 다른 영역으로 분리되어 저장 - 5MB 크기
* 사용자 목록 화면
	* P394
	* state 선언
	* superagent로 api 호출해서 사용자 정보 로드 및 저장
	* 로그인 여부를 검증해서 화면 분기 처리
* 타임라인 화면
	* P396
	* this.state.timelines.map(e => { ... })
		* map 메소드는 파라미터로 전달 된 함수를 통하여 배열 내의 각 요소를 프로세싱 하여 그 결과로 새로운 배열을 생성
