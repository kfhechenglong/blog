async function test() {
  console.log(1);
  await new Promise((resolve, reject) => {
    console.log('a')
    resolve();
  });
  console.log(2);
}
setTimeout(() => {
  console.log('b')
})
test();
console.log(3);

Promise.resolve()
  .then(() => console.log(4))
  .then(() => console.log(5))
  .then(() => console.log(6))
  .then(() => console.log(7));


