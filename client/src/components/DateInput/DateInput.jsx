import * as React from 'react';
import { useState, useEffect } from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';

export default function BasicDatePicker({ placeholder, handleOnChange, name, user, setUser }) {
    const [selectedDate, setSelectedDate] = useState(null);

    // Initialize the date value from the user object if available
    useEffect(() => {
        if (user && user[name]) {
            setSelectedDate(dayjs(user[name]));
        }
    }, [user, name]);

    const handleDateChange = (newDate) => {
        setSelectedDate(newDate);
        const formattedDate = newDate ? newDate.format('YYYY-MM-DD') : '';
        setUser((prevState) => ({
            ...prevState,
            [name]: formattedDate
        }));
        handleOnChange({ target: { name, value: formattedDate } });
    };

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DatePicker']}>
                <DatePicker
                    label={placeholder}
                    value={selectedDate}
                    onChange={handleDateChange}
                    style={{ width: '100%' }}
                />
            </DemoContainer>
        </LocalizationProvider>
    );
}
