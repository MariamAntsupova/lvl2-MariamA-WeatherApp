import React from 'react' ; 
import { useEffect } from 'react';
import Daily from '../daily/Daily';
import FetchApi from '../fetch/FetchAPI';
import { useState } from 'react';
import './Input.scss';
import ModalComponent from '../modal/ModalComponent';

const API_KEY = 'a68dc28420f548a1880f2eb3acaaaa56';

function Input ({city , onChange }){
    const [text, setText]=useState(city);
    
    const { data } = FetchApi(
        `https://api.weatherbit.io/v2.0/forecast/hourly?city=${text}&key=${API_KEY}&hours=1`
    );
    console.log(data)

    const getDatas = (e) => {
        !!e && e.preventDefault();
        onChange (text);
    }

    useEffect(()=>{
        getDatas();
    },[])
    return(
        <div>
            <form onSubmit={getDatas}>
                <div className='inputval'>
                    <input className="input" onChange={e => setText(e.target.value)} />
                    <button className="todo-button" type="submit" >
                        Submit
                    </button> 
            </div>
            </form>

            <div className='cont'>
                <div className="city" key={data.id} >
                    <p>{data.timezone}</p>
                    <h1>{data.city_name} , {data.country_code}</h1>
                    <p><i className="fas fa-cloud-sun-rain"></i>22C</p>
                    <p>Feels like {data.temp}&#176;C. {data.description}</p>
                    <div className='description'>
                        <p>0.9m/s NNW    1023hPa</p>
                        <p>0.9m/s NNW    1023hPa</p>
                        <p>0.9m/s NNW    1023hPa</p>
                    </div>
                    <button className='hourly-button'>Hourly forecast</button>
                    <ModalComponent/>
                </div>
                <Daily API_KEY={API_KEY} text ={text}/>
            </div>
        </div>

    )

}
export default Input;
