"use strict";

$(document).ready(function () {

	// Get city and country code from ip-api
	$.get('http://ip-api.com/json', function (jsonGeoLoc) {
		let city = jsonGeoLoc.city
		let countryCode = jsonGeoLoc.countryCode

		// Get current weather with openweather API
		$.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + ',' + countryCode + '&appid=' + apiKey, function (jsonWeather) {

			let weather = jsonWeather.weather[0].description
			let icon = jsonWeather.weather[0].icon
			let tempKelvin = jsonWeather.main.temp
			let tempCelsius = Math.round(tempKelvin - 273.15)
			let tempFahren = Math.round(tempKelvin * 9 / 5 - 459.67)

			// Display weather info in Celsius & description
			$(".weather-temp").html(tempCelsius + "°C")
			$(".weather-description").html(weather)

			// Toggle between Fahrenheit and Celsius on click
			$("#temp-switch").click(function () {

				$(".temp-switch").toggleClass("Fahrenheit")

				if ($(".temp-switch").hasClass("Fahrenheit")) {
					$(".weather-temp").html(tempFahren + "°F")
				} else {
					$(".weather-temp").html(tempCelsius + "°C")
				}
			})

			// Choose icon based on openweather's icon number
			switch (icon) {

				// Day icons
				case "01d":
					$(".wi").addClass("wi-day-sunny")
					break
				case "02d":
				case "03d":
				case "04d":
					$(".wi").addClass("wi-day-cloudy")
					break
				case "09d":
					$("wi").addClass("wi-day-showers")
					break
				case "10d":
					$(".wi").addClass("wi-day-rain")
					break
				case "11d":
					$(".wi").addClass("wi-day-lightning")
					break
				case "13d":
					$(".wi").addClass("wi-day-snow")
					break
				case "50d":
					$(".wi").addClass("wi-day-fog")
					break

					// Night icons
				case "01n":
					$(".wi").addClass("wi-night-sunny")
					break
				case "02n":
				case "03n":
				case "04n":
					$(".wi").addClass("wi-night-cloudy")
					break
				case "09n":
					$("wi").addClass("wi-night-showers")
					break
				case "10n":
					$(".wi").addClass("wi-night-rain")
					break
				case "11n":
					$(".wi").addClass("wi-night-lightning")
					break
				case "13n":
					$(".wi").addClass("wi-night-snow")
					break
				case "50n":
					$(".wi").addClass("wi-night-fog")
					break
			}

			// Comments related to current weather
			switch (icon) {

				case "01d":
				case "01n":
					$(".weather-comment").html("Bright day and shiny ideas!")
					break
				case "02d":
				case "02n":
				case "03d":
				case "03n":
				case "04d":
				case "04n":
					$(".weather-comment").html("Everything's good!")
					break
				case "09d":
				case "09n":
				case "10d":
				case "10n":
					$(".weather-comment").html("You should take an umbrella!")
					break
				case "11d":
				case "11n":
					$(".weather-comment").html("Get inside, grab a blanket and a hot coffee.<br>It's going to get better.")
					break
				case "13d":
				case "13n":
					$(".weather-comment").html("Snooooow. Snow!")
					break
				case "50d":
				case "50n":
					$(".weather-comment").html("Be careful if you drive!")
					break
			}


		})

	})



})