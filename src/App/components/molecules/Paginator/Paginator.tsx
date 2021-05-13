import React from 'react'
import s from './Paginator.module.scss'


const Paginator: React.FC = () => {
    return (
        <div className={s.paginator}>
            <span>Rows per page:</span>
            <div className={s.leftArrow}/>
            <div className={s.left}/>
            <div className={s.count}>1-10 of 1240</div>
            <div className={s.right}/>
            <div className={s.rightArrow}/>
        </div>
    )
}

export default Paginator
