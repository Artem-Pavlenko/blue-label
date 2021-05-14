import React from 'react'
import Checkbox from '../Checkbox/Checkbox'
import s from './LeadsListHeader.module.scss'


const LeadsListHeader: React.FC = () => {
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
            <div className={s.affiliate}>
                Affiliate
            </div>
            <div className={s.lastNoteOn}>
                Last Note On
            </div>
            <div className={s.lastNote}>
                Last Note
            </div>
            <div className={s.lastActivity}>
                Last Activity
            </div>
            <div className={s.complianceUpdated}>
                Compliance Updated
            </div>
            <div className={s.creative}>
                Creative
            </div>
            <div className={s.source}>
                Source
            </div>
            <div className={s.callCount}>
                Call Count
            </div>
        </div>
    )
}

export default LeadsListHeader
