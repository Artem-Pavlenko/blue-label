import React from 'react'
import Dots from '../Dots/Dots'
import germanyImg from '../../../assets/images/icons/germany_icon.svg'
import s from './ClientProfileHeader.module.scss'

type ProfileHeader = {
    name: string
    id: string
}

const ClientProfileHeader: React.FC<ProfileHeader> = ({name, id}) => {
    return (
        <div className={s.clientProfileHeader}>
            <div className={s.wrapper}>
                <Dots/>
                <div className={s.name}>
                    <span>Client</span>
                    <span>{name}</span>
                </div>
            </div>
            <div className={s.id}>
                <span>{`(CRM ID #${id})`}</span>
                <img src={germanyImg} alt=''/>
            </div>
        </div>
    )
}

export default ClientProfileHeader
