import React from 'react'
import LeadsListHeader from '../../atoms/LeadsListHeader/LeadsListHeader'
import s from './LeadsList.module.scss'
import LeadListItem, {Lead} from "../../atoms/LeadListItem/LeadListItem";
import Paginator from "../../molecules/Paginator/Paginator";


const LeadsList = () => {
    const leadsItems: Lead[] = [
        {
            lead: 'Uwe Seibold',
            id: '56027',
            created: 'a year ago',
            status: 'Callback',
            country: 'Germany',
            email: 'germany@t-online.de',
            localTime: '10:48',
            owner: 'Marco Sommer',
            manager: 'Noah Kaufmann',
            desk: 'Germany'
        },
        {
            lead: 'Uwe Seibold',
            id: '56026',
            created: 'a year ago',
            status: 'NO potential',
            country: 'Germany',
            email: 'germany@t-online.de',
            localTime: '10:48',
            owner: 'Marco Sommer',
            manager: 'Noah Kaufmann',
            desk: 'Germany'
        },
        {
            lead: 'Uwe Seibold',
            id: '56025',
            created: 'a year ago',
            status: 'Callback',
            country: 'Germany',
            email: 'germany@t-online.de',
            localTime: '10:48',
            owner: 'Marco Sommer',
            manager: 'Noah Kaufmann',
            desk: 'Germany'
        },
        {
            lead: 'Uwe Seibold',
            id: '56024',
            created: 'a year ago',
            status: 'Callback',
            country: 'Germany',
            email: 'germany@t-online.de',
            localTime: '10:48',
            owner: 'Marco Sommer',
            manager: 'Noah Kaufmann',
            desk: 'Germany'
        },
        {
            lead: 'Uwe Seibold',
            id: '56023',
            created: 'a year ago',
            status: 'NO potential',
            country: 'Germany',
            email: 'germany@t-online.de',
            localTime: '10:48',
            owner: 'Marco Sommer',
            manager: 'Noah Kaufmann',
            desk: 'Germany'
        },
    ]

    return (
        <div className={s.leadsList}>
            <LeadsListHeader/>
            <div className={s.list}>
                {leadsItems.map(l => <LeadListItem key={l.id} {...l} />)}
            </div>
            <div className={s.paginatorWrapper}>
                <div className={s.summary}>
                    <p>Summary</p>
                    <div className={s.total}>
                        <span className={s.title}>Total</span>
                        <span className={s.count}>0</span>
                    </div>
                    <div className={s.selected}>
                        <span className={s.title}>Selected</span>
                        <span className={s.count}>0</span>
                    </div>
                </div>
                <Paginator/>
            </div>
        </div>
    )
}

export default LeadsList
