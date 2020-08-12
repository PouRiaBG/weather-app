import axios from 'axios'
// import config file that have api key, you can get your api can from openweathermap.org
import {config} from '../config'
export const fetchWeather = async (cityName : string)=>{
    const URL = `${config.key}&q=${cityName}`
    const {data} =  await axios.get(URL)
    return data
}