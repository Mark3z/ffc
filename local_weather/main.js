var fahrenheit = false;
var data;

// Change units from celsius to fahrenheit and round them

function changeUnits(celTemp, fahrTemp) {
    if (fahrTemp) {
        return Math.round((9 / 5 * celTemp) + 32) + "° F";
    } else {
        return Math.round(celTemp) + "° C";
    }
}

// Set variables and put on html

function setData(data, fahrenheit) {
    var location = data.name;
    var country = data.sys.country;
    var weather = data.weather[0].description;
    var temp = changeUnits(data.main.temp, fahrenheit);
    var temp_max = changeUnits(data.main.temp_max, fahrenheit);
    var temp_min = changeUnits(data.main.temp_min, fahrenheit);
    var humidity = data.main.humidity;
    var pressure = data.main.pressure;
    var icon = data.weather[0].icon;

    $("#location").html(location + ", " + country);
    $("#weather").html(weather);
    $("#temp").html(temp);
    $("#max-min").html(temp_max + " / " + temp_min + " max/min");
    $("#humidity").html("Humidity: " + humidity + "%");
    $("#pressure").html("Pressure: " + pressure + " hPa");

    var iconSource = "http://openweathermap.org/img/w/" + icon + ".png"; // display weather icon from the site
    $("#weather-icon").html('<img src="' + iconSource + '">');
    $("#change-units").html("<button class='btn btn-default'>C / F</button>"); // display button
}

// Get the user location

if (navigator.geolocation) {

    window.onload = function() {
        var currentPosition;

        function getCurrentLocation(position) {
            currentPosition = position;
            lat = currentPosition.coords.latitude;
            lon = currentPosition.coords.longitude;

            // AJAX request

            $.getJSON("http://api.openweathermap.org/data/2.5/weather?units=metric&lat=" + lat + "&lon=" + lon + "&APPID=2a78e6922a3d43237ae9227a11da3a23",
                function(weatherData) {

                    data = weatherData;

                    setData(weatherData, fahrenheit);

                    $("#change-units").click(function() {
                        fahrenheit = !fahrenheit;
                        setData(data, fahrenheit);
                    });
                });
        }

        navigator.geolocation.getCurrentPosition(getCurrentLocation);
    };
}
