// @ts-check

// 코드 상단에는 설치한걸 가져옴

// 익스프레스 : 백엔드라이브러리
const express = require('express');
const cors = require('cors');

const PORT = 4000;

const app = express();

app.use(cors());

// http://localhost:4000/
app.use('/', (req, res) => {
  const str = '안녕하세요. 여기는 백엔드 입니다!';
  console.log('문자열 일 때 :', str);
  const json = JSON.stringify(str);
  console.log('JSON 일 때 :', json);
  res.send(json);
});

// 서버를 켜주는 작업
app.listen(PORT, () => {
  console.log(`서버는 현재 ${PORT}번 포트에서 실행중입니다.`);
});
