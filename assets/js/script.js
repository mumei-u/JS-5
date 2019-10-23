function multiplier(nbre1, nbre2){
  var firstNumber = document.getElementById('firstNumber').value;
  var secondNumber = document.getElementById('secondNumber').value;
  firstNumber = Math.trunc (firstNumber);
  alert(firstNumber * secondNumber);
}
