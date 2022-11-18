// @ts-check()

/*  비동기 */
// function buyAsync(item, price, quantity) {
//   console.log(`${item}상품을 ${quantity}개 골라서 점원에게 주었습니다.`);
//   setTimeout(() => {
//     console.log('계산이 필요합니다!');
//     const allPrice = price * quantity;
//     return allPrice;
//   }, 1000);
// }

// function pay(allPrice) {
//   console.log(`${allPrice}원을 지불하였습니다`);
// }

// const totalMoney = buyAsync('포켓몬빵', 1000, 5);

// pay(totalMoney);

/*  동기 */
function buySync(item, price, quantity, callback) {
  console.log(`${item}상품을 ${quantity}개 골라서 점원에게 주었습니다.`);
  setTimeout(() => {
    console.log('계산이 필요합니다!');
    const total = price * quantity;
    callback(total);
  }, 1000);
}

// function pay(total) {
//   console.log(`${total}원을 지불하였습니다`);
// }
// buySync('포켓몬빵', 1000, 5, total);

buySync('포켓몬빵', 1000, 5, (total) => {
  console.log(`${total}원을 지불하였습니다`);
});
