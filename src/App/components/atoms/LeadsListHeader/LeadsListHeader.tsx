import React from 'react'
import Checkbox from '../Checkbox/Checkbox'
import s from './LeadsListHeader.module.scss'


const LeadsListHeader = () => {
    return (
        <div className={s.leadsListHeader}>
            <div className={s.lead}>
                <Checkbox text='Lead' id='lead'/>
            </div>
            <div className={s.id}>
                ID
            </div>
            <div className={s.created}>
                Created
            </div>
            <div className={s.status}>
                Status
            </div>
            <div className={s.country}>
                Country
            </div>
            <div className={s.email}>
                Email
            </div>
            <div className={s.localTime}>
                Local Time
            </div>
            <div className={s.owner}>
                Owner
            </div>
            <div className={s.manager}>
                Manager
            </div>
            <div className={s.desk}>
                Desk
            </div>
        </div>
    )
}

export default LeadsListHeader
