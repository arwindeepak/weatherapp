import Searchbox from "./searchBox";
import InfoBox from "./infobox";
import { useState } from "react";
export default function Weatherapp(){
  const[weatherInfo,setweatherInfo]=useState({
    city:"Delhi",
      feelsLike:28.54,
      temp_max:24.54,
      temp_min:20.54,
      humidity:47,
      weather:"hazy",
  });
  let newWeatherInfo=(info)=>{
    setweatherInfo(info);

  }
    return(
  <div className="weatherapp">
   <Searchbox newWeatherInfo={newWeatherInfo}/>
   <InfoBox info={weatherInfo}/>
  </div>
    );
}