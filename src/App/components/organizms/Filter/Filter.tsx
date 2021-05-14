import React from 'react'
import ManagerBlock from '../../molecules/ManagerBlock/ManagerBlock'
import FilterLeadsBlock from '../../molecules/FilterLeadsBlock/FilterLeadsBlock'
import s from './Filter.module.scss'


export type FilterType = {
    mainTitle: string
    title?: string
    btnText: string
}

const Filter: React.FC<FilterType> = (props) => {
    return (
        <div className={s.leadsFilter}>
            <ManagerBlock {...props} />
            <FilterLeadsBlock/>
        </div>
    )
}

export default Filter
