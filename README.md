![header](https://capsule-render.vercel.app/api?type=waving&color=238636&height=300&section=header&text=ReadySetGo&fontSize=70&animation=fadeIn&fontAlignY=38&desc=Frontend&descAlignY=60&fontColor=ffffff)


## Git Flow 브랜치 전략 사용 예정

- 초기 셋업 브랜치는 develop에 반영(셋업 환경은 develop에서 pull로 받을 것)

- 각 기능별로 feature 브랜치 생성(각 개인은 feature 브랜치에서 작업 진행)

- ex)feature/1-지도 컴포넌트

- 기능 개발 완료시 develope으로 Pull Request 날려서 서로 코드 리뷰 및 승인 후 develope으로 merge

- pr후에는 완료된 사람이 완료되었다고 말해주고 팀원은 pull로 develop에서 받기

- 최종 배포 올릴시에는 main브랜치 사용

### develop브랜치 생성

- PR rule 적용해놓음 (세팅참고) 
