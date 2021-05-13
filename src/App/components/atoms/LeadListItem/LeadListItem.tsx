import React from 'react'
import Checkbox from '../Checkbox/Checkbox'
import s from './LeadListItem.module.scss'

export type Lead = {
    lead: string
    id: string
    created: string
    status: string
    country: string
    email: string
    localTime: string
    owner: string
    manager: string
    desk: string
}


const LeadListItem: React.FC<Lead> = (props) => {
    const {id, country, owner, manager, lead, localTime, desk, created, status, email} = props

    return (
        <div className={s.leadListItem}>
            <div className={s.lead}>
                <Checkbox text={lead} id={id} item/>
            </div>
            <div className={s.id}>
                {id}
            </div>
            <div className={s.created}>
                {created}
            </div>
            <div className={s.status}>
                {status}
            </div>
            <div className={s.country}>
                {country}
            </div>
            <div className={s.email}>
                {email}
            </div>
            <div className={s.localTime}>
                {localTime}
            </div>
            <div className={s.owner}>
                {owner}
            </div>
            <div className={s.manager}>
                {manager}
            </div>
            <div className={s.desk}>
                {desk}
            </div>
        </div>
    )
}

export default LeadListItem
