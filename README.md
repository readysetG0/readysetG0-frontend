![header](https://capsule-render.vercel.app/api?type=waving&color=238636&height=300&section=header&text=ReadySetGo&fontSize=70&animation=fadeIn&fontAlignY=38&desc=Frontend&descAlignY=60&fontColor=ffffff)


## Updates
- 라우팅 경로
> app 하위로
> 
> map/
>
> info /record /[id]
>
> eot /summary

- 컴포넌트 경로
> components 하위로


## Git Flow 브랜치 전략 사용 예정

- 초기 셋업 브랜치는 develop에 반영(셋업 환경은 develop에서 pull로 받을 것)

- 각 기능별로 feature 브랜치 생성(각 개인은 feature 브랜치에서 작업 진행)

- ex)FEAT#1/지도 컴포넌트 (괄호 없고 이슈번호 띄어쓰기 말고)

- 기능 개발 완료시 develope으로 Pull Request 날려서 서로 코드 리뷰 및 승인 후 develop으로 merge

- pr후에는 완료된 사람이 완료되었다고 말해주고 팀원은 pull로 develop에서 받기

- 최종 배포 올릴시에는 main브랜치 사용

### develop브랜치 생성

- PR rule 적용해놓음 (세팅참고) 

### git 커밋 컨벤션

브랜치 전략
Git-flow 브랜치 전략 발췌
1) main - 운영 브랜치
2) develop - 개발 브랜치
3) feature - 기능 개발 브랜치

[FEAT#]1/지도 컴포넌트(괄호 있고 이슈번호 띄어쓰기 말고)

### 커밋 컨벤션
- FEAT : 새로운 기능 추가(화면추가, 기능 개발)
- FIX : 버그 수정
- DEL : 사용하지 않는 파일, 코드 삭제
- DOCS : 문서(README.md 등) 수정
- STYLE : 코드 스타일 변경(white-space, formatting, missing-semi-colons 등 lint, prettier 관련 변경)
- REFACTOR : 코드 리팩토링(기능 변경x) -> 함수화 등 코드 구조 변경
- TEST : 테스트 케이스 작성 관련
- BUILD : 빌드 관련 수정(NPM, GRADLE 설정 변경)
- CHORE : 기타(gitignore 수정 등)
- REVERT : 커밋 REVERT


### 개발환경 셋업
※ npm말고 yarn으로 설치진행 해줄 것 (yarn.lock)
> @types/node --타입스크립트 기반 진행
> @types/react

#### ESlint airbnb 설정으로 리액트 관련 규칙 설정 (.eslintrc.json 확인)
> "airbnb",
    "airbnb-typescript",
    "airbnb/hooks"
- 기본적으로 Next11버젼이후부터는 Eslint가 같이 설치 진행되게 바뀜

#### Prettier 설치 진행시 Eslint 규칙 충돌 방지 위한 의존성도 같이 설치 (.prettierc 파일 생성해주기)
>   "prettier": "^3.3.3",
    "eslint-config-prettier": "^9.1.0",
    "eslint-plugin-prettier": "^5.2.1",

### 커밋 전에 실행 순서
> Prettier(코드스타일 포맷팅 진행) -> EsLint(규칙검사) -> 코드 수정 진행 -> 커밋

### Prettier 실행

> npx prettier --write 디렉토리or파일
소스의 스타일이 예쁘게 포맷팅됨

### EsLint 실행
> npm run lint 
문법 등 검사해줌

### 관련 참고 링크
[셋업 관련 velog](https://velog.io/@xmun74/Next.js-TS%EC%97%90%EC%84%9C-ESLint-Prettier-%EC%84%A4%EC%A0%95%ED%95%98%EA%B8%B0)


