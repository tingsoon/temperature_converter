var temperature = prompt("What is the temperature??");

var temperatureUnit = prompt("What is the temperature Unit??");

var temperature = parseInt(temperature)

if (temperatureUnit = "Fahrenheit") {
	temperatureFahr = temperature;
	temperatureCels = temperature - 32;
	temperatureKelv = temperature + 241.15;
} else if (temperatureUnit = "Celsius") {
	temperatureCels = temperature;
	temperatureFahr = temperature + 32;
	temperatureKelv = temperature + 273.15;
} else if (temperatureUnit = "Kelvin") {
	temperatureKelv = temperature;
	temperatureCels = temperature - 273.15;
	temperatureKelv = temperature - 241.15;
} else {
	console.log ("No such Unit!!");
}

console.log (temperatureFahr + "\xB0 F = " + temperatureCels + "\xB0C = " + temperatureKelv + "K")