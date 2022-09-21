const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '5cdc8607e0msh8fedb64eb77e888p120632jsn89898708bc52',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

export async function getWeather() {
    fetch('https://weatherapi-com.p.rapidapi.com/forecast.json?q=mula%2Fmurcia&days=6', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

}

// Weather Department

export async function WeatherDepartment() {
    // debugger;
    fetch(WEATHER_API_URL)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
}
