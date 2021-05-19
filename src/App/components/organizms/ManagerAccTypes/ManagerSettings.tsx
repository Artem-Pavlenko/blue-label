import React from 'react'
import ManagerAccTypesHeader from '../../molecules/ManagerAccTypesHeader/ManagerAccTypesHeader'
import ManagerAccTypesList from '../../molecules/ManagerAccTypesList/ManagerAccTypesList'
import s from './ManagerAccTypes.module.scss'

type ManagerSettingsType = {
    settingType: 'account types' | 'affiliates'
    headerText: string
}

const ManagerSettings: React.FC<ManagerSettingsType> = ({settingType, headerText}) => {
    return (
        <div className={s.managerAccountTypes}>
            <ManagerAccTypesHeader type={settingType} text={headerText} />
            <ManagerAccTypesList/>
        </div>
    )
}

export default ManagerSettings
