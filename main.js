function isEvenlyDivisible(num1, num2) {
if(num1 % num2 === 0){
  return true;
}else{
  return false;
}
}

function halfSquare(num) {
let x = num ** 2 * .5 
  return x;
}

function isLong(str) {
  if(str.length >= 15){
    return true
  }else{
    return false
  }
}

function exclaim(str) {
  if(str[str.length-1] !== '!'){
    return str += '!'
  }else{
    let myStr = str.substring(0,str.indexOf('!')+1)
    return myStr
  }
}

function countWords(str) {
  let spaces = 0;
  for(let char of str){
    if(char === ' '){
      spaces += 1;
    }
  }
  return spaces + 1;
}

function containsDigit(str) {
}

function containsLowerCase() {
}

function containsUpperCase() {
}

function containsNonAlphanumeric() {
}

function containsSpace() {
}

function digits(num) {
}

function truncate() {
}

function isValidPassword() {
}

function onlyPunchy() {
}


module.exports = {
  isEvenlyDivisible,
  halfSquare,
  exclaim,
  isLong,
  containsDigit,
  containsLowerCase,
  containsUpperCase,
  containsNonAlphanumeric,
  containsSpace,
  countWords,
  digits,
  truncate,
  isValidPassword,
  onlyPunchy,
}
