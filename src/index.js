module.exports = function reverse (n) {
  if(n < 0){
      n = -n;
  }
  return Number.parseInt(n.toString().split('').reverse().join(''));
}