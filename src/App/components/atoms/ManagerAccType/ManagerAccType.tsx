import React from 'react'
import Checkbox from '../Tags/Checkbox/Checkbox'
import s from './ManagerAccType.module.scss'
import './ManagerAccType.scss'


export type ManagerAccItemType = {
    name: string
    ID: string
    amount: string
    networkFree: string
    withdrawFree: string
    created: string
}

const ManagerAccType: React.FC<ManagerAccItemType> = (props) => {
    return (
        <div className={`${s.managerAccType} managerAccType`}>
            <div className={s.name}>
                <Checkbox text={props.name} id={props.ID}/>
            </div>
            <div className={s.id}>
                {props.ID}
            </div>
            <div className={s.amount}>
                {props.amount}
            </div>
            <div className={s.networkFree}>
                {props.networkFree}
            </div>
            <div className={s.withdrawFree}>
                {props.withdrawFree}
            </div>
            <div className={s.created}>
                {props.created}
            </div>
            <div className={s.actions}>
                <div className={s.edit}/>
                <div className={s.delete}/>
            </div>
        </div>
    )
}

export default ManagerAccType
