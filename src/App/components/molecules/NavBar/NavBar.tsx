import React from 'react'
import NavBarItem from '../../atoms/NavBarItem/NavBarItem'
import lineIcon from '../../../assets/images/icons/nav_bar_line.svg'
import s from './NavBar.module.scss'


const NavBar = () => {
        const mainLinks = [
            {name: 'Dashboard', path: '/dashboard'}, {name: 'Leads', path: 'leads'}, {name: 'Clients', path: 'clients'},
        ]
        const secLinks = [
            {name: 'Documents', path: '/documents'}, {name: 'Transactions', path: '/transactions'}
        ]

        return (
            <div className={s.navBar}>
                <div className={s.mainGroup}>
                    {mainLinks.map(l => <NavBarItem key={l.name} {...l}/>)}
                    <img src={lineIcon} alt='' />
                </div>
                <div className={s.secGroup}>
                    {secLinks.map(l => <NavBarItem key={l.name} {...l}/>)}
                    <img src={lineIcon} alt='' />
                </div>
                <div className={s.restGroup}>
                    <NavBarItem name='Calendar' path='/calendar' />
                    <img src={lineIcon} alt='' />
                    <NavBarItem name='Banners' path='/banners' />
                    <img src={lineIcon} alt='' />
                    <NavBarItem name='Settings' path='/settings' />
                    <img src={lineIcon} alt='' />
                </div>
            </div>
        );
    }
;

export default NavBar;
