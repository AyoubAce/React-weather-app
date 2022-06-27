import React, { useContext } from "react"
import { WeatherContext } from "./WeatherContext"
import { HourlyForcastChart } from "./HourlyForcastChart";

const CurrentWeather = () => {

    const {weather}= useContext(WeatherContext);



    const dateBuilder = () => {
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let dt = new Date();
        let day = days[dt.getDay()];
        let month = months[dt.getMonth()];
        return day + " " + dt.getDate() + " " + month;

    }


    if(typeof weather.main!=="undefined" && weather.main.temp>20){
        // document.body.style='background: linear-gradient(25deg, #4169e1 , #fa8072);';
        document.body.style="background:  top / cover no-repeat url('./warm.jpg');";
    }
    else if(typeof weather.main!=="undefined" && weather.main.temp<=20){

        document.body.style="background: top / cover no-repeat url('./cold.jpg'); ";
        // document.body.style='background: linear-gradient(325deg, #4169e1 60%, #fa8072 );';
    }
    else{
        document.body.style="background: linear-gradient(25deg, #4169e1 60%, #fff );";
        document.body.style="background:  top / cover no-repeat url('./warm.jpg');";
        document.body.style="background: top / cover no-repeat url('./cold.jpg'); ";
    }




    return (
        <>
            {(typeof weather.sys != "undefined") && (

                <div className="current">


                    <div className="current-header">
                        <div className="city">
                            <h1>{weather.name} <span>{weather.sys.country}</span></h1>
                           
                        </div>
                        <div className="date">{dateBuilder()}</div>

                    </div>

                    <div className="current-weather">

                        <div className="temp-img">
                            <p>{Math.round(weather.main.temp)}°</p>
                            <div >
                                <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="weather_img" />
                                <div className="clouds">
                                    {weather.weather[0].description}
                                </div>
                            </div>
                        </div>
                        <div className="current-details">
                            <div>
                                <span><span className="fas fa-wind"></span> <span className="detail-title"> Wind:</span> {Math.round(weather.wind.speed * 3.6)} km/h</span>
                            </div>
                            <div>
                                <span> <span style={{ fontWeight: "900" }}>%</span> <span className="detail-title">Humidity:</span> {weather.main.humidity} %</span>
                            </div>
                            <div>
                                <span><i className="fas fa-compress-alt"></i><span className="detail-title"> Pressure:</span> {weather.main.pressure} hPa</span>
                            </div>
                        </div>
                    </div>
                    <HourlyForcastChart />

                </div>
            ) }
        </>


    )

}
export default CurrentWeather;