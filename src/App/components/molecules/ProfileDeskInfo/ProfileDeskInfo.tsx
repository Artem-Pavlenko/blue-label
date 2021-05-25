import React from 'react'
import s from './ProfileDeskInfo.module.scss'

type ProfileDesk = {
    owner: string
    manager: string
    desk: string
}

const ProfileDeskInfo:React.FC<ProfileDesk> = ({desk, manager,owner}) => {
    return (
        <div className={s.profileDesk}>
            <div className={s.managerBlock}>
                <div className={s.owner}>
                    <div className={s.imgWrapper}>
                        <div className={s.ownerImg}/>
                    </div>
                    <span>{owner}</span>
                </div>
                <div className={s.manager}>
                    <div className={s.imgWrapper}>
                        <div className={s.managerImg}/>
                    </div>
                    <span>{manager}</span>
                </div>
                <div className={s.desk}>
                    <div className={s.imgWrapper}>
                        <div className={s.deskImg}/>
                    </div>
                    <span>{desk}</span>
                </div>
            </div>
        </div>
    )
}

export default ProfileDeskInfo
