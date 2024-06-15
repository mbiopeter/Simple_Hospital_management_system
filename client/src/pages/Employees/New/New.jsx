import React, { useState } from 'react'
import Form from '../../../components/Controllers/Form/Form'
import { Roles, employees_data } from '../../../data/employees'
import MultipleSelectChip from '../../../components/MultipleSelect/MultipleSelect'

const NewEmployee = () => {
    const [user, setUser ] = useState({
        FirstName:"",
        LastName:"",
        DateOfBirth:"",
        Gender:"",
        PhoneNumber:"",
        IdNumber:"",
        Roles:"",
    });
    const handleOnChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }
    const handleOnSubmit = async() => {
        await fetch("http://localhost:8800/api/addEmployee", {
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
            title = 'Add New Employee'
            button = 'Submit'
            handleOnSubmit = {handleOnSubmit}
            handleOnChange = {handleOnChange}
            data  = {employees_data}
            user = {user}
            setUser ={setUser}
            component = {<MultipleSelectChip 
                names ={Roles} placeholder ='Role' 
                name='Roles' 
                handleOnChange={handleOnChange} 
                user={user}
                setUser={setUser} 
                />}
        />
    )
}

export default NewEmployee
