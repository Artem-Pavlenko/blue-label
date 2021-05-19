import React from 'react'
import NotificationListItem from '../../atoms/NotificationListItem/NotificationListItem'
import s from './NotificationList.module.scss'


const NotificationList = () => {
    const notifications = [
        {name: 'User Login'}, {name: 'User Online'}, {name: 'New deposit'},
        {name: 'New withdraw'}, {name: 'User in deposit page'},
    ]

    return (
        <div className={s.notificationList}>
            <h2>Notifications</h2>
            {
                notifications.map(n => <NotificationListItem key={n.name} name={n.name}/>)
            }
        </div>
    )
}

export default NotificationList
