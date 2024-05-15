"use client";

import React, { useState } from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


const Calendar = ({ onDateChange }) => {
    return (
        <DatePicker
            dateFormat='yyyy.MM.dd'
            shouldCloseOnSelect
            minDate={new Date('2000-01-01')}
            maxDate={new Date()}
            selected={new Date()}
            onChange={onDateChange}
        />
    );
};

export default Calendar;