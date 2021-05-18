import React from 'react'
import {NavBarType} from '../../../types/settingsTypes'
import SettingNavBarItem from "../../atoms/SettingNavBarItem/SettingNavBarItem";
import s from './SettingNavBar.module.scss'

type NavBarItem = {
    value: NavBarType
}
type SettingNavBarType = {
    onClick: (value: NavBarType) => void
    active: NavBarType
}

const SettingNavBar: React.FC<SettingNavBarType> = ({onClick, active}) => {
    const settingItems: NavBarItem[] = [
        {value: 'My Profile'},
        {value: 'Manage Account Types'},
        {value: 'Manage Affiliates'},
        {value: 'Templates Editor'}
    ]

    return (
        <div className={s.settingNavBar}>
            {
                settingItems.map(item =>
                    <SettingNavBarItem
                        key={item.value}
                        value={item.value}
                        onClick={() => onClick(item.value)}
                        active={active}
                    />)
            }
        </div>
    )
}

export default SettingNavBar
