import React from 'react' ; 
import { useEffect, useState } from 'react/cjs/react.development';
import Loader from '../loader/Loader';
import './Daily.scss';
function Daily ({text,API_KEY,newtext}){
    const [day, setDay] = useState([]);
    const [Loading, setLoading] = useState([]);


    useEffect(() => {
        setLoading(true)
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

            ).finally(()=>{
                setLoading(false)
            })
    }, [newtext])
    return(
        <div className='cont2'>
            <p>8 Day-forecast</p>
            <div className="daily">

            {
                day && (
                    <Loader isLoading={Loading}>
                        <div>
                            {day.filter((data, index) => index < 9).map((data) => (
                                <div className='weather'>
                                    {data.datetime}
                                    <img src={`https://www.weatherbit.io/static/img/icons/${data.weather.icon}.png`}></img>
                                    {data.temp}&#176;C -
                                    {data.weather.description}
                                </div>
                            ))}
                        </div>
                    </Loader>
                )
            }

                
        </div>
        </div>
    )
}

export default Daily;