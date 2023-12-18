import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import "./SearchBox.css";


export default function Searchbox({newWeatherInfo}){
    let[city,setCity]=useState("");
    let apiUrl="https://api.openweathermap.org/data/2.5/weather";
    let apiKey="432d537800128a0ce54fa970a63ae142";
      
    let getWeatherInfo=async ()=> {
       let response= await fetch(`${apiUrl}?q=${city}&appid=${apiKey}&units=metric`);//to convert in readible
                                                                                    // clelsius form    
    
       let jsonResponse=await response.json();
       
    let result={
        city:city,
        feelsLike:jsonResponse.main.feels_like,
        temp:jsonResponse.main.temp,
        temp_max:jsonResponse.main.temp_max,
        temp_min:jsonResponse.main.temp_min,
        humidity:jsonResponse.main.humidity,
        weather:jsonResponse.weather[0].description,
    };
    
    return result;
};
    let handleInput=(event)=>{
        setCity(event.target.value)
    }
    let onButtonSubmit=async(event)=>{
        event.preventDefault();
        // console.log(city);
        setCity("");
       let info=await getWeatherInfo();
       newWeatherInfo(info);
    };

    return(
        <div className="searchBox">
            <h1>Weather App by Arwin</h1>
            <form onSubmit={onButtonSubmit}>
            <TextField id="search-city"
             label="search-city" 
             variant="outlined" 
             value={city}
             onChange={handleInput}
             required
             />
            <br></br><br></br>
            <Button  variant="contained" type="submit">Search</Button>
            </form>
        </div>
    )
}
