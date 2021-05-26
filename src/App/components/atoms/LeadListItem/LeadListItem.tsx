import React from 'react'
import Checkbox from '../Tags/Checkbox/Checkbox'
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
    affiliate: string
    lastNoteOn: string
    lastNote: string
    lastActivity: string
    complianceUpdated: string
    creative: string
    source: string | number
    callCount: string | number
}


const LeadListItem: React.FC<Lead> = (props) => {
    const {
        id,
        country,
        owner,
        manager,
        lead,
        localTime,
        desk,
        created,
        status,
        email,
        callCount,
        affiliate,
        creative,
        lastNoteOn,
        lastNote,
        lastActivity,
        complianceUpdated,
        source
    } = props

    return (
        <div className={s.leadListItem}>
            <div className={s.lead}>
                <Checkbox params={id} text={lead} id={id} item/>
            </div>
            <div className={s.id}>
                {id}
            </div>
            <div className={s.created}>
                {created}
            </div>
            <div className={s.status}>
                <span>{status}</span>
            </div>
            <div className={s.country}>
                <div className={s.flag}/>
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
            <div className={s.affiliate}>
                {affiliate}
            </div>
            <div className={s.lastNoteOn}>
                {lastNoteOn}
            </div>
            <div className={s.lastNote}>
                {lastNote}
            </div>
            <div className={s.lastActivity}>
                {lastActivity}
            </div>
            <div className={s.complianceUpdated}>
                {complianceUpdated}
            </div>
            <div className={s.creative}>
                {creative}
            </div>
            <div className={s.source}>
                {source}
            </div>
            <div className={s.callCount}>
                {callCount}
            </div>
        </div>
    )
}

export default LeadListItem
