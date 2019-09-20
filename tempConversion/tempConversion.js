// Round to one decimal place
const roundToOne = function(userNum) {
  return Math.round(userNum * 10) / 10;
}

const ftoc = function(userTemp) {
  let resultCTemp = (userTemp - 32) * (5 / 9);
  return roundToOne(resultCTemp);
}

const ctof = function(userTemp) {
  let resultFTemp = userTemp * (9 / 5) + 32;
  return roundToOne(resultFTemp);
}

module.exports = {
  ftoc,
  ctof
}
