// @ts-check

// 코드 상단에는 설치한걸 가져옴

// 익스프레스 : 백엔드라이브러리
const express = require('express');
const cors = require('cors');
// const { Server } = require('http');

const PORT = 4000;

const app = express();

app.use(cors());

/* http://localhost:4000/ */
// app.use('/', (req, res) => {
//   const str = '안녕하세요. 여기는 백엔드 입니다!';
//   console.log('문자열 일 때 :', str);
//   const json = JSON.stringify(str);
//   console.log('JSON 일 때 :', json);
//   res.send(json);
// });

// localhost:4000 미들웨어 실습 1
// app.use('/', (req, res, next) => {
//   console.log('Middleware 1');
//   next();
//   console.log('next아래의 콘솔로그');
// });

// app.use((req, res, next) => {
//   console.log('Middleware 2');
//   res.send('responese');
//   next();
// });

// app.use((req, res, next) => {
//   console.log('Middleware 3');
// });

// localhost:4000 미들웨어 실습 2
// app.use('/', (req, res, next) => {
//   console.log('Middleware 2');
//   res.send('responese');
// });

// app.use('/', (req, res, next) => {
//   console.log('Middleware 1');
//   next();
// });

// 미들웨어 실습 3 (next)
// app.use('/', (req, res, next) => {
//   console.log('Middleware 1');
//   req.reqTime = new Date();
//   next();
// });

// app.use('/', (req, res, next) => {
//   console.log('Middleware 2');
//   res.send(`Requested at ${req.reqTime}`);
// });

// const fs = require('fs');
// const { idText } = require('typescript');
// 미들웨어 실습 4 (promise)
// app.use('/', async (req, res, next) => {
//   console.log('Middleware 1');
//   req.reqTime = new Date();
//   req.fileContent = await fs.promises.readFile('package.json', 'utf-8');
//   next();
// });

// app.use('/', (req, res, next) => {
//   console.log('Middleware 2');
//   console.log(req.fileContent);
//   res.send(`Requested at ${req.reqTime}`);
// });

// localhost:4000/아이디
// ---params
// app.get('/:username', (req, res) => {
//   console.log(req.params);
//   res.send(`ID번호가 ${req.params.username}인 회원정보`);
// });

// app.get('/:id/:name/:gender', (req, res) => {
//   console.log(req.params);
//   res.send(req.params);
// });

// app.get('/id/:id/name/:name/gender/:gender', (req, res) => {
//   console.log(req.params);
//   res.send(req.params);
// });

// // req.query
// app.get('/', (req, res) => {
//   console.log(req.query);
//   res.send(req.query);
// });

app.get('/:email/:password/:name/:gender', (req, res) => {
  console.log(req.params);
  res.send(req.params);
});

app.get('/', (req, res) => {
  console.log(req.query);
  res.send(req.query);
});

// 서버를 켜주는 작업
app.listen(PORT, () => {
  console.log(`서버는 현재 ${PORT}번 포트에서 실행중입니다.`);
});
