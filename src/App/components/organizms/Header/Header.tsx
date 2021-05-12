import React from 'react'
import {useSelector} from 'react-redux'
import cn from 'classnames'
import NavBar from '../../molecules/NavBar/NavBar'
import Search from '../../molecules/Search/Search'
import Notification from '../../molecules/Notification/Notification'
import DropDownNavBar from '../../atoms/DropDownNavBar/DropDownNavBar'
import purpleBubble from '../../../assets/images/background/purple_bubble.svg'
import blueBubble from '../../../assets/images/background/blue_bubble.svg'
import {StateType} from '../../../store/store'
import {AuthRootType} from '../../../types/authTypes'
import s from './Header.module.scss'


const Header = () => {
    const {auth} = useSelector<StateType, AuthRootType>(state => state.auth)

    return (
        <div className={s.headerWrapper}>
            <header className={cn(s.headerBlock, {[s.auth]: auth})}>
                {
                    auth &&
                    <>
                        <NavBar/>
                        <Search/>
                        <div className={s.wrapper}>
                            <Notification/>
                            <DropDownNavBar/>
                        </div>
                    </>
                }
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
