import React, {useState} from 'react'
import {NavBarType} from '../../types/settingsTypes'
import {ManagerAccItemType} from '../../components/atoms/ManagerAccType/ManagerAccType'
import SettingNavBar from '../../components/molecules/SettingNavBar/SettingNavBar'
import MyProfile from '../../components/molecules/MyProfile/MyProfile'
import NotificationList from '../../components/molecules/NotificationList/NotificationList'
import ManagerSettings from '../../components/organizms/ManagerAccTypes/ManagerSettings'
import s from './Settings.module.scss'


const Settings = () => {
    const types: ManagerAccItemType[] = [
        {
            name: 'Starter',
            ID: '1',
            amount: '200 000,00 €',
            networkFree: '50%',
            withdrawFree: '0%',
            created: 'a year ago'
        },
        {
            name: 'Starter',
            ID: '2',
            amount: '200 000,00 €',
            networkFree: '50%',
            withdrawFree: '0%',
            created: 'a year ago'
        },
        {
            name: 'Starter',
            ID: '3',
            amount: '200 000,00 €',
            networkFree: '50%',
            withdrawFree: '0%',
            created: 'a year ago'
        },
        {
            name: 'Starter',
            ID: '4',
            amount: '200 000,00 €',
            networkFree: '50%',
            withdrawFree: '0%',
            created: 'a year ago'
        },
        {
            name: 'Starter',
            ID: '5',
            amount: '200 000,00 €',
            networkFree: '50%',
            withdrawFree: '0%',
            created: 'a year ago'
        },
        {
            name: 'Starter',
            ID: '6',
            amount: '200 000,00 €',
            networkFree: '50%',
            withdrawFree: '0%',
            created: 'a year ago'
        },
        {
            name: 'Starter',
            ID: '7',
            amount: '200 000,00 €',
            networkFree: '50%',
            withdrawFree: '0%',
            created: 'a year ago'
        },
        {
            name: 'Starter',
            ID: '8',
            amount: '200 000,00 €',
            networkFree: '50%',
            withdrawFree: '0%',
            created: 'a year ago'
        },
    ]
    const affiliates: ManagerAccItemType[] = [
        {
            name: 'Starter',
            ID: '70',
            amount: 'e8Ro5qUTfANWs9wrJagWyZlKU....',
            networkFree: '50%',
            withdrawFree: 'Enabled',
            created: 'a year ago'
        },
        {
            name: 'Starter',
            ID: '71',
            amount: 'e8Ro5qUTfANWs9wrJagWyZlKU....',
            networkFree: '50%',
            withdrawFree: 'Enabled',
            created: 'a year ago'
        },
        {
            name: 'Starter',
            ID: '72',
            amount: 'e8Ro5qUTfANWs9wrJagWyZlKU....',
            networkFree: '50%',
            withdrawFree: 'Enabled',
            created: 'a year ago'
        },
        {
            name: 'Starter',
            ID: '73',
            amount: 'e8Ro5qUTfANWs9wrJagWyZlKU....',
            networkFree: '50%',
            withdrawFree: 'Enabled',
            created: 'a year ago'
        },
        {
            name: 'Starter',
            ID: '74',
            amount: 'e8Ro5qUTfANWs9wrJagWyZlKU....',
            networkFree: '50%',
            withdrawFree: 'Enabled',
            created: 'a year ago'
        },
        {
            name: 'Starter',
            ID: '75',
            amount: 'e8Ro5qUTfANWs9wrJagWyZlKU....',
            networkFree: '50%',
            withdrawFree: 'Enabled',
            created: 'a year ago'
        },
        {
            name: 'Starter',
            ID: '76',
            amount: 'e8Ro5qUTfANWs9wrJagWyZlKU....',
            networkFree: '50%',
            withdrawFree: 'Enabled',
            created: 'a year ago'
        },
        {
            name: 'Starter',
            ID: '77',
            amount: 'e8Ro5qUTfANWs9wrJagWyZlKU....',
            networkFree: '50%',
            withdrawFree: 'Enabled',
            created: 'a year ago'
        },
    ]

    const [active, setActive] = useState<NavBarType>('My Profile')

    const renderPage = () => {
        switch (active) {
            case "My Profile":
                return <MyProfile/>
            case "Manage Account Types":
                return <ManagerSettings accTypes={types} settingType='types' headerText='Manage Account Types'/>
            case "Manage Affiliates":
                return <ManagerSettings accTypes={affiliates} settingType='affiliates' headerText='Manage Affiliates'/>
            default :
                return null
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
