// @ts-check

const fs = require('fs');

fs.readFile('../../readme.txt', 'utf-8', (err, data) => {
  if (err) {
    throw err;
  }
  console.log(data);
});

fs.readFile('../../frontend/front.txt', 'utf-8', (err, data) => {
  if (err) {
    throw err;
  }
  console.log(data);
});
