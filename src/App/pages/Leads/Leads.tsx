import React from 'react'
import LeadsFilter from '../../components/organizms/LeadsFilter/LeadsFilter'
import LeadsList from '../../components/organizms/LeadsList/LeadsList'
import s from './Leads.module.scss'


const Leads: React.FC = () => {
    return (
        <div className={s.leads}>
            <LeadsFilter/>
            <LeadsList/>
        </div>
    )
}

export default Leads
