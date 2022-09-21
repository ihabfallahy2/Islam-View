const ISLAM_API_URL = 'https://muslimsalat.p.rapidapi.com/';

const IslamicOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '5cdc8607e0msh8fedb64eb77e888p120632jsn89898708bc52',
		'X-RapidAPI-Host': 'muslimsalat.p.rapidapi.com'
	}
};


export async function IslamPrayerActualTime(props){
    fetch(ISLAM_API_URL + props + '.json', IslamicOptions)
    // fetch(API_URL + 'mula.json', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

}

export async function IslamPrayerTimeExtended(props){
	fetch(ISLAM_API_URL + '(location)/(times)/(date)/(daylight)/(method).json?times=daily&date='+props.fecha+'&method='+props.metodo+'&location='+props.localizacion+'', IslamicOptions)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
}
