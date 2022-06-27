import React, {useState, useContext} from "react"
import { WeatherContext } from "./WeatherContext"

export default function HourlyForcast(props){

    const [weather]=useContext(WeatherContext);

    return (
        <div className="hourly-forcast">
        {(typeof weather != "undefined") && ( 
         <h1>{weather.name}</h1>
    
         )}
         </div>
    )
    
}