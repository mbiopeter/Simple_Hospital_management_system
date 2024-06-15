import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export const CalendarComponent = () => {
    const [value, onChange] = useState(new Date());

    return (
        <Calendar onChange={onChange} value={value} style={{ border: '1px solid #ccc', borderRadius: '5px', backgroundColor: 'transparent'}}/>
    );
};
