import React, { useEffect, useState } from 'react';
import Form from '../../../components/Controllers/Form/Form';
import { patients_data } from '../../../data/patients';

const NewPatient = () => {
    const [user, setUser] = useState({
        RegistrationNumber: "",
        FirstName: "",
        LastName: "",
        DateOfBirth: "",
        Gender: "",
        PhoneNumber: "",
        EmailId: "",
        Height: "",
        Weight: "",
        BloodGroup: "",
        PatientId: "",
        Address: "",
    });

    const handleOnChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const handleOnSubmit = async () => {
        await fetch("http://localhost:8800/api/addPatient", {
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
            title='Add New Patient'
            button='Submit'
            handleOnSubmit={handleOnSubmit}
            handleOnChange={handleOnChange}
            data={patients_data}
            user={user}
            setUser={setUser}
        />
    );
}

export default NewPatient;
