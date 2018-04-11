
        var weatherObject= new XMLHttpRequest();

        weatherObject.open('GET','https://api.wunderground.com/api/c5c195880be05e28/conditions/q/IL/Springfield.json',true);
        weatherObject.send();
        weatherObject.onload = function()
        {
            var weatherInfo= JSON.parse(weatherObject.responseText);
            console.log(weatherInfo);
            document.getElementById('place').innerHTML= weatherInfo.current_observation.display_location.full;
            document.getElementById('temp').innerHTML= weatherInfo.current_observation.temp_f;
            document.getElementById('w_icon').src= weatherInfo.current_observation.icon_url;
            document.getElementById('Weathercon').innerHTML =weatherInfo.current_observation.weather;
            document.getElementById('wind').innerHTML= weatherInfo.current_observation.wind_mph;
        }

        var castObject= new XMLHttpRequest();

            castObject.open('GET','https://api.wunderground.com/api/c5c195880be05e28/forecast/q/IL/Springfield.json',true);
            castObject.send();
            castObject.onload = function()
        {
            var castInfo= JSON.parse(castObject.responseText);
            console.log(castInfo);
            document.getElementById('cast').innerHTML= castInfo.forecast.txt_forecast.forecastday["0"].fcttext;
        }