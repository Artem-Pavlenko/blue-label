import React from 'react'
import Checkbox from '../Checkbox/Checkbox'
import s from './ManagerAccListHeader.module.scss'


const ManagerAccListHeader = () => {
    return (
        <div className={s.managerAccListHeader}>
            <div className={s.name}>
                <Checkbox text='Name' id='name' />
            </div>
            <div className={s.id}>
                ID
            </div>
            <div className={s.amount}>
                Amount
            </div>
            <div className={s.networkFee}>
                Network Fee
            </div>
            <div className={s.withdrawFee}>
                Withdraw Fee
            </div>
            <div className={s.created}>
                Created
            </div>
            <div className={s.actions}>
                Actions
            </div>
        </div>
    )
}

export default ManagerAccListHeader
