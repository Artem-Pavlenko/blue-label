import React from 'react'
import {Navbar} from '../../../organizms/ProfileInfo/ProfileInfo'
import cn from 'classnames'
import s from './ProfileNavBar.module.scss'

type ProfileNavBarType = {
    checked: string
    onChecked: (section: Navbar) => void
}

const ProfileNavBar: React.FC<ProfileNavBarType> = ({checked, onChecked}) => {

    const sections: Navbar[] = ['Overview', 'Details', 'Notes', 'Finance', 'Documents', 'Campaigns', 'Event Log']

    const onChangeCheckedSection = (section: Navbar) => onChecked(section)

    return (
        <div className={s.profileNavbar}>
            {
                sections.map(section =>
                    <span onClick={() => onChangeCheckedSection(section)}
                          className={cn({[s.current]: section === checked})} key={section}>
                        {section}
                    </span>)
            }
        </div>
    )
}

export default ProfileNavBar
