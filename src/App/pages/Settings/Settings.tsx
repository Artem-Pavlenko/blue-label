import React, {useState} from 'react'
import {NavBarType} from '../../types/settingsTypes'
import SettingNavBar from '../../components/molecules/SettingNavBar/SettingNavBar'
import MyProfile from '../../components/molecules/MyProfile/MyProfile'
import NotificationList from '../../components/molecules/NotificationList/NotificationList'
import s from './Settings.module.scss'
import ManagerSettings from "../../components/organizms/ManagerAccTypes/ManagerSettings";


const Settings = () => {

    const [active, setActive] = useState<NavBarType>('My Profile')

    const renderPage = () => {
        switch (active) {
            case "My Profile":
                return <MyProfile/>
            case "Manage Account Types":
                return <ManagerSettings settingType='account types' headerText='Manage Account Types'/>
            case "Manage Affiliates":
                return <ManagerSettings settingType='affiliates' headerText='Manage Affiliates'/>
            default :
                return <MyProfile/>
        }
    }

    const renderSecondBlock = () => {
        switch (active) {
            case "My Profile":
                return <NotificationList/>
            default:
                return null
        }
    }

    return (
        <div className={s.settings}>
            <div className={s.main}>
                <SettingNavBar onClick={setActive} active={active}/>
                {renderPage()}
            </div>
            {renderSecondBlock()}
        </div>
    )
}

export default Settings
