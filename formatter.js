module.exports.valueToAPIFormat = function valueToAPIFormat(number) {

  if (!number) {
    return '0';
  }

  const numberWithDot = number.replace(',', '.');
  const numeroDecimal = Number.parseFloat(numberWithDot).toFixed(2);

  return numeroDecimal;

};
