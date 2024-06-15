import React from 'react';
import './Input.css';
import BasicDatePicker from '../DateInput/DateInput';
import BasicTimePicker from '../TimeInput/TimeInput';
import { doctors_data } from '../../data/doctors';

const Input = ({ handleOnChange, placeholder, name, type,user,setUser }) => {
    return (
        <>
            {type === "date" ? (
                <BasicDatePicker 
                placeholder={placeholder} 
                handleOnChange={handleOnChange} 
                name={name} 
                user={user}
                setUser = {setUser}
            />
            ) : type === "time" ? (
                <BasicTimePicker 
                    placeholder={placeholder} 
                    handleOnChange={handleOnChange} 
                    name={name} 
                    user={user}
                    setUser = {setUser}
                />
            ) : type === 'select' ? (
                <select name={name} id={name} value={user[name]} onChange={handleOnChange}>
                    <option value="" selected>Select Doctor</option>
                    {doctors_data.map((item) => (
                        <option value={item.id}>{item.name}</option>
                    ))}
                </select>
            ):
            (
                <input
                    className='input'
                    type={type}
                    placeholder={placeholder}
                    name={name}
                    value={user[name]}
                    onChange={handleOnChange}
                />
            )}
        </>
    );
}

export default Input;
