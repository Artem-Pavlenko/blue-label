import React from 'react'
import ManagerBlock from '../../molecules/ManagerBlock/ManagerBlock'
import FilterLeadsBlock from '../../molecules/FilterLeadsBlock/FilterLeadsBlock'
import s from './LeadsFilter.module.scss'


const LeadsFilter = () => {
    return (
        <div className={s.leadsFilter}>
            <ManagerBlock />
            <FilterLeadsBlock />
        </div>
    )
}

export default LeadsFilter
