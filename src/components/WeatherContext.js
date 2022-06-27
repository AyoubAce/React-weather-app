import React, { useState, createContext } from "react";

export const WeatherContext = createContext();

export const WeatherProvider = (props) => {

    const [weather, setWeather] = useState({});
    const[oneCall, setOneCall]=useState({});

    return (
        <WeatherContext.Provider value={{weather, setWeather ,oneCall, setOneCall}}>
            {props.children}
        </WeatherContext.Provider>
    );

}