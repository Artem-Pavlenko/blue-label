import React from 'react'
import cn from 'classnames'
import {Affiliate} from '../../molecules/AffiliatItem/Affiliates'
import sortIcon from '../../../assets/images/icons/sort.svg'
import s from '../AffiliatesHeader/AffiliatesHeader.module.scss'


const AffiliateItem: React.FC<Affiliate & { item?: boolean }> = (props) => {
    return (
        <div className={cn(s.header, {[s.item]: props.item})}>
            <div className={s.name}>
                <span>{props.name}</span>
                {!props.item && <img src={sortIcon} alt=''/>}
            </div>
            <div className={s.leads}>
                <span>{props.leads}</span>
            </div>
            <div className={s.ftd}>
                <span>{props.ftd}</span>
            </div>
            <div className={s.deposits}>
                <span>{props.deposits}</span>
            </div>
            <div className={s.withdrawals}>
                <span>{props.withdrawals}</span>
            </div>
            <div className={s.netDeposit}>
                <span>{props.netDeposit}</span>
            </div>
        </div>
    )
}

export default AffiliateItem
