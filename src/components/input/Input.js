import React from 'react' ; 
import { useEffect } from 'react';
import Daily from '../daily/Daily';
import { useState } from 'react';
import './Input.scss';
import ModalComponent from '../modal/ModalComponent';


const API_KEY = 'a68dc28420f548a1880f2eb3acaaaa56';

function Input (){
    var date = new Date().getDate(); 
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear(); 
    var hours = new Date().getHours(); 
    var min = new Date().getMinutes(); 
    const [text, setText]=useState('Tbilisi');
    const [data , setData]= useState([])
    const [modalIsOpen , setModalIsOpen] = useState(false);
    console.log(data)

    const getDatas = (e) => {
        !!e && e.preventDefault();
        setText (text);
    }

    useEffect(()=>{
        fetch(`https://api.weatherbit.io/v2.0/forecast/hourly?city=${text}&key=${API_KEY}&hours=1`)
        .then(response => response.json())
        .then(data => {
            setData({
                city: data.city_name,
                code: data.country_code,
                temp: data.data[0].temp,
                description: data.data[0].weather.description,
                icon: data.data[0].weather.icon,
                uv: data.data[0].uv,
                dewpoint: data.data[0].dewpt,
                visibility: data.data[0].vis,
            })
        })
        console.log(data)
    },[text])
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

            <div className="city" key={data.id}>
                    <p>{hours}:{min} , {month}/{date}/{year}</p>
                    <h1>{data.city} , {data.code}</h1>
                    <p className='weather'><img src={`https://www.weatherbit.io/static/img/icons/${data.icon}.png`} alt='w-p' className='image'/> {data.temp}&#176;C</p>
                    <p>Feels like {data.temp}&#176;C. {data.description}</p>
                    <div className='description'>
                        <p>0.9m/s NNW    1023hPa</p>
                        <p>Humidity: {data.humidity} UV: {data.uv}</p>
                        <p>Dew Point: {data.dewpoint} Visibility: {data.visibility}</p>
                    </div>
                    <button className='hourly-button' onClick = {() => setModalIsOpen(true)}>Hourly forecast</button>
                    <ModalComponent modalIsOpen = {modalIsOpen} setModalIsOpen = {setModalIsOpen} text={text} API_KEY={API_KEY}/>
             </div>
            <Daily API_KEY={API_KEY} text ={text}/>
            </div>
        </div>
        

    )

}
export default Input;
