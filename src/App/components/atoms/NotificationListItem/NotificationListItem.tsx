import React from 'react'
import s from './NotificationListItem.module.scss'


const NotificationListItem: React.FC<{ text: string }> = ({text}) => {
    return (
        <div className={s.notificationListItem}>
            <span>{text}</span>
        </div>
    )
}

export default NotificationListItem
