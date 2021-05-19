import React from 'react'
import s from './ManagerAccTypesHeader.module.scss'

type Header = {
    text: string
    type: 'types' | 'affiliates'
}

const ManagerAccTypesHeader: React.FC<Header> = ({type, text}) => {
    return (
        <div className={s.managerHeader}>
            <span>{text}</span>
            <div className={s.btnBlock}>
                {type === 'types' && <button>CLEAR ALL FILTERS (0)</button>}
                <button>+ ADD REMINDER</button>
            </div>
        </div>
    )
}

export default ManagerAccTypesHeader
