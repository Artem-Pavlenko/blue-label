import React from 'react'
import cn from 'classnames'
import s from './ProfileNavBar.module.scss'

type ProfileNavBarType = {
    checked: string
    onChecked: (section: string) => void
}

const ProfileNavBar: React.FC<ProfileNavBarType> = ({checked, onChecked}) => {

    const sections = ['Overview', 'Details', 'Notes', 'Finance', 'Documents', 'Campaigns', 'Event Log']

    const onChangeCheckedSection = (section: string) => onChecked(section)

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
