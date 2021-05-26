import React, {useState} from 'react'
import CheckboxSquare from '../Tags/CheckboxSquare/CheckboxSquare'
import s from './NotificationListItem.module.scss'


const NotificationListItem: React.FC<{ name: string }> = ({name}) => {
    const [checked, setChecked] = useState<boolean>(true)

    return (
        <div className={s.notificationListItem}>
            <span className={s.name}>{name}</span>
            <CheckboxSquare onChange={setChecked} checked={checked} id={name} text={'Check All'} />
        </div>
    )
}

export default NotificationListItem
