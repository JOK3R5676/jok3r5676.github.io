function init() {
  var input = document.getElementById('entryinput');
  var button = document.getElementById('entrybutton');
  var output = document.getElementById('textoutput');

  button.addEventListener('click', function() {
    var message = input.value;
    alert('Caleb Ryan: ' + message);
    output.textContent = message;
  });
}

window.addEventListener('load', init);