import React from 'react'
import Filet from '../../components/organizms/Filet/Filet'
import LeadsList from '../../components/organizms/LeadsList/LeadsList'
import s from './Leads.module.scss'


const Leads: React.FC = () => {
    return (
        <div className={s.leads}>
            <Filet mainTitle='MS AWAITING' title='Smart View' btnText='SAVE SMART VIEW'/>
            <LeadsList/>
        </div>
    )
}

export default Leads
