import React from 'react'
import DropDownNavBar from "../../atoms/DropDownNavBar/DropDownNavBar";
import purpleBubble from '../../../assets/images/background/purple_bubble.svg'
import blueBubble from '../../../assets/images/background/blue_bubble.svg'
import s from './LoginHeader.module.scss'

const LoginHeader = () => {
    return (
        <div className={s.headerWrapper}>
            <header className={s.headerBlock}>
                <DropDownNavBar/>
            </header>
            <div className={s.background}>
                <div className={s.top}/>
                <div className={s.bottom}/>
            </div>
            <img className={s.purpleBubble} src={purpleBubble} alt=""/>
            <img className={s.blueBubble} src={blueBubble} alt=""/>
        </div>
    )
}

export default LoginHeader
