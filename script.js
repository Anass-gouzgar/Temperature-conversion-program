// TEMPERATURE CONVERSIO PROGRAM

const textBox = document.getElementById("textbox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelisius");
const result = document.getElementById("result");
let temp;
console.log("ggg");
function convert() {
  if (toFahrenheit.checked) {
    temp = Number(textBox.value);
    temp = (temp * 9) / 5 + 32;
    result.textContent = temp.toFixed(1) + "°F";
  } else if (toCelsius.checked) {
    temp = Number(textBox.value);
    temp = (temp - 32) * (5/9);
    result.textContent = temp.toFixed(1) + "°F";
  } else {
    result.textContent = "please select a value";
  }
}
