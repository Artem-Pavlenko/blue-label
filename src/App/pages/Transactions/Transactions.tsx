import React from 'react'
import Filter from '../../components/organizms/Filter/Filter'
import TransactionsList from '../../components/organizms/TransactionsList/TransactionsList'
import s from './Transactions.module.scss'


const Transactions = () => {
    return (
        <div className={s.transactions}>
            <Filter mainTitle='TRANSACTIONS' btnText='SAVE AS NEW SMART VIEW'/>
            <TransactionsList/>
        </div>
    )
}

export default Transactions
