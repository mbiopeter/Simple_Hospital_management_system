import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { useEffect, useState } from 'react';
import dayjs from 'dayjs';

export default function BasicTimePicker({ placeholder, handleOnChange, name, user, setUser }) {
    const [selectedTime, setSelectedTime] = useState(null);

    // Initialize the date value from the user object if available
    useEffect(() => {
        if (user && user[name]) {
            setSelectedTime(dayjs(user[name]));
        }
    }, [user, name]);

    const handleDateChange = (newDate) => {
        setSelectedTime(newDate);
        const isoDate = newDate ? newDate.toISOString() : '';
        setUser((prevState) => ({
            ...prevState,
            [name]: isoDate
        }));
        handleOnChange({ target: { name, value: isoDate } });
    };

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['TimePicker']}>
                <TimePicker 
                    label={placeholder} 
                    value={selectedTime}
                    onChange={handleDateChange}
                />
            </DemoContainer>
        </LocalizationProvider>
    );
}
