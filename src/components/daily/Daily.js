import React from 'react' ; 
import './Daily.scss';
function Daily (){

    return(
        <div className='cont2'>
            <p>8 Day-forecast</p>
            <div className="daily">
            {/* {(typeof data.data != 'undefined') ? (
                <ul>
                    {data.data.map((el, index) => {
                        return (
                            <li key={index}>{el.datetime}  {el.min_temp} / {el.max_temp} °C <span>{el.weather.description}</span> </li>
                        )
                    })}
                </ul>
            ) : (' ')} */}
                <div className='day'>
                    <p></p>
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