import React from 'react'
import LeadsListHeader from '../../atoms/LeadsListHeader/LeadsListHeader'
import LeadListItem, {Lead} from '../../atoms/LeadListItem/LeadListItem'
import Summary from '../../atoms/Summary/Summary'
import Paginator from '../../molecules/Paginator/Paginator'
import s from './LeadsList.module.scss'


const LeadsList: React.FC = () => {
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
            desk: 'Germany',
            affiliate: 'PlataMedia',
            lastNoteOn: 'a year ago',
            lastNote: 'the client had settlement...',
            lastActivity: 'a year ago',
            complianceUpdated: 'Never',
            creative: 'No Creative',
            source: '77010',
            callCount: '4'
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
            desk: 'Germany',
            affiliate: 'PlataMedia',
            lastNoteOn: 'a year ago',
            lastNote: 'na 3.1',
            lastActivity: 'a year ago',
            complianceUpdated: 'Never',
            creative: 'No Creative',
            source: '77010',
            callCount: '4'
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
            desk: 'Germany',
            affiliate: 'PlataMedia',
            lastNoteOn: 'a year ago',
            lastNote: 'has still no money YGB next...',
            lastActivity: 'a year ago',
            complianceUpdated: 'Never',
            creative: 'No Creative',
            source: '77010',
            callCount: '4'
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
            desk: 'Germany',
            affiliate: 'PlataMedia',
            lastNoteOn: 'a year ago',
            lastNote: 'has still no money YGB next...',
            lastActivity: 'a year ago',
            complianceUpdated: 'Never',
            creative: 'No Creative',
            source: '77010',
            callCount: '4'
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
            desk: 'Germany',
            affiliate: 'PlataMedia',
            lastNoteOn: 'a year ago',
            lastNote: 'client said that he is good...',
            lastActivity: 'a year ago',
            complianceUpdated: 'Never',
            creative: 'No Creative',
            source: '77010',
            callCount: '4'
        },
    ]

    return (
        <div className={s.leadsList}>
            <div className={s.list}>
                <LeadsListHeader/>
                {leadsItems.map(l => <LeadListItem key={l.id} {...l} />)}
            </div>
            <div className={s.paginatorWrapper}>
                <Summary />
                <Paginator/>
            </div>
        </div>
    )
}

export default LeadsList
