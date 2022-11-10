const kelvin = 293;
const Celsius = kelvin - 273;
let Fahrenheit = Celsius * (9/5) + 32;

Fahrenheit = Math.floor(Fahrenheit);
console.log(`The temperature is >${Fahrenheit}< degrees Fahrenheit`);
