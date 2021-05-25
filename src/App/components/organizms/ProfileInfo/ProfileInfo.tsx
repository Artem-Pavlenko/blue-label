import React, {useState} from 'react'
import ProfileNavBar from '../../atoms/ProfileNavBar/ProfileNavBar'
import OverviewProfile from '../../molecules/OverviewProfile/OverviewProfile'
import s from './ProfileInfo.module.scss'

export type Navbar = 'Overview' | 'Details' | 'Notes' | 'Finance' | 'Documents' | 'Campaigns' | 'Event Log'

const ProfileInfo = () => {
    const [checkedSection, setCheckedSection] = useState<Navbar>('Overview')

    const showSectionInfo = () => {
        switch (checkedSection) {
            case "Overview":
                return <OverviewProfile />
            case "Details":
                return
            default:
                return <OverviewProfile />
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
