import React from 'react'
import {NavLink} from 'react-router-dom'
import s from './NavBarItem.module.scss'

type NavBarItemType = {
    name: string
    path: string
}

const NavBarItem: React.FC<NavBarItemType> = ({name, path}) => {
    return (
        <NavLink className={s.navBarItem} to={path} activeClassName={s.active}>
            {name}
        </NavLink>
    )
}

export default NavBarItem
