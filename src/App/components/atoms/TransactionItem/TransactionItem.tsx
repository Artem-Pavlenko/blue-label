import React from 'react'
import {Transaction} from '../../organizms/TransactionsList/TransactionsList'
import Checkbox from '../Tags/Checkbox/Checkbox'
import s from './TransactionItem.module.scss'


const TransactionItem: React.FC<Transaction> = (props) => {
    return (
        <div className={s.transaction}>
            <div className={s.actions}>
                <Checkbox text={props.action} id={props.transactionId} />
            </div>
            <div className={s.type}>{props.type}</div>
            <div className={s.id}>{props.transactionId}</div>
            <div className={s.user}>{props.user}</div>
            <div className={s.userAmount}>{props.userAmount}</div>
            <div className={s.userAmount}>{props.userAmount}</div>
            <div className={s.status}>{props.status}</div>
            <div className={s.itemId}>{props.itemId}</div>
        </div>
    )
}

export default TransactionItem
