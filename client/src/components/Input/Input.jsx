import React, { useEffect, useState } from 'react';
import './Input.css';
import BasicDatePicker from '../DateInput/DateInput';
import BasicTimePicker from '../TimeInput/TimeInput';

const Input = ({ handleOnChange, placeholder, name, type, user, setUser }) => {
    const [doctors, setDoctors] = useState([]);
    const [regNo, setRegNo] = useState("");

    useEffect(() => {
        fetch("http://localhost:8800/api/AllEmployees")
            .then((res) => res.json())
            .then((data) => {
                if (data && data.data) {
                    setDoctors(data.data);
                } else {
                    console.error("Invalid response structure", data);
                }
            })
            .catch((error) => {
                console.error("Error fetching employees:", error);
            });

        fetch("http://localhost:8800/api/maxRegNo")
            .then((res) => res.json())
            .then((data) => {
                if (data && data.data && data.data.id !== undefined) {
                    setRegNo(`THL${data.data.id}`);
                    setUser(prevUser => ({
                        ...prevUser,
                        RegistrationNumber: `THL${data.data.id}`
                    }));
                } else {
                    console.error("Invalid response structure", data);
                }
            })
            .catch((error) => {
                console.error("Error fetching RegNo:", error);
            });
    }, [setUser]);

    console.log(doctors);

    return (
        <>
            {type === "date" ? (
                <BasicDatePicker
                    placeholder={placeholder}
                    handleOnChange={handleOnChange}
                    name={name}
                    user={user}
                    setUser={setUser}
                />
            ) : type === "time" ? (
                <BasicTimePicker
                    placeholder={placeholder}
                    handleOnChange={handleOnChange}
                    name={name}
                    user={user}
                    setUser={setUser}
                />
            ) : type === 'select' ? (
                <select name={name} id={name} value={user[name]} onChange={handleOnChange}>
                    <option value="" selected>Select Doctor</option>
                    {doctors.map((item) => (
                        <option key={item.id} value={item.id}>{item.fullName}: {item.role}</option>
                    ))}
                </select>
            ) : (
                <input
                    className='input'
                    type={type}
                    placeholder={placeholder}
                    name={name}
                    value={name === 'RegistrationNumber' ? user.RegistrationNumber : user[name]}
                    onChange={handleOnChange}
                    readOnly={name === 'RegistrationNumber'}
                />
            )}
        </>
    );
}

export default Input;
