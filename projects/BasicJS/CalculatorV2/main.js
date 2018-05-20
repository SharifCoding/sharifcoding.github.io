function lcd(click) {
  document.calculate.output.value += click;
}
// User input will appear in Output. Called from "onclick="lcd('x')".

function answer() {
  document.calculate.output.value =
    eval(document.calculate.output.value);
}
// OnClick equal value (onclick="answer('=')") will call this function.

function clean() {
  document.calculate.output.value = '';
}
// Clears all input shown in Output.
