import React from 'react'
import arrow from '../../../../assets/images/icons/arrow_down_color.svg'
import s from './ClientEventList.module.scss'

export type EventsList = {
    events: Array<{
        date: string
        event: string
        detail: Array<string>
    }>
}

const ClientEventList: React.FC<EventsList> = ({events}) => {
    return (
        <div className={s.clientEventList}>
            {events.map((event, i) =>
                <div className={s.event}>
                    <div className={s.eventInfo}>
                        <p>{event.event}</p>
                        <span>{event.date}</span>
                    </div>
                    <img src={arrow} alt=''/>
                </div>)}
        </div>
    )
}

export default ClientEventList
