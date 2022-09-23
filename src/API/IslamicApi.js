const ISLAM_API_URL = 'https://muslimsalat.p.rapidapi.com/';

const IslamicOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '5cdc8607e0msh8fedb64eb77e888p120632jsn89898708bc52',
		'X-RapidAPI-Host': 'muslimsalat.p.rapidapi.com'
	}
};


export async function IslamPrayerActualTime(props){

	try{
		const response = await fetch(ISLAM_API_URL + props + '.json', IslamicOptions);
		const data = await response.json();
		const obj = {
			"gps" : data.address,
			"date_for" : data.items[0].date_for,
			"shurooq" : data.items[0].shurooq,
			"dhuhr" : data.items[0].dhuhr,
			"asr" : data.items[0].asr,
			"maghrib" : data.items[0].maghrib,
			"isha" : data.items[0].isha,
		}
		return obj;
		
	}catch(err){
        console.error(err);
	}


}

export async function IslamPrayerTimeExtended(props){

	try{
		const response = await fetch(ISLAM_API_URL + '(location)/(times)/(date)/(daylight)/(method).json?times=daily&date='+props.fecha+'&method='+props.metodo+'&location='+props.localizacion+'', IslamicOptions);
		const data = await response.json();
		return data;
		
	}catch(err){
        console.error(err);
	}
}
