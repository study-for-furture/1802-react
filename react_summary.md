
Active File in StatusBar
Auto Close Tag
Auto Rename Tag
Close HTML/XML tag
Color Picker
Debugger for Chrome
Guides
Hasher
HTML Snippets
HTMLHint
htmltagwrap
JavaScript Snippet Pack
Live HTML Previewer
Markdown Shortcuts
markdownlint
Path Intellisense
View In Browser
reactjs code snippet
Auto-Open Markdown Preview
Markdown Shortcuts
Git History(git log)
Git Lens



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