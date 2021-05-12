import React from 'react'
import AffiliatesHeader from '../../atoms/AffiliatesHeader/AffiliatesHeader'
import s from './AffiliateItem.module.scss'
import AffiliateItem from "../../atoms/AffiliateItem/AffiliateItem";
import Paginator from "../Paginator/Paginator";

export type Affiliate = {
    name: string
    leads: number
    ftd: number
    deposits: string
    withdrawals: string
    netDeposit: string
}

const Affiliates = () => {
    const affiliates: Affiliate[] = [
        {
            name: 'Clickstadium - 1026',
            leads: 3989,
            ftd: 258,
            deposits: '1 585 238,88 €',
            withdrawals: '199 471,43 €',
            netDeposit: '1 385 767,45 €'
        },
        {
            name: 'Malqueen',
            leads: 3989,
            ftd: 258,
            deposits: '1 585 238,88 €',
            withdrawals: '199 471,43 €',
            netDeposit: '1 385 767,45 €'
        },
        {
            name: 'Clickstadium - 1050',
            leads: 3989,
            ftd: 258,
            deposits: '1 585 238,88 €',
            withdrawals: '199 471,43 €',
            netDeposit: '1 385 767,45 €'
        },
        {
            name: 'DE-DA',
            leads: 3989,
            ftd: 258,
            deposits: '1 585 238,88 €',
            withdrawals: '199 471,43 €',
            netDeposit: '1 385 767,45 €'
        },
    ]

    return (
        <div className={s.affiliate}>
            <p>Affiliates</p>
            <div className={s.list}>
                <AffiliatesHeader/>
                {affiliates.map(a => <AffiliateItem item key={a.name}  {...a} />)}
            </div>
            <Paginator />
        </div>
    )
}

export default Affiliates
