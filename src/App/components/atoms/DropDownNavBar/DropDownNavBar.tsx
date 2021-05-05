import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import cn from 'classnames'
import arrow from '../../../assets/images/icons/down_arrow.svg'
import s from './DropDownNavBar.module.scss'


const DropDownNavBar = () => {
    const [showList, setShowList] = useState(false)

    const list = [
        {name: "Marco Sommer", path: "/", icon: "nameIcon"},
        {name: "My Profile", path: "/", icon: "profileIcon"},
        {name: "Sing out", path: "/", icon: "logoutIcon"},
    ]

    const showListHandler = () => setShowList(true)
    const hideListHandler = () => setShowList(false)

    return (
        <div className={s.navBarWrapper} onMouseOver={showListHandler} onMouseOut={hideListHandler}>
            <div className={s.mainBlock}>
                <span>MC</span>
            </div>
            <div className={cn(s.arrow, {[s.active]: showList})}>
                <img src={arrow} alt=""/>
            </div>
            <div className={cn(s.navList, {[s.active]: showList})}
                 onMouseOver={showListHandler}
                 onMouseOut={hideListHandler}
            >
                {
                    list.map(item =>
                        <Link key={item.name} to={item.path}>
                            <div className={s[item.icon]}/>
                            <span>{item.name}</span>
                        </Link>)
                }
            </div>
        </div>
    )
}

export default DropDownNavBar
