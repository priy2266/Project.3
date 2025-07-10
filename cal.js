let output = '';

function press(val) {
  output += val;
  document.getElementById('display').value = output;
}

function clearDisplay() {
  output = '';
  document.getElementById('display').value = '';
}

function calculate() {
  try {
    output = eval(output);
    document.getElementById('display').value = output;
  } catch (err) {
    document.getElementById('display').value = 'Error';
  }
}