import React, { useState } from 'react';
import { shedule_data } from '../../data/schedule';
import Form from '../../components/Controllers/Form/Form';

const Schedule = () => {
    const [user, setUser ] = useState({
        Doctor:"",
        Time:"",
        Date:"",
        user:10
    });
    const handleOnChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }
    const handleOnSubmit = async() => {
        console.log(user);
        await fetch("http://localhost:8800/api/sheduleAppointment", {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user),               
        }).then((res) => res.json()).then((data) => {
            data.success ? alert(data.success) : alert(data.error)
        })
    }
    return (
        <Form 
            title = 'Shedule Appointment'
            button = 'Submit'
            handleOnSubmit = {handleOnSubmit}
            handleOnChange = {handleOnChange}
            data  = {shedule_data}
            user = {user}
            setUser ={setUser}
        />
    )
}

export default Schedule
