let n = 5;
let pattern3 = "";
for (let i = 1; i <= n; i++) {

  for (let j = 1; j <= n - i; j++) {
    pattern3 = pattern3 + " ";
  }
  for (let k = 0; k < 2 * i - 1; k++) {
    if(i === 1 || i === n) {
      pattern3 = pattern3 + "*";
    }
    else {
      if(k === 0 || k === 2 * i - 2) {
        pattern3 = pattern3 + "*";
      }
      else {
        pattern3 = pattern3 + " ";
      }
    }
  }
  pattern3 = pattern3 + "\n";
}
console.log(pattern3);