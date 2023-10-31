function degree(num, deg) {
  return num ** deg;
}

function expo(number, degree, cb) {
  return cb(number, degree);
}
const res = expo(5, 3, degree);
console.log(res);
