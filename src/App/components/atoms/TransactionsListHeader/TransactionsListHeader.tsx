import React from 'react'
import Checkbox from '../Tags/Checkbox/Checkbox'
import s from './TransactionsListHeader.module.scss'


const TransactionsListHeader = () => {
    return (
        <div className={s.listHeader}>
            <div className={s.actions}>
                <Checkbox text='Actions' id='action' />
            </div>
            <div className={s.type}>Type</div>
            <div className={s.id}>Transaction ID</div>
            <div className={s.user}>User</div>
            <div className={s.userAmount}>User Withdrawable Amount</div>
            <div className={s.userAmount}>User Withdrawable Amount</div>
            <div className={s.status}>Status</div>
            <div className={s.itemId}>Item ID</div>
        </div>
    )
}

export default TransactionsListHeader
