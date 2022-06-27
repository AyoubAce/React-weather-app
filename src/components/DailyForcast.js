import React, { useContext, useEffect, useState } from 'react'
import { WeatherContext } from './WeatherContext';

const DailyForcast = (props) => {
    const { oneCall} = useContext(WeatherContext);
    const [daily, setDaily] = useState([]);

    useEffect(() => {
        setDaily(oneCall.daily)
    }, [oneCall.daily]);

    let days = daily?.map(item => day(item.dt));

    function day(unix_date) {
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const dt = new Date(unix_date * 1000);
        const day = dt.getDay();
        return days[day];
    }
    console.log(days);

    return (
        <>
            {/* <h3 className="days7">7 Days Forcast</h3> */}
            <div className="daily-forcast">


                {daily?.slice(1).map((item, index) => {
                    return <div key={index} className="card">
                        <div  className="card-temp">
                            <p className="day">{day(item.dt)}</p>
                            <img src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt="weather_img" />
                            <p className="min-max-temp">{Math.round(item.temp.max)}°/{Math.round(item.temp.min)}°</p>
                           
                        </div>
                        <div className="card-details">
                                <div>
                                    <span><span className="fas fa-wind"></span>Wind {Math.round(item.wind_speed * 3.6)}km/h</span>
                                </div>
                                <div>
                                    <span> <span style={{ fontWeight: "bold" }}>%</span>Humidity {item.humidity}%</span>
                                </div>
                                <div>
                                    <span><i className="fas fa-compress-alt"></i>Pressure {item.pressure}hPa</span>
                                </div>
                            </div>
                    </div>

                })}


            </div>
        </>
    )
}

export default DailyForcast;
