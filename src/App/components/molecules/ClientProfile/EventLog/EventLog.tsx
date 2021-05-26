import React from 'react'
import DropDawnList from '../../../atoms/Tags/DropDawnList/DropDawnList'
import Input from '../../../atoms/Tags/Input/Input'
import s from './EventLog.module.scss'
import ClientEventList from "../ClientEventList/ClientEventList";


const EventLog = () => {
    const eventTypes = [
        {value: 'Select Event Type'}, {value: 'Admin'}, {value: 'User'}
    ]

    const initiators = [
        {value: 'Select Initiator'}, {value: 'Admin'}, {value: 'User'}
    ]

    const events = [
        {
            date: '27/10/202020 13:25',
            event: 'Admin/Marco Sommer/user.login_as_user',
            detail: ['50185', '64', 'user_type', '"client"', '"Otte"', '"Guido"']
        },
        {
            date: '27/10/202020 13:25',
            event: 'Admin/Marco Sommer/user.login_as_user',
            detail: ['50185', '64', 'user_type', '"client"', '"Otte"', '"Guido"']
        },
        {
            date: '27/10/202020 13:25',
            event: 'Admin/Marco Sommer/user.login_as_user',
            detail: ['50185', '64', 'user_type', '"client"', '"Otte"', '"Guido"']
        },
        {
            date: '27/10/202020 13:25',
            event: 'Admin/Marco Sommer/user.login_as_user',
            detail: ['50185', '64', 'user_type', '"client"', '"Otte"', '"Guido"']
        },
        {
            date: '27/10/202020 13:25',
            event: 'Admin/Marco Sommer/user.login_as_user',
            detail: ['50185', '64', 'user_type', '"client"', '"Otte"', '"Guido"']
        },
        {
            date: '27/10/202020 13:25',
            event: 'Admin/Marco Sommer/user.login_as_user',
            detail: ['50185', '64', 'user_type', '"client"', '"Otte"', '"Guido"']
        },
        {
            date: '27/10/202020 13:25',
            event: 'Admin/Marco Sommer/user.login_as_user',
            detail: ['50185', '64', 'user_type', '"client"', '"Otte"', '"Guido"']
        },
        {
            date: '27/10/202020 13:25',
            event: 'Admin/Marco Sommer/user.login_as_user',
            detail: ['50185', '64', 'user_type', '"client"', '"Otte"', '"Guido"']
        },
        {
            date: '27/10/202020 13:25',
            event: 'Admin/Marco Sommer/user.login_as_user',
            detail: ['50185', '64', 'user_type', '"client"', '"Otte"', '"Guido"']
        },
        {
            date: '27/10/202020 13:25',
            event: 'Admin/Marco Sommer/user.login_as_user',
            detail: ['50185', '64', 'user_type', '"client"', '"Otte"', '"Guido"']
        },
        {
            date: '27/10/202020 13:25',
            event: 'Admin/Marco Sommer/user.login_as_user',
            detail: ['50185', '64', 'user_type', '"client"', '"Otte"', '"Guido"']
        },
        {
            date: '27/10/202020 13:25',
            event: 'Admin/Marco Sommer/user.login_as_user',
            detail: ['50185', '64', 'user_type', '"client"', '"Otte"', '"Guido"']
        },
        {
            date: '27/10/202020 13:25',
            event: 'Admin/Marco Sommer/user.login_as_user',
            detail: ['50185', '64', 'user_type', '"client"', '"Otte"', '"Guido"']
        },
        {
            date: '27/10/202020 13:25',
            event: 'Admin/Marco Sommer/user.login_as_user',
            detail: ['50185', '64', 'user_type', '"client"', '"Otte"', '"Guido"']
        },
        {
            date: '27/10/202020 13:25',
            event: 'Admin/Marco Sommer/user.login_as_user',
            detail: ['50185', '64', 'user_type', '"client"', '"Otte"', '"Guido"']
        },
        {
            date: '27/10/202020 13:25',
            event: 'Admin/Marco Sommer/user.login_as_user',
            detail: ['50185', '64', 'user_type', '"client"', '"Otte"', '"Guido"']
        },
        {
            date: '27/10/202020 13:25',
            event: 'Admin/Marco Sommer/user.login_as_user',
            detail: ['50185', '64', 'user_type', '"client"', '"Otte"', '"Guido"']
        },
    ]

    return (
        <div className={s.eventLog}>
            <div className={s.sort}>
                <DropDawnList className={s.field} label='Event Type' items={eventTypes}/>
                <DropDawnList className={s.field} label='Initiator' items={initiators}/>
                <Input className={s.field} label='Initiator ID'/>
            </div>
            <ClientEventList events={events} />
        </div>
    )
}

export default EventLog
