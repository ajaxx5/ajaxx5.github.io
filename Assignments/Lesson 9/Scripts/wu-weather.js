
    var main = document.querySelector('section');
    var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.onload = function() {
    var towns = request.response;
    
    showTowns(towns);
    }
    
    function showTowns(jsonObj) {
        var towns = jsonObj['towns'];
      
    for (var i = 0; i < towns.length; i++) {
        var myArticle = document.createElement('article');
        var myH2 = document.createElement('h2');
        var myPara1 = document.createElement('p');
        var myPara2 = document.createElement('p');
        var myPara3 = document.createElement('p');
        var myPara4 = document.createElement('p');
        var myList = document.createElement('ul');

        myH2.textContent = towns[i].name;
        myPara1.textContent = 'Motto:' + towns[i].motto;
        myPara2.textContent = 'Founded:' + towns[i].yearFounded;
        myPara3.textContent = 'Population:' + towns[i].currentPopulation;
        myPara4.textContent = 'Avg Rainfall:' + towns[i].averageRainfall;
        
        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myPara4);
        myArticle.appendChild(myList);

        main.appendChild(myArticle);
    }
}
        var weatherObject= new XMLHttpRequest();

        weatherObject.open('GET','http://api.wunderground.com/api/c5c195880be05e28/conditions/q/MN/Franklin.json',true);
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

            castObject.open('GET','http://api.wunderground.com/api/c5c195880be05e28/forecast/q/MN/Franklin.json',true);
            castObject.send();
            castObject.onload = function()
        {
            var castInfo= JSON.parse(castObject.responseText);
            console.log(castInfo);
            document.getElementById('cast').innerHTML= castInfo.forecast.txt_forecast.forecastday["0"].fcttext;
        }