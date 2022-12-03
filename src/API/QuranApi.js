import * as CONF from "../CONFIGMAP/config-details.json"

const ISLAM_API_URL = CONF.QURAN.en;

export async function getQuran(){

	try{
		const response = await fetch(ISLAM_API_URL.endpoint);
		const data = await response.json();
		return data;

	}catch(err){
        console.error(err);
	}

}

export async function getChapter(props){
	try{
		const response = await fetch(props);
		const data = await response.json();
		return data.verses;

	}catch(err){
        console.error(err);
	}
}