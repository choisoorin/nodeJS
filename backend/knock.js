function knockDoor(sec, name, callback) {
  console.log('노크를 하고 기다립니다');
  setTimeout(() => {
    callback(name, sec);
  }, 1000 * sec);
}

function callName(name, sec) {
  console.log(`${name} 이가 ${sec}초 만에 문을 열고 나왔습니다.`);
}

knockDoor(3, '영식', callName);
