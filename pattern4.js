let n = 5;
let pattern4= "";
for (let i = 1; i <= n; i++) {

  for (let j = n; j > i; j--) {
    pattern4 = pattern4 + " ";
  }

  for (let k = 0; k < i * 2 - 1; k++) {
    pattern4 = pattern4 + "*";
  }
  pattern4 = pattern4 + "\n";
}

for (let i = 1; i <= n - 1; i++) {

  for (let j = 0; j < i; j++) {
    pattern4 = pattern4 + " ";
  }

  for (let k = (n - i) * 2 - 1; k > 0; k--) {
    pattern4 = pattern4 + "*";
  }
  pattern4 = pattern4 + "\n";
}
console.log(pattern4);