"use strict";

$(document).ready(function() {

	// Get city and country code from ip-api
	$.get('http://ip-api.com/json', function(jsonGeoLoc) {
		let city = jsonGeoLoc.city;
		let countryCode = jsonGeoLoc.countryCode;

		// Get current weather with openweather API
		$.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + ',' + countryCode + '&appid=' + apiKey, function(jsonWeather) {
			console.log(jsonWeather);
			
			let weather = jsonWeather.weather[0].description;
			let tempKelvin = jsonWeather.main.temp;
			let tempCelsius = Math.round(tempKelvin - 273.15);
			let tempFahren = Math.round(tempKelvin * 9 / 5 - 459.67);

			// Display weather info in Celsius
			$(".weather-status").html(tempCelsius + "°C <br>" + weather);

			// Toggle between Fahrenheit and Celsius on click
			$("button").click(function() {
				
				$("button").toggleClass("Fahrenheit");

				if ($("button").hasClass("Fahrenheit")) {
                    $(".weather-status").html(tempFahren + "°F <br>" + weather);
				}

				else {
					$(".weather-status").html(tempCelsius + "°C <br>" + weather);
				}
            });


		});

	});



});