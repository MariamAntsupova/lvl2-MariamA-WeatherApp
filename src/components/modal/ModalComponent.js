import React from 'react' ;
import Modal from 'react-modal' ; 
import { useEffect, useState } from 'react/cjs/react.development';
import './ModalComponent.scss';
function ModalComponent ({setModalIsOpen ,modalIsOpen , text , API_KEY}){
    const [hourly, setHourly] = useState([]);

    useEffect(()=>{
        fetch(`https://api.weatherbit.io/v2.0/forecast/hourly?city=${text}&key=${API_KEY}&hours=10`)
        .then(response => response.json())
        .then(
            (data) => {
                if (data.data.length) {
                    setHourly(data.data)
                } else {
                    setHourly()
                }
            },

        )
    },[text])
    return(
        <>
            <Modal className='modal' isOpen = {modalIsOpen}>
                <div className='modalTop'>
                    <p>Sunday </p>
                    <button onClick={() => setModalIsOpen(false)} className='closeButton'> x </button>
                </div>
                <div className='weather'>
                {
                hourly && (
                        <div>
                            {hourly.filter((data, index) => index < 11).map((data) => (
                                <div className='weather'>
                                    {data.datetime}
                                    <img src={`https://www.weatherbit.io/static/img/icons/${data.weather.icon}.png`}></img>
                                    {data.temp} &#176;C 
                                    {data.weather.description}
                                </div>
                            ))}
                        </div>
                )
            }
                </div>
            </Modal>
        </>
    )
}

export default ModalComponent;