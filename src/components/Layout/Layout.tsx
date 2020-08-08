import React, {useState} from 'react'
import Grid from '@material-ui/core/Grid'
import {Theme, makeStyles,createStyles} from '@material-ui/core/styles'
import Header from '../Header/Header'
import Main from '../Main/Main'
import Footer from '../Footer/Footer'
import {fetchWeather} from '../../services/fetchWeather'
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height : "100vh",
      width : "100vw"
    },
  }),
);

const Layout = ()=>{
    const classes = useStyles()
    const [city, setCityName] = useState<string>('')
    const [weather, setData] = useState<any>({})

    const setCity = (event: any)=>{
      setCityName(event.target.value)
      console.log(city)
    }
    const searchHandler = async()=>{
        const data =  await fetchWeather(city)
        setData(data)
    }

    return(
        <Grid container direction="column"  className={classes.root}>
            <Header setCity={setCity} search={searchHandler} />
            <Main cityName={weather.name ? weather.name : city} temp={weather.main && (Math.round(weather.main.temp))}/>
            <Footer 
            country={weather.sys && (weather.sys.country)}
            humidity={weather.main && (weather.main.humidity)}
            cloud={weather.wind && (weather.wind.speed)}
            />
        </Grid>
    )
}

export default Layout