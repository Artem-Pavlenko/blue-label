import React from 'react'
import {useSelector} from 'react-redux'
import cn from 'classnames'
import DropDownNavBar from '../../atoms/DropDownNavBar/DropDownNavBar'
import purpleBubble from '../../../assets/images/background/purple_bubble.svg'
import blueBubble from '../../../assets/images/background/blue_bubble.svg'
import {StateType} from '../../../store/store'
import {AuthStateType} from '../../../types/authTypes'
import s from './Header.module.scss'
import NavBar from "../../molecules/NavBar/NavBar";

const Header = () => {
    const {auth} = useSelector<StateType, AuthStateType>(state => state.auth)

    return (
        <div className={s.headerWrapper}>
            <header className={cn(s.headerBlock, {[s.auth]: auth})}>
                {auth && <NavBar />}
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

export default Header
