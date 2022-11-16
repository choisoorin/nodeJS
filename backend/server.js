// @ts-check

const http = require('http');

// 프론트엔드
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.end('Hello, backend!');
});

// 백엔드 http://localhost:4000 //127.0.0.1:4000
const PORT = 4000;
server.listen(PORT, () => {
  console.log(`서버는 현재 ${PORT}번 포트에서 실행중입니다.`);
});
