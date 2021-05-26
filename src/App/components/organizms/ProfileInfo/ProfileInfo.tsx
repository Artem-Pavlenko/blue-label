import React, {useState} from 'react'
import ClientProfileDocuments from '../../molecules/ClientProfile/ClientProfileDocuments/ClientProfileDocuments'
import OverviewProfile from '../../molecules/ClientProfile/OverviewProfile/OverviewProfile'
import ProfileNavBar from '../../atoms/ClientProfile/ProfileNavBar/ProfileNavBar'
import Campaigns from '../../molecules/ClientProfile/Campaigns/Campaigns'
import EventLog from '../../molecules/ClientProfile/EventLog/EventLog'
import Details from '../../molecules/ClientProfile/Details/Details'
import Finance from '../../molecules/ClientProfile/Finance/Finance'
import Notes from '../../molecules/ClientProfile/Notes/Notes'
import s from './ProfileInfo.module.scss'


export type Navbar = 'Overview' | 'Details' | 'Notes' | 'Finance' | 'Documents' | 'Campaigns' | 'Event Log'

const ProfileInfo = () => {
    const [checkedSection, setCheckedSection] = useState<Navbar>('Overview')

    const showSectionInfo = () => {
        switch (checkedSection) {
            case "Overview":
                return <OverviewProfile/>
            case "Details":
                return <Details/>
            case "Notes":
                return <Notes/>
            case "Finance":
                return <Finance />
            case "Documents":
                return <ClientProfileDocuments/>
            case "Campaigns":
                return <Campaigns/>
            case "Event Log":
                return <EventLog/>
            default:
                return <OverviewProfile/>
        }
    }

    return (
        <div className={s.profileInfo}>
            <ProfileNavBar checked={checkedSection} onChecked={setCheckedSection}/>
            {showSectionInfo()}
        </div>
    )
}

export default ProfileInfo
