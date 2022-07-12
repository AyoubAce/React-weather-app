
import React, { useContext, useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { WeatherContext} from "./WeatherContext";


export const HourlyForcastChart = () => {
    const {oneCall} = useContext(WeatherContext);
    const [items,setItems]= useState([]);
    let temps= items?.map(item => {return Math.round(item.temp)});
    //here it was giving time every 3 hours... without writing %3 !!!
    let time=items?.map((item,index)=>{
        return index%3===0 && date(item.dt) 
    })
    let times= time?.filter( (x,index)=>{return index%3===0}  )
   
    useEffect(() => {
        setItems(oneCall.hourly);
    
    }, [oneCall.hourly])
 

 
   
    function date(unix_date) {
        let dt = new Date(unix_date * 1000);
        const hours = "0" + dt.getHours();
        const min = "0" + dt.getMinutes();
        return hours.substring(-2) + ":" + min.substring(-2) ;
    } 

    const data = {
        labels: times,
        datasets: [{
            label: "Hourly Forcast",
            data: temps,
            fill: false,
            backgroundColor: '#4169e1',
            borderColor: '#333',
            borderJoinStyle:"round",
            color:"#fff"
        },
        ],
    };
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            gridLines:{
                display:false,
            },
            yAxes: [
                {
                    ticks: {
                        beginAtZero: false,
                        backdropColor:"#fff",
                    },
                },
            ],
        },
    };

    return (
        <div className="chart-hourly">
            {(typeof oneCall != 'undefined') &&

                    <Line data={data} options={options}  className="chart">
                    </Line>
                
            }
        </div>
    )

}
