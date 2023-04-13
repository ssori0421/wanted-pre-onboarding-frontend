# wanted-pre-onboarding-frontend

이 레파지토리는 원티드 프리온보딩 프론트엔드 인턴십 과제를 제출하기 위해 만들어졌습니다.

## 스택
- React 
- React Router 
- styled-components
- Axios

## 폴더구조
```
wanted-pre-onboarding-frontend
├─ src
│  ├─ components
│  │  ├─ PageLayout.jsx
│  │  ├─ SmallButton.jsx
│  │  └─ TodoItem.jsx
│  ├─ hooks
│  │  ├─ useRedirect.js
│  │  └─ useRouter.js
│  ├─ page
│  │  ├─ Home.jsx
│  │  ├─ SignIn.jsx
│  │  ├─ SignUp.jsx
│  │  └─ ToDo.jsx
│  ├─ routes
│  │  └─ index.js
│  ├─ services
│  │  ├─ auth.js
│  │  ├─ axios.js
│  │  └─ todo.js
│  ├─ styles
│  │  ├─ globalStyle.js
│  │  └─ palette.js
│  ├─ util
│     ├─ localStorage.js
│     └─ regex.js  
├─ App.js
└─ index.js
```
## 구현 기능
1) 회원가입, 로그인 페이지 기능 구현
2) 회원가입, 로그인 페이지에 이메일과 비밀번호의 유효성 검사기능 구현
3) 로그인 여부에 따른 리다이렉트 처리 구현
4) 투두리스트의 작성/수정/삭제 기능 구현

## 데모 영상
| 회원가입 & 로그인 | 리다이렉트 | 투두리스트 |
|:---:|:---:|:---:|
|![ezgif com-video-to-gif](https://user-images.githubusercontent.com/115159126/231817947-71b6c099-c5f8-48c2-9f5c-7963161abc62.gif)|![ezgif com-video-to-gif (1)](https://user-images.githubusercontent.com/115159126/231818397-da9a9d8a-24aa-45a1-bde2-98dbe3aabcab.gif)|![ezgif com-video-to-gif (2)](https://user-images.githubusercontent.com/115159126/231818800-bf04ba6b-893a-4b97-a7b4-c4294ab7c8be.gif)


## 프로젝트 실행 방법
```
npm install
npm start
```


