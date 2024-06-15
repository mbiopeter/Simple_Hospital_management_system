import React from 'react';
import Form from '../../../components/Controllers/Form/Form';
import { treatments_data } from '../../../data/treatment';
import { useState } from 'react';

const NewTreatment = () => {
    const [user, setUser ] = useState({
        PatientRegistrationNumber:"",
        Allergies:"",
        CurrentMedication:"",
        DiagnosisCode:"",
        DiagnosisDescription:"",
        DiagnosisDate:"",
        TreatmentType:"",
        TreatmentDescription:"",
        TreatmentStart:"",
        TreatmentEnd:"",
        MedicationName:"",
        Dosage:"",
        AdministrationRoute:"",
        Schedule:"",
        ProcedureName:"",
        ProcedureCode:"",
        ScheduledDate:"",
        ScheduleTime:"",
        Location:"",
    });
    const handleOnChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }
    const handleOnSubmit = async() => {
        console.log(user);
        await fetch("http://localhost:8800/api/addTreatment", {
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
            title = 'Add Treatment'
            button = 'Submit'
            handleOnSubmit = {handleOnSubmit}
            handleOnChange = {handleOnChange}
            data  = {treatments_data}
            user = {user}
            setUser ={setUser}
        />
    )
}

export default NewTreatment
