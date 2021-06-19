import React from 'react' ; 
import FetchApi from '../fetch/FetchAPI';
import './Daily.scss';
function Daily (API_KEY , text){
    const { data } = FetchApi(
        `https://api.weatherbit.io/v2.0/forecast/daily?&city=${text}&key=${API_KEY}&days=8`
    );
    return(
        <div className='cont2'>
            <p>8 Day-forecast</p>
            <div className="daily">
            {(typeof data.data != 'undefined') ? (
                <ul>
                    {data.data.map((el, index) => {
                        return (
                            <li key={index}>{el.datetime}  {el.min_temp} / {el.max_temp} °C <span>{el.weather.description}</span> </li>
                        )
                    })}
                </ul>
            ) : (' ')}
                <div className='day'>
                    <p>{data.city_name}</p>
                    <p>Sat, Jun 12</p>
                    <p>Sat, Jun 12</p>
                    <p>Sat, Jun 12</p>
                    <p>Sat, Jun 12</p>
                    <p>Sat, Jun 12</p>
                    <p>Sat, Jun 12</p>
                    <p>Sat, Jun 12</p>
                </div>
                <div className='celsius'>
                    <p><i className="fas fa-cloud-sun-rain"></i>22/15C</p>
                    <p><i className="fas fa-cloud-sun-rain"></i>22/15C</p>
                    <p><i className="fas fa-cloud-sun-rain"></i>22/15C</p>
                    <p><i className="fas fa-cloud-sun-rain"></i>22/15C</p>
                    <p><i className="fas fa-cloud-sun-rain"></i>22/15C</p>
                    <p><i className="fas fa-cloud-sun-rain"></i>22/15C</p>
                    <p><i className="fas fa-cloud-sun-rain"></i>22/15C</p>
                    <p><i className="fas fa-cloud-sun-rain"></i>22/15C</p>
                </div>
                <div className='desc'>
                    <p>clear sky</p>
                    <p>clear sky</p>
                    <p>clear sky</p>
                    <p>clear sky</p>
                    <p>clear sky</p>
                    <p>clear sky</p>
                    <p>clear sky</p>
                    <p>clear sky</p>
                </div>
            </div>
        </div>
    )
}

export default Daily;