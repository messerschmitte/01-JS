export function countDown() {
  let count = 3;
  const myCountDown = setInterval(function () {
    if (count === 0) { 
      clearInterval(myCountDown);
      return count = 'START'
     }
    console.log(`${count}`)
    return count--;
  }, 1000);
}
