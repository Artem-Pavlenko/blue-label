import React from 'react'
import Checkbox from '../Tags/Checkbox/Checkbox'
import s from './BannerItem.module.scss'

export type Banner = {
    ID: string
    userName: string
    userID: string
    userInvest: string
    category: string
    marketplaceID: string
    name: string
    runningFor: string
    totalPeriod: string
}

const BannerItem: React.FC<Banner> = (props) => {
    return (
        <div className={s.bannerItem}>
            <div className={s.id}>
                <Checkbox text={props.ID} id={props.ID}/>
            </div>
            <div className={s.userName}>
                {props.userName}
            </div>
            <div className={s.userId}>
                {props.userID}
            </div>
            <div className={s.userInvest}>
                {props.userInvest}
            </div>
            <div className={s.category}>
                {props.category}
            </div>
            <div className={s.marketplaceId}>
                {props.marketplaceID}
            </div>
            <div className={s.name}>
                {props.name}
            </div>
            <div className={s.runningFor}>
                {props.runningFor}
            </div>
            <div className={s.totalPeriod}>
                {props.totalPeriod}
            </div>
        </div>
    )
}

export default BannerItem
