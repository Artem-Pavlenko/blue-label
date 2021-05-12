import React from 'react'
import AffiliatesHeader from '../../atoms/AffiliatesHeader/AffiliatesHeader'
import s from './AffiliateItem.module.scss'


const Affiliates = () => {
    return (
        <div className={s.affiliate}>
            <p>Affiliates</p>
            <div className={s.list}>
                <AffiliatesHeader/>
            </div>

        </div>
    )
}

export default Affiliates
