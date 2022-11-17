// @ts-check

const fs = require('fs');

fs.readFile('readme.txt', 'utf-8', (err, data) => {
  if (err) {
    throw err;
  }
  console.log('1번', data.toString);
});
fs.readFile('readme.txt', 'utf-8', (err, data) => {
  if (err) {
    throw err;
  }
  console.log('2번', data.toString);
});

fs.readFile('readme.txt', 'utf-8', (err, data) => {
  if (err) {
    throw err;
  }
  console.log('3번', data.toString);
});
fs.readFile('readme.txt', 'utf-8', (err, data) => {
  if (err) {
    throw err;
  }
  console.log('4번', data.toString);
});

//
// const str = '파일 쓰기 테스트 입니다';

// fs.writeFile('readme.txt', str, 'utf-8', (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('파일 쓰기 완료');
//   }
// });

//
// fs.readFile('readme.txt', 'utf-8', (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });
