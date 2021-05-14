import React from 'react'
import Filter from '../../components/organizms/Filter/Filter'
import LeadsList from '../../components/organizms/LeadsList/LeadsList'
import s from './Leads.module.scss'


const Leads: React.FC = () => {
    return (
        <div className={s.leads}>
            <Filter mainTitle='MS AWAITING' title='Smart View' btnText='SAVE SMART VIEW'/>
            <LeadsList/>
        </div>
    )
}

export default Leads
