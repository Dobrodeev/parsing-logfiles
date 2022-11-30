function pow(x, n) {
  let result = x;
  for (let i = 1; i < n; i++) {
    result *= x;
  }
  return result;
}
let x = +prompt("Enter number x.");
let n = +prompt("Enter number n.");
x = Math.floor(x);
n = Math.floor(n);
if (n < 1) alert("n is too small.");
else alert(`x ^ n = ${pow(x, n)}`);