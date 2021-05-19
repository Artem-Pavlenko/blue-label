import React from 'react'
import ManagerAccTypesHeader from '../../molecules/ManagerAccTypesHeader/ManagerAccTypesHeader'
import ManagerAccTypesList from '../../molecules/ManagerAccTypesList/ManagerAccTypesList'
import s from './ManagerAccTypes.module.scss'
import {ManagerAccItemType} from "../../atoms/ManagerAccType/ManagerAccType";

type ManagerSettingsType = {
    settingType: 'types' | 'affiliates'
    headerText: string
    accTypes: Array<ManagerAccItemType>
}

const ManagerSettings: React.FC<ManagerSettingsType> = ({settingType, headerText, accTypes}) => {


    return (
        <div className={s.managerAccountTypes}>
            <ManagerAccTypesHeader type={settingType} text={headerText} />
            <ManagerAccTypesList accTypes={accTypes}/>
        </div>
    )
}

export default ManagerSettings
