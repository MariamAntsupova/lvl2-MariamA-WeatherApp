import React from 'react' ; 
import Input from '../input/Input';
import { useState } from 'react';
import './Form.scss';
function Form (){
    const [city, setCity]=useState('Tbilisi');

    return(
        <div className="container">
            <Input city = {city} onChange ={ newCity => (setCity(newCity))} />

        </div>
    )
}

export default Form;