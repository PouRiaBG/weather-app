import axios from 'axios'

export const fetchWeather = async (cityName : string)=>{
    const URL = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=7f60868ab9d22bde3e3ea9e390b93c29`
    const {data} =  await axios.get(URL)
    return data
}