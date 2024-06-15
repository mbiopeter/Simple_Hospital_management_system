import React from 'react'
import './Form.css';
import Input from '../../Input/Input';

const Form = ({title,button,handleOnChange,data ,component,handleOnSubmit, user,setUser}) => {
    return (
        <div className="form">
            <div className="form-title">
                <span>{title}</span>
                <button onClick={handleOnSubmit}>{button}</button>
            </div>
            <div className="form-form">
                {data.map((item) => (
                    <Input 
                        placeholder={item.placeholder} 
                        user={user} 
                        name={item.name} 
                        handleOnChange={handleOnChange} 
                        type={item.type} 
                        setUser={setUser}
                    />
                ))} 
                {component}
            </div>
        </div>
    )
}

export default Form
