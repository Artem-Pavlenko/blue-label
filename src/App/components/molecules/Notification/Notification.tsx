import React, {useState} from 'react'
import cn from 'classnames'
import s from './Notification.module.scss'


const Notification = () => {
    const [show, setShow] = useState(true)

    const notifications = [
        {text: 'Ramon Otte (Client) has logged in', time: '3 months ago'},
        {text: 'Ramon Otte (Client) has logged in', time: '3 months ago'},
        {text: 'Ramon Otte (Client) has logged in', time: '3 months ago'},
        {text: 'Ramon Otte (Client) has logged in', time: '3 months ago'},
        {text: 'Ramon Otte (Client) has logged in', time: '3 months ago'},
        {text: 'Ramon Otte (Client) has logged in', time: '3 months ago'},
    ]

    const showNotificationList = () => setShow(true)
    const hideNotificationList = () => setShow(false)

    return (
        <div className={s.notification} onMouseOver={showNotificationList} onMouseOut={hideNotificationList}>
            <div className={cn(s.bell, {[s.active]: show})}/>
            <div className={cn(s.notificationList, {[s.show]: show})}>
                <h3>NOTIFICATIONS</h3>
                {
                    notifications.map((n, i) =>
                        <div key={i} className={s.item}>
                            <span>{n.text}</span><span className={s.time}>{n.time}</span>
                        </div>)
                }
                <button>PURCHASE</button>
            </div>
        </div>
    )
}

export default Notification
