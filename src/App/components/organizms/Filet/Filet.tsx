import React from 'react'
import ManagerBlock from '../../molecules/ManagerBlock/ManagerBlock'
import FilterLeadsBlock from '../../molecules/FilterLeadsBlock/FilterLeadsBlock'
import s from './Filet.module.scss'


export type FilterType = {
    mainTitle: string
    title?: string
    btnText: string
}

const Filet: React.FC<FilterType> = (props) => {
    return (
        <div className={s.leadsFilter}>
            <ManagerBlock {...props} />
            <FilterLeadsBlock/>
        </div>
    )
}

export default Filet
