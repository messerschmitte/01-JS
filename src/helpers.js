setTimeout(() => {
  let count = 3;
  if (count === 0) {
    clearInterval();
    count = "START";
    return count;
  }
  console.log(`${count}`);
  count -= 1;
  return count;
}, 1000);
