function appendValue(value) {
    document.getElementById('display').value += value;
  }
 
  function clearDisplay() {
    document.getElementById('display').value = '';
  }

  function calculateResult() {
    const expression = document.getElementById('display').value;
    try {
      const result = eval(expression);
      document.getElementById('display').value = result;
    } catch {
      document.getElementById('display').value = 'Error';
    }
  }
