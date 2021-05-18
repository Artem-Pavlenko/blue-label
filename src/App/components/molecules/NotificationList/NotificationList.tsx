import React from 'react'
import s from './NotificationList.module.scss'
import NotificationListItem from "../../atoms/NotificationListItem/NotificationListItem";


const NotificationList = () => {
    const notifications = [
        {text: 'User Login'}, {text: 'User Online'}, {text: 'New deposit'},
        {text: 'New withdraw'}, {text: 'User in deposit page'},
    ]

    return (
        <div className={s.notificationList}>
            <h2>Notifications</h2>
            {
                notifications.map(n => <NotificationListItem key={n.text} text={n.text}/>)
            }
        </div>
    )
}

export default NotificationList
