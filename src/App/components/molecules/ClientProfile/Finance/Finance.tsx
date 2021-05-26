import React from 'react'
import infoImg from '../../../../assets/images/icons/info.svg'
import fakeGraph from '../../../../assets/images/mock/graph_fake.svg'
import TransactionsList from '../../../organizms/TransactionsList/TransactionsList'
import s from './Finance.module.scss'


const Finance = () => {

    const finances = [
        {title: 'Investable Amount', finance: '136,16 €', id: '1'},
        {title: 'Withdrawable Amount', finance: '-13,84 €', id: '2'},
        {title: 'Total Deposits', finance: '800,00 €', id: '3'},
        {title: 'Total Withdrawn', finance: '0,00 €', id: '4'},
        {title: 'Total Revenue', finance: '21 299,08 €', id: '5'},
        {title: 'Total Company Funds', finance: '150,00 €', id: '6'},
        {title: 'Total Spend', finance: '21 299,08 €', id: '7'},
        {title: 'Total Refunds', finance: '0,00 €', id: '8'},
        {title: 'Total Chargebacks', finance: '0,00 €', id: '9'},
        {title: 'Net Profit', finance: '-813,84 €', id: '10'},
        {title: 'Last deposit Amount', finance: '500,00 €', id: '11'}
    ]

    return (
        <div className={s.finance}>
            <div className={s.financialOverview}>
                <h3>Financial Overview</h3>
                <div className={s.list}>
                    {
                        finances.map(f =>
                            <div key={f.id} className={s.financeItem}>
                                <span className={s.title}>{f.title}</span>
                                <span className={s.count}>{f.finance}</span>
                                <img src={infoImg} alt=''/>
                            </div>)
                    }
                </div>
            </div>
            <div className={s.graph}>
                <h3>Profit & Loss Graph</h3>
                <div className={s.graphWrapper}>
                    <img className={s.fakeGraph} src={fakeGraph} alt=''/>
                </div>
            </div>
            <div className={s.transcriptions}>
                <p>Transactions</p>
                <button>CLEAR ALL FILTERS (0)</button>
            </div>
            <div className={s.transcriptionsList}>
                <TransactionsList />
            </div>
        </div>
    )
}

export default Finance
