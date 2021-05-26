import React from 'react'
import s from './BannerListHeader.module.scss'
import Checkbox from "../Tags/Checkbox/Checkbox";


const BannerListHeader = () => {
    return (
        <div className={s.bannerHeader}>
            <div className={s.id}>
                <Checkbox text='ID' id='ID'/>
            </div>
            <div className={s.userName}>
                User Name
            </div>
            <div className={s.userId}>
                user ID
            </div>
            <div className={s.userInvest}>
                User Investable Amount
            </div>
            <div className={s.category}>
                Category
            </div>
            <div className={s.marketplaceId}>
                Marketplace ID
            </div>
            <div className={s.name}>
                Name
            </div>
            <div className={s.runningFor}>
                Running for
            </div>
            <div className={s.totalPeriod}>
                Total Period
            </div>
        </div>
    )
}

export default BannerListHeader
