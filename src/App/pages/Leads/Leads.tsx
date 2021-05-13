import React from 'react'
import LeadsFilter from '../../components/organizms/LeadsFilter/LeadsFilter'
import s from './Leads.module.scss'


const Leads = () => {
    return (
        <div className={s.leads}>
            <LeadsFilter/>

        </div>
    )
}

export default Leads
