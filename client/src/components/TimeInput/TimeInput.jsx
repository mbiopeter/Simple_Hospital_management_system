import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { useEffect, useState } from 'react';
import dayjs from 'dayjs';

export default function BasicTimePicker({ placeholder, handleOnChange, name, user, setUser }) {
    const [selectedTime, setSelectedTime] = useState(null);

    // Initialize the time value from the user object if available
    useEffect(() => {
        if (user && user[name]) {
            setSelectedTime(dayjs(user[name], 'HH:mm'));
        }
    }, [user, name]);

    const handleTimeChange = (newTime) => {
        setSelectedTime(newTime);
        const formattedTime = newTime ? newTime.format('HH:mm') : '';
        setUser((prevState) => ({
            ...prevState,
            [name]: formattedTime
        }));
        handleOnChange({ target: { name, value: formattedTime } });
    };

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['TimePicker']}>
                <TimePicker 
                    label={placeholder} 
                    value={selectedTime}
                    onChange={handleTimeChange}
                    ampm // Display time in 12-hour format with AM/PM
                />
            </DemoContainer>
        </LocalizationProvider>
    );
}
