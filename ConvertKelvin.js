const kelvin = 293; //The temperature in Kelvin
const celsius = kelvin - 273; //The temperature in celsius. Which is 273 degrees less then Kelvin.
let farenheit = celsius * (9/5) + 32; //The tempurate in Farenheit. Which is  celsius * (9/5) + 32
let newton = celsius * (33/100); //The tempurate in Newton.

console.log(`Kelvin: ${kelvin}\xB0`);
console.log(`Celsius: ${celsius}\xB0`);

farenheit = Math.floor(farenheit); //rounds down the output of 'let farenheit'.

console.log(`Farenheit: ${farenheit}\xB0`);
console.log('The tempurature is ' + farenheit + '\xB0' + ' degrees Fahrenheit');

newton = Math.floor(newton); //rounds down the output of 'Newton'.

console.log(`Newton: ${newton}\xB0`);

