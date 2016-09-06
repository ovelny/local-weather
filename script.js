"use strict";

$(document).ready(function() {

	$.get('http://ip-api.com/json', function(jsonGeoLoc) {
		var city = jsonGeoLoc.city;
		var countryCode = jsonGeoLoc.countryCode;

		$.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + ',' + countryCode + '&appid=' + apiKey, function(jsonWeather) {
			console.log(jsonWeather);
			
			var weather = jsonWeather.weather[0].description;
			var tempKelvin = jsonWeather.main.temp;
			var tempCelsius = Math.round(tempKelvin - 273.15);
			var tempFahren = Math.round(tempKelvin * 9 / 5 - 459.67);

			$(".weather-status").html(tempCelsius + "°C / " + weather);
		});

	});



});