import React from 'react'
import {FilterType} from '../../organizms/Filter/Filter'
import Dots from '../../atoms/Dots/Dots'
import arrow from '../../../assets/images/icons/down_arrow.svg'
import s from './ManagerBlock.module.scss'



const ManagerBlock: React.FC<FilterType> = ({mainTitle, title = 'Working List', btnText}) => {
    return (
        <div className={s.managerBlock}>
            <div className={s.smartView}>
                <Dots/>
                <div className={s.info}>
                    <span>{title}</span>
                    <p>{mainTitle}</p>
                </div>
                <button>{btnText}</button>
            </div>
            <div className={s.managerFields}>
                <button>MANAGE FIELDS <img src={arrow} alt=''/></button>
            </div>
        </div>
    )
}

export default ManagerBlock
