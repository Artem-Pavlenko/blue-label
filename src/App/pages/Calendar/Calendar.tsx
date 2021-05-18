import React from 'react'
import CalendarFilter from '../../components/molecules/CalendarFilter/CalendarFilter'
import DatePicker from '../../components/molecules/DatePicker/DatePicker'
import s from './Calendar.module.scss'


const Calendar = () => {
    return (
        <div className={s.calendarWrapper}>
            <CalendarFilter />
            <DatePicker/>
        </div>
    )
}

export default Calendar
