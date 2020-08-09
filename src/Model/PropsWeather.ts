export interface PropsWeatherInformation {
    country : string;
    humidity : string ;
    cloud : string ;
  }

export interface PropsWeather {
    cityName : string
    temp : number 
}

export interface PropsWeatherFunctions {
    setCity : (event: React.ChangeEvent<HTMLInputElement>) => void
    search : () =>void
  }
  
  