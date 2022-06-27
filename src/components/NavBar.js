import React, { useState, useContext } from 'react'
import { WeatherContext } from './WeatherContext';

const NavBar = () => {
    const api = {
        API_key: process.env.REACT_APP_OPENWEATHER_KEY,
        base: "api.openweathermap.org/data/2.5/"
    }
    const [city, setCity] = useState('paris');
    const {weather,setWeather,setOneCall} = useContext(WeatherContext);
    const[navi, setNavi]=useState(true);



    const fetchData = async (evt) => {
        if (evt.key === "Enter") {
            await fetch(`https://${api.base}weather?q=${city}&units=metric&appid=${api.API_key}`)
                .then(res => res.json())
                .then(result => {
                    setWeather(result);
                    if(result.cod !== "404"){
                        const { coord } = result;
                         fetch(`https://${api.base}onecall?lat=${coord.lat}&lon=${coord.lon}&units=metric&exclude=minutely&appid=${api.API_key}`)
                        .then(res=>res.json())
                        .then(async result=> {
                            await setOneCall(result);
                           
                        });
                        
                    }
                    }
                   
                    
                )
                setNavi(false);
        }
        
    }
   console.log(weather);

    return (
        <nav className={navi ? "navbar nav-push" : "navbar"}>
            <ul>
                <li><h1>Weather<span>ia</span></h1></li>
                <li><input type="text" placeholder="Search City..." onChange={e => { setCity(e.target.value) }} onKeyDown={fetchData} ></input></li>
            </ul>
        </nav>
    )
}

export default NavBar
