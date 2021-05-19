import React from 'react'
import ManagerAccTypesHeader from '../../molecules/ManagerAccTypesHeader/ManagerAccTypesHeader'
import ManagerAccTypesList from '../../molecules/ManagerAccTypesList/ManagerAccTypesList'
import s from './ManagerAccTypes.module.scss'


const ManagerAccTypes = () => {
    return (
        <div className={s.managerAccountTypes}>
            <ManagerAccTypesHeader/>
            <ManagerAccTypesList/>
        </div>
    )
}

export default ManagerAccTypes
