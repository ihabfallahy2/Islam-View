const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '5cdc8607e0msh8fedb64eb77e888p120632jsn89898708bc52',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

export async function getWeather() {
	
	try{
		const response = await fetch('https://weatherapi-com.p.rapidapi.com/forecast.json?q=mula&days=6', options);
		const data = await response.json();
		return data;
		
	}catch(err){
        console.error(err);
	}

}


export async function getForecast() {
	const array = new Array();
	try{
		const response = await fetch('https://weatherapi-com.p.rapidapi.com/forecast.json?q=mula&days=6', options);
		const data = await response.json();

			// array.push(data.forecast.forecastday[1].day.condition.text);

		const inf = ({
			"date" : {
				"uno" : data.forecast.forecastday[0].date,
				"dos" : data.forecast.forecastday[1].date,
				"tres" : data.forecast.forecastday[2].date,
			},
			"forecast" : {
				"uno" : data.forecast.forecastday[0].day.condition.text,
				"dos" : data.forecast.forecastday[1].day.condition.text,	
				"tres" : data.forecast.forecastday[2].day.condition.text,
			},
			"icon":{
				"uno" : data.forecast.forecastday[0].day.condition.icon,
				"dos" : data.forecast.forecastday[1].day.condition.icon,	
				"tres" : data.forecast.forecastday[2].day.condition.icon,
			}
		})

		return inf;
		
	}catch(err){
        console.error(err);
	}

}

//get local






// Weather Department

export async function WeatherDepartment() {
    // debugger;
    fetch(WEATHER_API_URL)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
}
