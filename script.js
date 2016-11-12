"use strict";

$(document).ready(function() {

	// Get city and country code from ip-api
	$.get('http://ip-api.com/json', function(jsonGeoLoc) {
		let city = jsonGeoLoc.city
		let countryCode = jsonGeoLoc.countryCode

		// Get current weather with openweather API
		$.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + ',' + countryCode + '&appid=' + apiKey, function(jsonWeather) {
			console.log(jsonWeather)
			console.log(jsonWeather.weather[0].icon)
			
			let weather = jsonWeather.weather[0].description
			let icon = parseInt(jsonWeather.weather[0].icon)
			let tempKelvin = jsonWeather.main.temp
			let tempCelsius = Math.round(tempKelvin - 273.15)
			let tempFahren = Math.round(tempKelvin * 9 / 5 - 459.67)

			// Display weather info in Celsius
			$(".weather-status").html(tempCelsius + "°C <br>" + weather)

			// Toggle between Fahrenheit and Celsius on click
			$("#temp-switch").click(function() {
				
				$(".temp-switch").toggleClass("Fahrenheit")

				if ($(".temp-switch").hasClass("Fahrenheit")) {
					$(".weather-status").html(tempFahren + "°F <br>" + weather)
				}

				else {
					$(".weather-status").html(tempCelsius + "°C <br>" + weather)
				}
            })

			switch (icon) {

				case 1:
					$(".fa").addClass("fa-sun-o")
					break
				case 2:
				case 3:
				case 4:
					$(".fa").addClass("fa-cloud")
					break
				case 9:
				case 10:
					$(".fa").addClass("fa-tint")
					break
				case 11:
					$(".fa").addClass("fa-bolt")
				case 50:
					$(".fa").addClass("fa-bolt")
			}


		})

	})



})