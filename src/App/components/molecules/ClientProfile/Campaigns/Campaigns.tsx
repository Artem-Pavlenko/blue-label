import React from 'react'
import BannersList from '../../BannersList/BannersList'
import s from './Campaigns.module.scss'


const Campaigns = () => {
    return (
        <div className={s.campaigns}>
            <div className={s.campaignsHeader}>
                <button>CLEAR ALL FILTERS (0)</button>
                <button>+ CREATE CAMPAIGNS</button>
            </div>
            <BannersList/>
        </div>
    )
}

export default Campaigns
