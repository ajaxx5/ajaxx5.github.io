function windchill() {
var l=parseInt(document.getElementById("low").innerHTML);
var h=parseInt(document.getElementById("high").innerHTML);
var s=parseInt(document.getElementById("speed").innerHTML);
var average= (h + l)/2;
var wind = 35.74 + (0.6215 * average) - (35.75 * (Math.pow(s,.16))) + (0.4275 * average * (Math.pow(s,.16))); 
var roundWind = Math.round(wind, 1);
document.getElementById("windy").innerHTML = roundWind;
}