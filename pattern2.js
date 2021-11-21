let n = 5;
let pattern2 = "";
for (let i = 1; i <= n; i++) {
  for (let j = 0; j < i; j++) {
    pattern2 = pattern2 + "*";
  }
  pattern2 = pattern2 + "\n";
}
console.log(pattern2);