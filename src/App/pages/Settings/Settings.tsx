import React, {useState} from 'react'
import {NavBarType} from '../../types/settingsTypes'
import SettingNavBar from '../../components/molecules/SettingNavBar/SettingNavBar'
import s from './Settings.module.scss'


const Settings = () => {

    const [active, setActive] = useState<NavBarType>('My Profile')

    return (
        <div className={s.settings}>
            <div className={s.main}>
                <SettingNavBar onClick={setActive} active={active} />
            </div>
            <div className={s.templates}>

            </div>
        </div>
    )
}

export default Settings
