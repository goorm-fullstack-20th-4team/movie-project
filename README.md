# Movie Project

설명: 넷플릭스 클론 코딩

## 기술 스택
- Backend: Node.js + Express
- API: TMDB API
- Frontend: 추가 필요

## 서버 주소
서버는 Render에 배포, 기본 엔드포인트는 다음과 같습니다:
https://movie-project-1-a8lu.onrender.com

## 사용 가능한 엔드포인트

- 인기 영화 조회
GET /api/movies/popular
URL: https://movie-project-1-a8lu.onrender.com/api/movies/popular

- 영화 상세 정보 조회 (예시)
GET /api/movies/:id
URL 예시: https://movie-project-1-a8lu.onrender.com/api/movies/299534

## 프론트엔드에서 사용 방법

```javascript
// 인기 영화 가져오기
fetch('https://movie-project-1-a8lu.onrender.com/api/movies/popular')
  .then(res => res.json())
  .then(data => console.log(data));

// 영화 상세 정보 가져오기
fetch('https://movie-project-1-a8lu.onrender.com/api/movies/12345')
  .then(res => res.json())
  .then(data => console.log(data));

