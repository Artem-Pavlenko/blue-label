import React from 'react'
import TransactionsListHeader from '../../atoms/TransactionsListHeader/TransactionsListHeader'
import TransactionItem from '../../atoms/TransactionItem/TransactionItem'
import ListFooter from '../../molecules/ListFooter/ListFooter'
import s from './TransactionsList.module.scss'

export type Transaction = {
    action: string
    type: string
    transactionId: string
    user: string
    userAmount: string
    status: string
    itemId: string
}

const TransactionsList = () => {

    const transactions: Transaction[] = [
        {
            action: 'No Actions',
            type: 'Campaign Network Fee',
            transactionId: '5601',
            user: 'Uwe Se ibold',
            userAmount: '443,25 €',
            status: 'Completed',
            itemId: '77010'
        },
        {
            action: 'No Actions',
            type: 'Campaign Profit',
            transactionId: '5602',
            user: 'Uwe Se ibold',
            userAmount: '443,25 €',
            status: 'Completed',
            itemId: '77011'
        },
        {
            action: 'No Actions',
            type: 'Create Campaign',
            transactionId: '5603',
            user: 'Uwe Se ibold',
            userAmount: '443,25 €',
            status: 'Completed',
            itemId: '77012'
        },
        {
            action: 'No Actions',
            type: 'Campaign Network Fee',
            transactionId: '5604',
            user: 'Uwe Se ibold',
            userAmount: '443,25 €',
            status: 'Completed',
            itemId: '77013'
        },
        {
            action: 'No Actions',
            type: 'Campaign Profit',
            transactionId: '5605',
            user: 'Uwe Se ibold',
            userAmount: '443,25 €',
            status: 'Completed',
            itemId: '77014'
        },
        {
            action: 'No Actions',
            type: 'Create Campaign',
            transactionId: '5606',
            user: 'Uwe Se ibold',
            userAmount: '443,25 €',
            status: 'Completed',
            itemId: '77015'
        },
        {
            action: 'No Actions',
            type: 'Campaign Network Fee',
            transactionId: '5607',
            user: 'Uwe Se ibold',
            userAmount: '443,25 €',
            status: 'Completed',
            itemId: '77016'
        },
        {
            action: 'No Actions',
            type: 'Campaign Profit',
            transactionId: '5608',
            user: 'Uwe Se ibold',
            userAmount: '443,25 €',
            status: 'Completed',
            itemId: '77017'
        },
    ]

    return (
        <div className={s.transactionList}>
            <div className={s.list}>
                <TransactionsListHeader/>
                {transactions.map(t => <TransactionItem key={t.transactionId} {...t}/>)}
            </div>
            <ListFooter totalCount={28}/>
        </div>
    )
}

export default TransactionsList
