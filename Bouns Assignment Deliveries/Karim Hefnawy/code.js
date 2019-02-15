"use strict";


var searchButton = document.querySelector('button');
var searchCity = document.querySelector('#title');
var searchname = document.querySelector('#name');
var searchsubtitle = document.querySelector('#subtitle');
var searchpuplisher = document.querySelector('#puplisher');
var searchyear = document.querySelector('#year');
var searchcolor = document.querySelector('#color');
searchButton.addEventListener('click', searchWeather);


function searchWeather() {
        console.log(searchcolor.value);
        document.getElementById("b").innerHTML = searchCity.value;
        document.getElementById("c").innerHTML = searchname.value;
        document.getElementById("f").innerHTML = searchsubtitle.value;
        document.getElementById("d").innerHTML = searchpuplisher.value;
        document.getElementById("g").innerHTML = searchyear.value;
        document.querySelector(".sec2").style.display = "inline-block";

        switch(searchcolor.value)
        {
                case "red" :
                        document.querySelector(".sec2").style.backgroundColor="red";
                        break;
                case "blue" :
                        document.querySelector(".sec2").style.backgroundColor="blue"; 
                        break;
                case "green" :
                        document.querySelector(".sec2").style.backgroundColor="green";
                        break;
                case "yellow":
                        document.querySelector(".sec2").style.backgroundColor="yellow";
                        break;
                default:
                         document.querySelector(".sec2").style.backgroundColor="blue";
        }
    }
    