import React from 'react'
import arrow from '../../../assets/images/icons/down_arrow.svg'
import s from './ManagerBlock.module.scss'



const ManagerBlock = () => {
    return (
        <div className={s.managerBlock}>
            <div className={s.smartView}>
                <div className={s.dots}/>
                <div className={s.info}>
                    <span>Smart View</span>
                    <p>MS AWAITING</p>
                </div>
                <button>SAVE SMART VIEW</button>
            </div>
            <div className={s.managerFields}>
                <button>MANAGE FIELDS <img src={arrow} alt=''/></button>
            </div>
        </div>
    )
}

export default ManagerBlock
