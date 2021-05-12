import React from 'react'
import sortIcon from '../../../assets/images/icons/sort.svg'
import s from './AffiliatesHeader.module.scss'


const AffiliatesHeader = () => {
    return (
        <div className={s.header}>
            <div className={s.name}>
                <span>Name</span>
                <img src={sortIcon} alt=''/>
            </div>
            <div className={s.leads}>
                <span>Leads</span>
            </div>
            <div className={s.ftd}>
                <span>FTD</span>
            </div>
            <div className={s.deposits}>
                <span>Deposits</span>
            </div>
            <div className={s.withdrawals}>
                <span>Withdrawals</span>
            </div>
            <div className={s.netDeposit}>
                <span>Net. Deposit</span>
            </div>
        </div>
    )
}

export default AffiliatesHeader
