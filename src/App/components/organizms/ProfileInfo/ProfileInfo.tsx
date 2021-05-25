import React, {useState} from 'react'
import ProfileNavBar from '../../atoms/ProfileNavBar/ProfileNavBar'
import s from './ProfileInfo.module.scss'


const ProfileInfo = () => {
    const [checkedSection, setCheckedSection] = useState('Overview')

    return (
        <div className={s.profileInfo}>
            <ProfileNavBar checked={checkedSection} onChecked={setCheckedSection}/>
        </div>
    )
}

export default ProfileInfo
