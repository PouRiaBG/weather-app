import axios from 'axios'
// import config file that have api key, you can get your api can from openweathermap.org
// sample url : http://api.openweathermap.org/data/2.5/weather?units=metric&appid=API_KEY&q=CITY_NAME
import {config} from '../config'
export const fetchWeather = async (cityName : string)=>{
    const URL = `${config.key}&q=${cityName}`
    const {data} =  await axios.get(URL)
    return data
}