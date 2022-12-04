import * as CONF from "../CONFIGMAP/config-details.json"

const ISLAM_CHAPTERS_API_URL = CONF.QURAN.en;
const ISLAM_CHAPTER_API_URL = CONF.QURAN.chapter;

export async function getQuran(){

	try{
		const response = await fetch(ISLAM_CHAPTERS_API_URL.endpoint);
		const data = await response.json();
		return data;

	}catch(err){
        console.error(err);
	}

}

export async function getChapter(props){
	try{
		let url = ISLAM_CHAPTER_API_URL.replace("{}" , props);
		const response = await fetch(url);
		const data = await response.json();
		return data.verses;

	}catch(err){
        console.error(err);
	}
}

export async function getChapterInfo(props){
	try{
		let url = ISLAM_CHAPTER_API_URL.replace("{}" , props);
		const response = await fetch(url);
		const data = await response.json();
		return data;

	}catch(err){
        console.error(err);
	}
}