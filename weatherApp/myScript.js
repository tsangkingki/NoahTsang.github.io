const apiKey = "a7edbf1e1a9f1857d163e5034b7d5cd9";
        const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=";

        const searchbox = document.querySelector(".search input");
        const btn = document.querySelector(".search button");
        const weather = document.getElementById("weather");

        async function checkweather(city){
            const response =await fetch(apiUrl+city+"&appid="+ apiKey);
            console.log(response);
            var data = await response.json();
            console.log(data);
            console.log(data.name);
            document.getElementById("City").innerHTML = data.name;
            var tmp = Math.round(parseInt(data.main.temp)-273);
            console.log(tmp);
            document.getElementById("temp").innerHTML =  tmp+ "°C";
            document.getElementById("humidity").innerHTML = data.main.humidity+"%";
            document.getElementById("windspeed").innerHTML = data.wind.speed + "km/h";
            if(data.weather[0].main == "Clouds")
                weather.src="images/clouds.png";
            if(data.weather[0].main == "Clear")
                weather.src="images/clear.png";
            if(data.weather[0].main == "Snow")
                weather.src="images/snow.png";
            if(data.weather[0].main == "Rain")
                weather.src="images/rain.png";
            if(data.weather[0].main == "Mist")
                weather.src="images/mist.png";
            if(data.weather[0].main == "Drizzle")
                weather.src="images/drizzle.png";

            document.querySelector(".myInfo").style.display = "block";
        }
        btn.addEventListener("click",function(event){
            
            checkweather(searchbox.value);
            // to stop reload pages
            // var e = window.event;
            // event.defaultPrevented();

            // return false;

            // event.stopPropagation();

            event.preventDefault();

        })
        // if(btn.addEventListener){
        // btn.addEventListener("click", () =>{
        //     checkweather(searchbox.value);
        // }, false);
        // }else{
        // btn.attachEvent("on"+" click", () =>{
        //     checkweather(searchbox.value);
        // });
        // }
