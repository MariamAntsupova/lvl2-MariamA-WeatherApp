import React from 'react' ; 
import { useEffect, useState } from 'react/cjs/react.development';
import './Daily.scss';
function Daily ({text,API_KEY}){
    const [day, setDay] = useState([]);


    useEffect(() => {

        fetch(`https://api.weatherbit.io/v2.0/forecast/daily?city=${text}&key=${API_KEY}`)
            .then(res => res.json())
            .then(
                (result) => {
                    if (result.data.length) {
                        setDay(result.data)
                    } else {
                        setDay()
                    }
                },

            )
    }, [text])
    return(
        <div className='cont2'>
            <p>8 Day-forecast</p>
            <div className="daily">

            {
                day && (
                        <div>
                            {day.filter((data, index) => index < 9).map((data) => (
                                <div className='weather'>
                                    {data.datetime}
                                    <img src={`https://www.weatherbit.io/static/img/icons/${data.weather.icon}.png`}></img>
                                    {data.temp}&#176;C
                                    {data.weather.description}
                                </div>
                            ))}
                        </div>
                )
            }

                
        </div>
        </div>
    )
}

export default Daily;