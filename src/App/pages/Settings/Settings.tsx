import React, {useState} from 'react'
import {NavBarType} from '../../types/settingsTypes'
import SettingNavBar from '../../components/molecules/SettingNavBar/SettingNavBar'
import MyProfile from '../../components/molecules/MyProfile/MyProfile'
import NotificationList from '../../components/molecules/NotificationList/NotificationList'
import s from './Settings.module.scss'


const Settings = () => {

    const [active, setActive] = useState<NavBarType>('My Profile')

    return (
        <div className={s.settings}>
            <div className={s.main}>
                <SettingNavBar onClick={setActive} active={active}/>
                {active === 'My Profile' && <MyProfile/>}
            </div>
            {
                active === 'My Profile' &&
               <NotificationList />
            }
        </div>
    )
}

export default Settings
