import React from 'react'
import s from './ManagerAccTypesHeader.module.scss'


const ManagerAccTypesHeader = () => {
    return (
        <div className={s.managerHeader}>
            <span>Manage Account Types</span>
            <div className={s.btnBlock}>
                <button>CLEAR ALL FILTERS (0)</button>
                <button>+ ADD REMINDER</button>
            </div>
        </div>
    )
}

export default ManagerAccTypesHeader
